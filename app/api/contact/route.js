import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// transporter
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// send email function
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${userMessage}</p>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email Error:", error.message);
    return false;
  }
}

// API
export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const message = `New message from ${name}\nEmail: ${email}\nMessage: ${userMessage}`;

    const emailSuccess = await sendEmail(payload, message);

    if (emailSuccess) {
      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );

  } catch (error) {
    console.error("API Error:", error.message);

    return NextResponse.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    );
  }
}