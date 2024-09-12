import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/scan/Hero";
import Simplify from "@/components/modules/scan/Simplify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | Scan to Pay",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Simplify />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
