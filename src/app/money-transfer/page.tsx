import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/money-transfer/Hero";
import SendMoney from "@/components/modules/money-transfer/SendMoney";
import Why from "@/components/modules/money-transfer/Why";

const page = () => {
  return (
    <main>
      <Hero />
      <SendMoney />
      <Why />
      <Buzz />
      <Join />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
