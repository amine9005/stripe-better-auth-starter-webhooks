import { stripeClient } from "@/lib/stripe";
import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import SubscriptionModel from "@/db/models/Subscription.model";
import mongoose from "mongoose";

const db = await getClient();

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripeClient.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (error) {
    console.log("web signature verification failed", error);
    return NextResponse.json(
      { success: false, message: "Web signature verification failed", error },
      { status: 400 },
    );
  }

  const dbSession = await mongoose.startSession();
  dbSession.startTransaction();
  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = await stripeClient.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          },
        );
        const customerId = session.customer as string;
        const customerDetails = session.customer_details;

        if (customerDetails?.email) {
          const user = await db
            .collection("user")
            .findOne({ email: customerDetails.email });
          if (!user) {
            // TODO is this the best you can do ?
            throw new Error("User not found");
          }

          if (!user.customerId) {
            await db.collection("user").findOneAndUpdate(
              { _id: user._id },
              {
                $set: { customerId: customerId },
              },
              { session: dbSession },
            );
          }

          const lineItems = session.line_items?.data || [];

          for (const items of lineItems) {
            const priceId = items.price?.id;
            const isSubscription = items.price?.type === "recurring";

            if (isSubscription) {
              const endDate = new Date();

              if (priceId === process.env.STRIPE_PERSONAL_YEARLY_PRICE_ID) {
                endDate.setFullYear(endDate.getFullYear() + 1);
              } else if (
                priceId === process.env.STRIPE_PERSONAL_MONTHLY_PRICE_ID
              ) {
                endDate.setMonth(endDate.getMonth() + 1);
              } else {
                throw new Error("Invalid priceId");
              }

              const sub = await SubscriptionModel.findOneAndUpdate(
                {
                  userId: user._id,
                },
                {
                  plan: "premium",
                  period:
                    priceId === process.env.STRIPE_PERSONAL_YEARLY_PRICE_ID
                      ? "yearly"
                      : "monthly",
                  startDate: new Date(),
                  endDate: endDate,
                },

                {
                  session: dbSession,
                  upsert: true,
                  returnDocument: "after",
                },
              );
              if (!sub) {
                throw new Error("Subscription not found");
              }

              await db.collection("user").findOneAndUpdate(
                { _id: user._id },
                {
                  $set: { plan: "premium", subscription: sub._id },
                },
                { session: dbSession },
              );
            } else {
            }
          }
        }
        break;

      // case "customer.subscription.updated":
      //   const subscription = await stripeClient.subscriptions.retrieve(
      //     event.data.object.id,
      //   );

      //   const user = await db
      //     .collection("user")
      //     .findOne({ customerId: subscription.customer });

      //   if (!user) {
      //     throw new Error("User not found can't update subscription");
      //   }

      //   const priceId = subscription?.items.data[0].plan.id;

      //   const endDate = new Date();

      //   if (priceId === process.env.STRIPE_PERSONAL_YEARLY_PRICE_ID) {
      //     endDate.setFullYear(endDate.getFullYear() + 1);
      //   } else if (priceId === process.env.STRIPE_PERSONAL_MONTHLY_PRICE_ID) {
      //     endDate.setMonth(endDate.getMonth() + 1);
      //   } else {
      //     throw new Error("Invalid priceId");
      //   }

      //   const sub = await SubscriptionModel.findOneAndUpdate(
      //     {
      //       userId: user._id,
      //     },
      //     {
      //       plan: "premium",
      //       period:
      //         priceId === process.env.STRIPE_PERSONAL_YEARLY_PRICE_ID
      //           ? "yearly"
      //           : "monthly",
      //       startDate: new Date(),
      //       endDate: endDate,
      //     },

      //     {
      //       session: dbSession,
      //       upsert: true,
      //       returnDocument: "after",
      //     },
      //   );
      //   if (!sub) {
      //     throw new Error("Subscription not found");
      //   }
      //   user.plan = "premium";

      //   user.save({ session: dbSession });

      //   break;

      case "customer.subscription.deleted":
        {
          const subscription = await stripeClient.subscriptions.retrieve(
            event.data.object.id,
          );
          const user = await db
            .collection("user")
            .findOne({ customerId: subscription.customer });
          if (user) {
            await db.collection("user").findOneAndUpdate(
              { _id: user._id },
              {
                $set: { plan: "free" },
              },
              { session: dbSession },
            );
          } else {
            console.log("User not found for the subscription deleted event");
            throw new Error(
              "User not found for the subscription deleted event",
            );
          }
        }
        // console.log("subscription deleted");

        break;

      default:
        console.log("Unhandled event type ", event.type);
    }
    await dbSession.commitTransaction();
    dbSession.endSession();
  } catch (error) {
    await dbSession.abortTransaction();
    dbSession.endSession();
    console.error("Error Handing Stripe Event: ", error);
    return NextResponse.json(
      { success: false, message: "Failed to handle event", error },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { success: true, message: "Stripe Event Handled Successfully" },
    { status: 200 },
  );
}
