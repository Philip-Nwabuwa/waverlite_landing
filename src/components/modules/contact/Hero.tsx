import Image from "next/image";
import hero from "@/assets/images/contact/Hero.png";

const Hero = () => {
  return (
    <section className="mt-[200px]">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[84px]">
        <h1 className="text-[84px] font-bold my-6 leading-[94px]">
          We’d love to hear from you{" "}
        </h1>
        <h2 className="w-full max-w-[900px] text-[26px] text-[#525555] font-bold mb-20">
          If you have questions, complaints, feedback, or are interested in
          partnering with us, please reach out via one of the emails listed
          below.{" "}
        </h2>
        <Image priority src={hero} alt={"Globe"} />
      </div>
    </section>
  );
};

export default Hero;
