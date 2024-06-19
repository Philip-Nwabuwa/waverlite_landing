import Link from "next/link";
import Image from "next/image";

import hero from "@/assets/images/money-transfer/hero.svg";

const Hero = () => {
  return (
    <section className="mt-[200px]">
      <div className="flex flex-col justify-center gap-6 text-center lg:mb-[84px]">
        <p className="text-gray-text font-bold text-[20px]">
          GLOBAL MONEY TRANSFERS
        </p>
        <h1 className="text-[84px] font-bold my-6 leading-[94px]">
          Fast and Secure
          <br />
          Global Money Transfers
        </h1>
        <h2 className="text-[34px] text-[#525555] font-bold">
          Send money locally and internationally with ease.
        </h2>
        <Link href={"/"} className="w-full flex justify-center">
          <button className="w-fit mt-12 py-3 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold border-[#272A2B] border-solid border-b-4 border-r-4">
            Get Started Now
          </button>
        </Link>
      </div>
      <Image priority unoptimized src={hero} alt={"Globe"} />
    </section>
  );
};

export default Hero;
