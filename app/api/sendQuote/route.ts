import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "465",
      auth: {
        user: "ashirarif167@gmail.com",
        pass: "vywvwxmwrgxrrrwd",
      },
    } as SMTPTransport.MailOptions);

    const mailOptions_customer = {
      from: `ashirarif167@gmail.com`,
      to: data.email,
      subject: `New Contact Form Submitted`,
      text: `Dear ${data.first_name},\n\nThank you for your inquiry! Our team will get in touch with you shortly.`,
    };

    const mailOptions_admin = {
      from: `ashirarif167@gmail.com`,
      to: "ashirarif167@gmail.com",
      subject: `New Contact Form Submitted`,
      html: `
          <h2>New Quote Request</h2>
          <p><strong>First Name:</strong> ${data.first_name}</p>
          <p><strong>Last Name:</strong> ${data.last_name}</p>
          <p><strong>Contact Number:</strong> ${data.contact_number}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
    };

    await transporter.sendMail(mailOptions_customer);
    await transporter.sendMail(mailOptions_admin);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error processing email request:", error.message);
      console.error("Error stack trace:", error.stack);
    } else {
      console.error("An unknown error occurred");
    }

    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send email",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
