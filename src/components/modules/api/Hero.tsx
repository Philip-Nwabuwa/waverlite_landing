import Link from "next/link";
import Image from "next/image";

import hero from "@/assets/images/api/web_designv2_7 1.png";

const Hero = () => {
  return (
    <section className="container-xl apiBgLg bg-[#272A2B]">
      <div className="grid lg:grid-cols-2 gap-6 items-center pt-[200px] pb-20">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE FOR DEVELOPERS
          </p>
          <h1 className="text-[40px] lg:text-[60px] text-white font-bold my-6 leading-[70px]">
            Robust APIs for Developers
          </h1>
          <h2 className="text-[24px] text-white mb-12">
            Waverlite was built with developers in mind. Give your application
            super powers with Waverlite API integration.
          </h2>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Read Documentation
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
