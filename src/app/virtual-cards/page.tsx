import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/virtual-card/Hero";
import Setup from "@/components/modules/virtual-card/Setup";

const page = () => {
  return (
    <main>
      <Hero />
      <Setup />
      <Join />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
