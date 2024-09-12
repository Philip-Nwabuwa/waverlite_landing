import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/currency-exchange/Hero";
import Transfers from "@/components/modules/currency-exchange/Transfers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | Currency Exchange",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Transfers />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
