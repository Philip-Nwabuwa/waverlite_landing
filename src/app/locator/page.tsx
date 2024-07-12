import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import About from "@/components/modules/locator/About";
import Hero from "@/components/modules/locator/Hero";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
