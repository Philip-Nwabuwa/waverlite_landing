import Link from "next/link";
import Image from "next/image";

import hero from "@/assets/images/giftCard/giftcard-main.png";

const Hero = () => {
  return (
    <section className="mt-[200px]">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[84px]">
        <p className="text-gray-text font-bold text-[20px]">
          WAVERLITE GIFT CARDS
        </p>
        <h1 className="lg:text-[60px] text-[40px] font-bold my-6 lg:leading-[94px]">
          The Perfect Gift for Everyone
        </h1>
        <h2 className="w-full max-w-[547px] text-[24px] text-[#525555] font-bold">
          Convenient, versatile, and secure gift cards for any occasion.
        </h2>
        <Link
          href={"https://app.waverlite.com/create-account"}
          className="flex justify-center w-fit my-12 py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold border-[#272A2B] border-solid border-b-4 border-r-4"
        >
          Get Started Now
        </Link>
      </div>
      <Image priority src={hero} alt={"Globe"} />
    </section>
  );
};

export default Hero;
