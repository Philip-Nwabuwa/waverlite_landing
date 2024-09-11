import Image from "next/image";

import Map from "@/assets/images/main/wave-map.png";

const Brands = () => {
  return (
    <section className="container-xl flex flex-col justify-center items-center">
      <h3 className="text-[#272A2B] max-w-[1024px] text-center lg:text-[60px] text-[32px] font-bold lg:leading-[70px] lg:mb-[32px] mb-10">
        Fast and Secure Global Money Transfers{" "}
      </h3>
      <p className="text-gray-text lg:text-[24px] lg:leading-[32px] text-center mb-10">
        With our secure and efficient platform,
        <br className="hidden lg:flex" /> we provide seamless transactions that
        support businesses <br className="hidden lg:flex" />
        in scaling and thriving in today&apos;s global economy.
      </p>
      <Image src={Map} alt="Map" />
    </section>
  );
};

export default Brands;
