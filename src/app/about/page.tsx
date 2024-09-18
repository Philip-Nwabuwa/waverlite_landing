import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Hero from "@/components/modules/about/Hero";
import Story from "@/components/modules/about/Story";
import Vision from "@/components/modules/about/Vision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waverlite | About Us",
  description:
    "Waverlite is the fastest way to send and receive money as an immigrant, student, freelancer or an expanding business.",
};

const page = () => {
  return (
    <main className="storyBgLg flex flex-col lg:gap-[184px] md:gap-[100px] gap-[60px]">
      <Hero />
      <Vision />
      <Story />
      <Cta />
      <Footer />
    </main>
  );
};

export default page;
