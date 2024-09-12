import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/gift-card/Hero";
import PerfectGift from "@/components/modules/gift-card/PerfectGift";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | Gift Cards",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <PerfectGift />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
