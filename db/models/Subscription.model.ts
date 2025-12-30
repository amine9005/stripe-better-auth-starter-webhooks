import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    plan: { type: String, required: true },
    period: { type: String, required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true },
);

const SubscriptionModel =
  mongoose.model("subscription", subscriptionSchema) ||
  mongoose.models.subscription;
export default SubscriptionModel;
export type Subscription = InferSchemaType<typeof subscriptionSchema>;
export type SubscriptionDocument = HydratedDocument<Subscription>;
