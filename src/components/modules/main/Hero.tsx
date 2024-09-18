import Image from "next/image";
import Modal from "@/components/common/Modal";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="mainBgLg hidden lg:flex">
        <div className="container-xl lg:mt-9 mt-40">
          <div className="mt-[200px]">
            <div className="flex flex-col">
              <p className="w-fit text-[15px] flex items-center gap-2 px-4 mb-4 py-2 bg-[#f0faff] text-[#1B80BA] rounded-[6px] font-semibold">
                Instant & Secure{" "}
                <Image
                  src={
                    "https://res.cloudinary.com/w22/wlt-website/icons/LockKey.svg"
                  }
                  height={100}
                  width={100}
                  className="size-[20px]"
                  alt={"lock"}
                />
              </p>
              <h1 className="text-white xl:text-[64px] text-[50px] font-bold leading-[50px] lg:leading-[70px] mb-[30px]">
                Your fastest route to <br /> global payments.
              </h1>
            </div>
            <p className="text-white lg:text-[20px] pt-[30px] text-sm lg:leading-8">
              Travel the world and spend like a local with instant global <br />
              payments. No spending limits, just freedom.
            </p>
            <div className="flex flex-col pb-[150px]">
              <div className="flex gap-6 pt-[42px]">
                <Link
                  href={"https://app.waverlite.com/create-account"}
                  className="py-4 px-[30px] bg-primary text-[#E9EAEA] rounded-[8px] font-bold text-[14px] lg:text-[16px]"
                >
                  Get Started
                </Link>
                <Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full mt-[82px]">
        <Image
          unoptimized
          className="w-full"
          src={
            "https://res.cloudinary.com/w22/wlt-website/images/main/mainSm.png"
          }
          alt="Hero image"
          height={100}
          width={100}
        />
        <div className="container-xl mt-5">
          <div className="flex flex-col">
            <p className="w-fit flex items-center gap-2 px-3 py-1 mb-4 bg-[#f0faff] text-[#1B80BA] rounded-[6px] font-semibold">
              Instant & Secure{" "}
              <Image
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/LockKey.svg"
                }
                height={100}
                width={100}
                className="size-[20px]"
                alt={"lock"}
              />
            </p>
            <h1 className="text-[24px] font-bold leading-[40px] mb-[6px]">
              Your fastest route to global payments.
            </h1>
          </div>
          <p className="pt-[16px] text-sm lg:leading-8">
            Travel the world and spend like a local with instant global
            payments. No spending limits, just freedom.
          </p>
          <div className="flex flex-col">
            <div className="flex gap-6 pt-[30px]">
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="py-4 px-[30px] bg-primary text-[#E9EAEA] rounded-[8px] font-bold text-[14px] lg:text-[16px]"
              >
                Get Started
              </Link>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
