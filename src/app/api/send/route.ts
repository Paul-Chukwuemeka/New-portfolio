import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import DOMPurify from "dompurify";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^S@]+@[^S@]+\.[^S@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  const sanitizedName = DOMPurify.sanitize(name);
  const sanitizedMessage = DOMPurify.sanitize(message);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["paulchukwuemeka22@gmail.com"],
      subject: "Contact from portfolio",
      react: EmailTemplate({ name: sanitizedName, message: sanitizedMessage, email }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
