import Footer from "@/components/common/Footer";
import Hero from "@/components/modules/story/Hero";
import Story from "@/components/modules/story/Story";
import Team from "@/components/modules/story/Team";
import Vision from "@/components/modules/story/Vision";

const page = () => {
  return (
    <main className="storyBgLg flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Vision />
      <Team />
      <Story />
      <Footer />
    </main>
  );
};

export default page;
