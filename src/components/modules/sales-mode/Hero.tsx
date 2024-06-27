import Image from "next/image";

import hero from "@/assets/images/sales-mode/slaesmode-hero.svg";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px] mb-[184px]">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE SALES MODE
          </p>
          <h1 className="text-[84px] font-bold my-6 leading-[94px]">
            Upgrade Your Business Payments
          </h1>
          <h2 className="text-[26px] text-[#525555] font-bold">
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
