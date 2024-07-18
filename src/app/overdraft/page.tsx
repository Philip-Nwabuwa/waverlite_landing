import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/overdraft/Hero";
import Support from "@/components/modules/overdraft/Support";

const page = () => {
  return (
    <main>
      <Hero />
      <Support />
      <Buzz />
      <Join />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
