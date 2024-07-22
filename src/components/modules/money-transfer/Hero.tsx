import Link from "next/link";
import Image from "next/image";

import hero from "@/assets/images/money-transfer/hero.png";

const Hero = () => {
  return (
    <section className="mt-[200px] container-xl">
      <div className="flex flex-col justify-center gap-6 text-center lg:mb-[84px] mb-10">
        <p className="text-gray-text font-bold text-[20px]">
          GLOBAL MONEY TRANSFERS
        </p>
        <h1 className="lg:text-[84px] text-[45px] font-bold my-6 leading-[50px] lg:leading-[94px]">
          Fast and Secure
          <br />
          Global Money Transfers
        </h1>
        <h2 className="lg:text-[34px] text-xl text-[#525555]">
          Send money locally and internationally with ease.
        </h2>
        <Link href={"/"} className="w-full flex justify-center">
          <button className="w-fit mt-12 py-3 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold border-[#272A2B] border-solid border-b-4 border-r-4">
            Get Started Now
          </button>
        </Link>
      </div>
      <Image priority src={hero} alt={"Globe"} />
    </section>
  );
};

export default Hero;
