import Cta from "../components/common/Cta";
import Footer from "../components/common/Footer";
import Brands from "../components/modules/main/Brands";
import Experience from "../components/modules/main/Experience";
import Hero from "../components/modules/main/Hero";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-[90px] gap-[40px]">
      <Hero />
      <Experience />
      <Brands />
      <Cta />
      <Footer />
    </main>
  );
}
