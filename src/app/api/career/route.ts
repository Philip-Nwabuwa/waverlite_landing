import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    {
      method: "POST",
    }
  );
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    return NextResponse.json({ error: "reCAPTCHA failed." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: `New Job Application from ${firstName} ${surname}`,
    text: `
      Name: ${firstName} ${surname}
      Email: ${email}
      Phone: ${phone}
      Role: ${role}
      Country: ${country}
      Experience: ${experience}
      About: ${about}
      Portfolio: ${portfolio}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}
