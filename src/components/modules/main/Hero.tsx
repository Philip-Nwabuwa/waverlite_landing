import Image from "next/image";

import HeroImg from "@/assets/images/main/hero.png";
const Hero = () => {
  return (
    <section>
      <Image
        placeholder="blur"
        priority={true}
        src={HeroImg}
        alt={""}
        className="hidden lg:flex w-full"
      />
      <div className="container-xl grid lg:grid-cols-2 gap-4 lg:mt-9 mt-40">
        <div className="flex flex-col gap-6">
          <p className="text-primary font-bold">Instant & Secure</p>
          <h4 className="xl:text-[68px] text-[52px] font-bold leading-[50px] lg:leading-[70px]">
            Your fastest
            <br />
            route to{" "}
            <span className="text-primary">
              global
              <br />
              payments.
            </span>
          </h4>
        </div>
        <div className="flex flex-col justify-between">
          <p className="lg:text-[26px] text-lg lg:leading-8">
            Travel the world and spend like a local with instant global
            payments. No spending limits, just freedom.
          </p>
          <div className="flex lg:gap-12 gap-6 mt-6">
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started
            </button>
            <button className="py-2 px-6 text-[#272A2B] font-semibold">
              Watch Demo
            </button>
          </div>
          <p className="text-gray-text lg:text-[20px] text-lg mt-6 lg:mt-0 font-semibold leading-8">
            Get started now to start experiencing the convenience of Waverlite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
