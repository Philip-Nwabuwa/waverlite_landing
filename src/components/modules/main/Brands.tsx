import Image from "next/image";

const Brands = () => {
  return (
    <section className="container-xl flex flex-col justify-center items-center">
      <h3 className="text-[#272A2B] max-w-[1024px] text-center lg:text-[40px] text-[32px] font-semibold lg:leading-[70px] lg:mb-[32px] mb-10">
        Fast and Secure Global Money <br className="hidden lg:flex" /> Transfers{" "}
      </h3>
      <p className="lg:text-[18px] lg:leading-[32px] text-center mb-5">
        With our secure and efficient platform, we provide seamless transactions
        that support <br className="hidden lg:flex" /> businesses in scaling and
        thriving in today&apos;s global economy.
      </p>
      <p className="lg:text-[16px] lg:leading-[32px] text-center mb-10">
        Over 100 of the fastest-growing brands use Waverlite
      </p>
      <Image
        unoptimized
        src={
          "https://res.cloudinary.com/w22/wlt-website/images/main/wave-map.png"
        }
        alt="Map"
        height={100}
        width={100}
        className="w-full"
      />
    </section>
  );
};

export default Brands;
