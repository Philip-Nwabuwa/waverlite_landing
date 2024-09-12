import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Hero from "@/components/modules/about/Hero";
import Story from "@/components/modules/about/Story";
import Vision from "@/components/modules/about/Vision";

const page = () => {
  return (
    <main className="storyBgLg flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Vision />
      <Story />
      <Cta />
      <Footer />
    </main>
  );
};

export default page;
