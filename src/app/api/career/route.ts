import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(req: NextRequest) {
  const {
    firstName,
    surname,
    email,
    phone,
    role,
    country,
    experience,
    about,
    portfolio,
    recaptchaToken,
  } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "reCAPTCHA secret key is not set." },
      { status: 500 }
    );
  }

  try {
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );
    const recaptchaData = recaptchaResponse.data;

    if (!recaptchaData.success) {
      return NextResponse.json({ error: "reCAPTCHA failed." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Job Application from ${firstName} ${surname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #3498db; padding-bottom: 10px;">New Job Application</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${surname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Role:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${role}</td>
            </tr>
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Country:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${country}</td>
            </tr>
             <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Experience:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${experience}</td>
            </tr>
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">About:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${about}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Portfolio:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="${portfolio}" style="color: #3498db; text-decoration: none;">${portfolio}</a></td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      return NextResponse.json({ error: error }, { status: 500 });
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
}
