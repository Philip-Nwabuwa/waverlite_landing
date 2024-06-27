import Footer from "@/components/common/Footer";
import Updates from "@/components/common/Updates";
import Customer from "@/components/modules/sales-mode/Customer";
import Hero from "@/components/modules/sales-mode/Hero";
import WhySales from "@/components/modules/sales-mode/Why-Sales";

const page = () => {
  return (
    <main>
      <Hero />
      <Customer />
      <WhySales />
      <Updates />
      <Footer />
    </main>
  );
};

export default page;
