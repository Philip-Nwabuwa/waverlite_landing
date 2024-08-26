import Image from "next/image";

import hero from "@/assets/images/overdraft/overdraft-main.svg";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px]">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE OVERDRAFT BALANCE
          </p>
          <h1 className="text-[60px] font-bold my-6 leading-[74px]">
            Financial Flexibility for Canadians
          </h1>
          <h2 className="text-[24px] text-[#525555] font-bold">
            Waverlite&apos;s Overdraft Balance offers peace of mind with instant
            access to extra funds whenever you need them.
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
