"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ReCaptchaProviderProps {
  children: React.ReactNode;
}

export const ReCaptchaProvider = ({ children }: ReCaptchaProviderProps) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
    throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set");
  }
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey} language="en">
      {children}
    </GoogleReCaptchaProvider>
  );
};
