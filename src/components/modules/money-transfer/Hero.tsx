import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[200px] container-xl">
      <div className="flex flex-col justify-center gap-6 text-center lg:mb-[84px] mb-10">
        <p className="text-gray-text font-bold text-[20px]">
          GLOBAL MONEY TRANSFERS
        </p>
        <h1 className="lg:text-[60px] text-[40px] font-bold my-6 leading-[50px] lg:leading-[94px]">
          Fast and Secure
          <br />
          Global Money Transfers
        </h1>
        <h2 className="lg:text-[30px] text-xl text-[#525555]">
          Send money locally and internationally with ease.
        </h2>
        <Link href={"/"} className="w-full flex justify-center">
          <button className="w-fit mt-12 py-3 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold border-[#272A2B] border-solid border-b-4 border-r-4">
            Get Started Now
          </button>
        </Link>
      </div>
      <div className="flex justify-center rounded-2xl">
        <Image
          priority
          unoptimized
          src={
            "https://res.cloudinary.com/w22/wlt-website/images/money-transfer/hero.png"
          }
          width={100}
          height={100}
          className="w-full h-full lg:rounded-[60px] rounded-[20px]"
          alt={"Globe"}
        />
      </div>
    </section>
  );
};

export default Hero;
