import Image from "next/image";

import HeroImg from "@/assets/images/main/hero.png";
const Hero = () => {
  return (
    <section>
      <Image src={HeroImg} alt={""} className="w-full" />
      <div className="container-xl grid grid-cols-2 gap-4 my-9">
        <div className="flex flex-col gap-6">
          <p className="text-primary font-bold">Instant & Secure</p>
          <h4 className="text-[68px] font-bold leading-[70px]">
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
          <p className="text-[26px] font-bold leading-8">
            Travel the world and spend like a local with instant global
            payments. No spending limits, just freedom.
          </p>
          <div className="flex gap-12">
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started
            </button>
            <button className="py-2 px-6 text-[#272A2B] font-semibold">
              Watch Demo
            </button>
          </div>
          <p className="text-gray-text text-[20px] font-semibold leading-8">
            Get started now to start experiencing the convenience of Waverlite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
