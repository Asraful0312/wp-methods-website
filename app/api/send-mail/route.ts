import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(request: NextRequest) {
  const {
    name,
    email,
    country,
    service,
    subService,
    estimatedCost,
    requirements,
    extraPage,
    turnstileToken, // CAPTCHA token from client
  } = await request.json();

  // Validate required fields
  if (
    !name ||
    !email ||
    !country ||
    !service ||
    !requirements ||
    !turnstileToken
  ) {
    return NextResponse.json(
      { message: "Missing required fields or CAPTCHA token" },
      { status: 400 }
    );
  }

  // Validate sub-service for specific services
  if (
    (service === "Create WordPress Website" ||
      service === "ReSkin/Customize Android Source Code" ||
      service === "Custom Development") &&
    !subService
  ) {
    return NextResponse.json(
      { message: `Sub-service required for ${service}` },
      { status: 400 }
    );
  }

  // Validate Turnstile token
  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );

  const turnstileResult = await turnstileResponse.json();
  if (!turnstileResult.success) {
    console.error(
      "Turnstile verification failed:",
      turnstileResult["error-codes"]
    );
    return NextResponse.json(
      { message: "CAPTCHA verification failed" },
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

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #00d963; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Service Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
             
             
              <table role="presentation" width="100%" cellspacing="0" cellpadding="10" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Name:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${name}</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${email}</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Country:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${
                    country || "N/A"
                  }</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Primary Service:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${service}</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Sub-Service:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${
                    subService || "N/A"
                  }</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Extra Pages:</td>
                  <td style="font-size: 16px; color: #555555; border-bottom: 1px solid #e0e0e0;">${
                    extraPage || "0"
                  }</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Estimated Cost:</td>
                  <td style="font-size: 16px; color: #00d963; font-weight: bold; border-bottom: 1px solid #e0e0e0;">$${estimatedCost}</td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333333; font-weight: bold;">Additional Requirements:</td>
                  <td style="font-size: 16px; color: #555555;">${
                    requirements || "None"
                  }</td>
                </tr>
              </table>
              
            </td>
          </tr>
         
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  // Email options
  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.ADMIN_EMAIL || "ajhar@wpmethods.com",
    subject: "Service Request",
    text: `
Service Request

Name: ${name}
Email: ${email}
Country: ${country || "N/A"}
Primary Service: ${service}
Sub-Service: ${subService || "N/A"}
Extra Pages: ${extraPage || "0"}
Estimated Cost: $${estimatedCost || "N/A"}
Requirements: ${requirements || "None"}
`,
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
