import Footer from "@/components/common/Footer";
import TeamBuzz from "@/components/common/TeamBuzz";
import WaverliteJoin from "@/components/common/WaverliteJoin";
import Contact from "@/components/modules/career/Contact";
import Hero from "@/components/modules/career/Hero";
import Why from "@/components/modules/career/Why";

const CareerPage = () => {
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <Hero />
      <Why />
      <WaverliteJoin />
      <TeamBuzz />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};

export default CareerPage;
