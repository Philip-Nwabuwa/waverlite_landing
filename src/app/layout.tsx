import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waverlite | Fast Global Payment",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} w-full bg-[#FDFDFD] flex items-center justify-center `}
      >
        <div className="max-w-[1440px] flex justify-center">
          <Navbar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
