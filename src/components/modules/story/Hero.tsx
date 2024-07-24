import Image from "next/image";

import Star1 from "@/assets/icons/Star 1.svg";
import Star2 from "@/assets/icons/Star 2.svg";
import Story1 from "@/assets/images/story/Story1.png";
import Story2 from "@/assets/images/story/Story2.png";
import Story3 from "@/assets/images/story/Story3.png";
import Story4 from "@/assets/images/story/Story4.png";
import Story5 from "@/assets/images/story/Story5.png";

const Hero = () => {
  return (
    <section className="space-y-32">
      <div className="container-xl !pt-[200px] text-center">
        <p className="text-gray-text text-[22px] font-semibold mb-[48px]">
          ABOUT US
        </p>
        <div className="relative">
          <h2 className="text-[#272A2B] text-[70px] font-bold leading-[80px]">
            We&apos;ve been helping individuals and businesses make{" "}
            <span className="text-[#1E8DCC]">instant global payments.</span>
          </h2>
          <div className="absolute -top-10 left-5">
            <Image src={Star1} alt="star-blue" />
          </div>
          <div className="absolute -top-20 right-40">
            <Image src={Star2} alt="star-balck" />
          </div>
          <div className="absolute bottom-6 right-80">
            <Image src={Star1} alt="star-blue" />
          </div>
          <div className="absolute -bottom-16 left-40">
            <Image src={Star2} alt="star-black" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <Image src={Story1} alt="Story1" width={200} height={200} />
        <Image src={Story2} alt="Story2" width={200} height={200} />
        <Image src={Story3} alt="Story3" width={200} height={200} />
        <Image src={Story4} alt="Story4" width={200} height={200} />
        <Image src={Story5} alt="Story5" width={200} height={200} />
      </div>
    </section>
  );
};

export default Hero;
