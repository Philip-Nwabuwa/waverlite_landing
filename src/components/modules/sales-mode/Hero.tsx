import Image from "next/image";

import hero from "@/assets/images/sales-mode/slaesmode-hero.svg";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px]">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="lg:w-[50%]">
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE SALES MODE
          </p>
          <h1 className="lg:text-[60px] text-[40px] font-bold my-6 leading-[74px]">
            Upgrade Your Business Payments
          </h1>
          <h2 className="text-[24px] text-[#525555] font-bold">
            Streamline transactions and attract local and traveling customers
            with our seamless payment solution.
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
