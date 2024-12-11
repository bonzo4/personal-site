"use server";
import { resend } from "@/lib/resend";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default async function contact({ name, email, message }: Props) {
  try {
    const response = await resend.emails.send({
      from: "contact@resend.dev",
      to: "alonzo.bonzo.dev@gmail.com",
      subject: "Contact Form Submission from " + name,
      html: "<p>" + message + "</p>" + "<p>From: " + email + "</p>",
    });
    if (response.error) {
      throw new Error(response.error.message);
    }
    return "success";
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
    return "error";
  }
}
