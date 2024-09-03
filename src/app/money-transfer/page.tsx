import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Hero from "@/components/modules/money-transfer/Hero";
import SendMoney from "@/components/modules/money-transfer/SendMoney";
import Why from "@/components/modules/money-transfer/Why";

const page = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <SendMoney />
      <Why />
      <Buzz />
      <Join />
      <Footer />
    </main>
  );
};

export default page;
