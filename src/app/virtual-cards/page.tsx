import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/virtual-card/Hero";
import Setup from "@/components/modules/virtual-card/Setup";

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Setup />
      <Buzz />
      <Join />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
