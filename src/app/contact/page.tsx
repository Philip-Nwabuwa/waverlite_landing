import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Contact from "@/components/modules/contact/Contact";
import Hero from "@/components/modules/contact/Hero";

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Contact />
      <Cta />
      <Footer />
    </main>
  );
};

export default page;
