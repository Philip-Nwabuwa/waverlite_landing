import Cta from "./components/common/Cta";
import Footer from "./components/common/Footer";
import Updates from "./components/common/Updates";
import Brands from "./components/modules/main/Brands";
import Experience from "./components/modules/main/Experience";
import Hero from "./components/modules/main/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Updates />
      <Experience />
      <Brands />
      <Cta />
      <Footer />
    </main>
  );
}
