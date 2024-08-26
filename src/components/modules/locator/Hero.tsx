import Image from "next/image";

import hero from "@/assets/images/locator/hero.png";

const Hero = () => {
  return (
    <section className="container-xl mt-[100px]">
      <div className="grid grid-cols-2 items-center gap-2">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE LOCATOR
          </p>
          <h1 className="text-[40px] lg:text-[60px] font-bold my-6 leading-[70px]">
            Find Waverlite Supported Businesses Near You
          </h1>
          <h2 className="text-[22px] text-[#525555] font-bold">
            Easily locate stores, restaurants, and more that accept Waverlite
            payments.
          </h2>
        </div>
        <div>
          <Image priority src={hero} alt={"Globe"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
