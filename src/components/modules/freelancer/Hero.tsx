import Image from "next/image";

import hero from "@/assets/images/freelancer/main.png";

const Hero = () => {
  return (
    <section className="mt-[200px]">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[84px]">
        <Image priority src={hero} alt={"Globe"} className="rounded-[60px]" />

        <p className="text-gray-text font-bold text-[20px] mt-16">
          BUILT FOR FREELANCERS{" "}
        </p>
        <h1 className="text-[40px] lg:text-[60px] font-bold my-6 leading-[70px]">
          Empower Your Freelance Career with Waverlite{" "}
        </h1>
        <h2 className="w-full max-w-[547px] text-[24px] text-[#525555] font-bold">
          Simplify Payments and Expand Your Opportunities.{" "}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
