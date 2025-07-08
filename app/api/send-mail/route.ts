import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(request: NextRequest) {
  const { to, subject, text, html } = await request.json();

  // Validate input
  if (!to || !subject || (!text && !html)) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log(
    "env",
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_SECURE === "true",
    process.env.SMTP_USER,
    process.env.SMTP_PASS
  );
  // Define the SMTP configuration with explicit type
  const transportOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  };

  // Create the transporter
  const transporter = nodemailer.createTransport(transportOptions);

  // Email options
  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL,
    to,
    subject,
    text,
    html,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
