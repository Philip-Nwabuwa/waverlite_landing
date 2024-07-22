import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import About from "@/components/modules/locator/About";
import Hero from "@/components/modules/locator/Hero";

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <About />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
