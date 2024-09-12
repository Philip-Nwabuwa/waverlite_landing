import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/money-transfer/Hero";
import SendMoney from "@/components/modules/money-transfer/SendMoney";
import Why from "@/components/modules/money-transfer/Why";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | Money Transfer",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <SendMoney />
      <Why />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
