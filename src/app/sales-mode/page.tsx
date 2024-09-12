import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Customer from "@/components/modules/sales-mode/Customer";
import Hero from "@/components/modules/sales-mode/Hero";
import WhySales from "@/components/modules/sales-mode/Why-Sales";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | Sales Mode",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Customer />
      <WhySales />
      <Buzz />
      <Footer />
    </main>
  );
};

export default page;
