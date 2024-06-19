import Footer from "@/components/common/Footer";
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
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
