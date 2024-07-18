import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/currency-exchange/Hero";
import Transfers from "@/components/modules/currency-exchange/Transfers";

const page = () => {
  return (
    <main>
      <Hero />
      <Transfers />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
