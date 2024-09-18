import Image from "next/image";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px]">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE OVERDRAFT BALANCE
          </p>
          <h1 className="lg:text-[60px] text-[40px] font-bold my-6 lg:leading-[74px]">
            Financial Flexibility for Canadians
          </h1>
          <h2 className="text-[24px] text-[#525555] font-bold">
            Waverlite&apos;s Overdraft Balance offers peace of mind with instant
            access to extra funds whenever you need them.
          </h2>
        </div>
        <div>
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/overdraft/overdraft-main.svg"
            }
            alt={"Globe"}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
