import Image from "next/image";

import Star1 from "@/assets/icons/Star 1.svg";
import Star2 from "@/assets/icons/Star 2.svg";

const Hero = () => {
  return (
    <section className="container-xl storyBgLg !pt-[200px] text-center">
      <p className="text-gray-text text-[22px] font-semibold mb-[48px]">
        ABOUT US
      </p>
      <h2 className="text-[#272A2B] text-[80px] font-bold leading-[94px]">
        We've been helping individuals and businesses make{" "}
        <span className="text-[#1E8DCC]">instant global payments.</span>
      </h2>
      <div>
        <Image src={Star1} alt="star-blue" />
      </div>
      <div>
        <Image src={Star2} alt="star-blue" />
      </div>
    </section>
  );
};

export default Hero;
