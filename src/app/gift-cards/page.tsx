import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/gift-card/Hero";
import PerfectGift from "@/components/modules/gift-card/PerfectGift";

const page = () => {
  return (
    <main>
      <Hero />
      <PerfectGift />
      <Join />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
