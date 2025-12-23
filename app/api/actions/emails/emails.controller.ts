"use server";
import EmailVerification from "@/emails/EmailVerification";
import PasswordResetEmail from "@/emails/PasswordResetEmail";
import resend from "@/lib/resend";

const FROM = process.env.EMAIL_FROM!;

export async function sendVerificationEmailAction(email: string, url: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      // TODO add email address
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: "Verify your email address",
      react: EmailVerification({ url: url }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendResetPasswordEmailAction(
  name: string,
  email: string,
  url: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      // TODO add email address
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: "Reset your password",
      react: PasswordResetEmail({ name, url: url }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
