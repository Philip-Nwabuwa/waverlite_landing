import Buzz from "@/components/common/Buzz";
import Footer from "@/components/common/Footer";
import Join from "@/components/common/Join";
import Updates from "@/components/common/Updates";
import Hero from "@/components/modules/freelancer/Hero";
import Secure from "@/components/modules/freelancer/Secure";

const FreelancerPage = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Secure />
      <Buzz />
      <Join />
      {/* <Updates /> */}
      <Footer />
    </main>
  );
};

export default FreelancerPage;
