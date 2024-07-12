import Image from "next/image";

import hero from "@/assets/images/currency-exchange/hero.png";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px] mb-[184px]">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE CURRENCY EXCHANGE
          </p>
          <h1 className="text-[84px] font-bold my-6 leading-[94px]">
            Simplifying Global Transactions
          </h1>
          <h2 className="text-[22px] text-[#525555] font-bold">
            Whether you're traveling, sending money abroad, or managing global
            business operations, our platform offers competitive rates and a
            seamless experience.
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