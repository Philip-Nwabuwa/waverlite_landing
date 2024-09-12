import Image from "next/image";

import Map from "@/assets/images/main/wave-map.png";

const Brands = () => {
  return (
    <section className="container-xl flex flex-col justify-center items-center">
      <h3 className="text-[#272A2B] max-w-[1024px] text-center lg:text-[40px] text-[32px] font-semibold lg:leading-[70px] lg:mb-[32px] mb-10">
        Fast and Secure Global Money <br className="hidden lg:flex" /> Transfers{" "}
      </h3>
      <p className="text-gray-text lg:text-[18px] lg:leading-[32px] text-center mb-5">
        With our secure and efficient platform, we provide seamless transactions
        that support <br className="hidden lg:flex" /> businesses in scaling and
        thriving in today&apos;s global economy.
      </p>
      <p className="text-gray-text lg:text-[16px] lg:leading-[32px] text-center mb-10">
        Over 100 of the fastest-growing brands use Waverlite
      </p>
      <Image src={Map} alt="Map" />
    </section>
  );
};

export default Brands;
