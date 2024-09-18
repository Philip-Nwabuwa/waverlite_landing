import Image from "next/image";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px]">
      <div className="grid lg:grid-cols-2 items-center gap-2">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE CURRENCY EXCHANGE
          </p>
          <h1 className="lg:text-[60px] text-[40px] font-bold my-6 lg:leading-[94px]">
            Simplifying Global Transactions
          </h1>
          <h2 className="text-[22px] text-[#525555] font-bold">
            Whether you&apos;re traveling, sending money abroad, or managing
            global business operations, our platform offers competitive rates
            and a seamless experience.
          </h2>
        </div>
        <div>
          <Image
            priority
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/currency-exchange/hero.png"
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
