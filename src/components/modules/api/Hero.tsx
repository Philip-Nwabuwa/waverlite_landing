import Link from "next/link";
import Image from "next/image";

import hero from "@/assets/images/api/web_designv2_7 1.png";

const Hero = () => {
  return (
    <section className="container-xl apiBgLg bg-[#272A2B]">
      <div className="grid grid-cols-2 gap-6 items-center pt-[200px] pb-20">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE FOR DEVELOPERS
          </p>
          <h1 className="text-[40px] lg:text-[60px] text-[#E9EAEA] font-bold my-6 leading-[70px]">
            Robust APIs for Developers
          </h1>
          <h2 className="text-[24px] text-[#525555] font-bold">
            Waverlite was built with developers in mind. Give your application
            super powers with Waverlite API integration.
          </h2>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Read Documentation
            </button>
          </Link>
        </div>
        <div>
          <Image priority src={hero} alt={"Code"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
