import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

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
        className={`${quicksand.className} w-full bg-[#FDFDFD] flex items-center justify-center `}
      >
        <div className="flex justify-center">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
