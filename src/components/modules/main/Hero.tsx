import Modal from "@/components/common/Modal";
import Image from "next/image";

import heroImageSm from "@/assets/images/main/mainSm.png";

const Hero = () => {
  return (
    <section>
      <div className="mainBgLg hidden lg:flex">
        <div className="container-xl lg:mt-9 mt-40">
          <div className="mt-[150px]">
            <div className="flex flex-col gap-6">
              <p className="w-fit px-3 py-1 bg-[#CDEDFF] text-[#1B80BA] rounded-[6px] font-semibold">
                Instant & Secure
              </p>
              <h4 className="text-white xl:text-[64px] text-[50px] font-bold leading-[50px] lg:leading-[70px]">
                Your fastest route to <br /> global payments.
              </h4>
            </div>
            <p className="text-white lg:text-[16px] pt-[30px] text-sm lg:leading-8">
              Travel the world and spend like a local with instant global
              payments. <br /> No spending limits, just freedom.
            </p>
            <div className="flex flex-col pb-[160px]">
              <div className="flex gap-6 pt-[30px]">
                <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                  Get Started
                </button>
                <Modal videoId="4aPBhAQ7TGU?si=eT5T37FmJdE_kDSt" />
              </div>
              <p className="text-white lg:text-[16px] pt-[30px] text-sm lg:leading-8">
                Get started now to start experiencing the convenience of <br />
                Waverlite.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full mt-[82px]">
        <Image className="w-full" src={heroImageSm} alt="Hero image" />
        <div className="container-xl mt-5">
          <div className="flex flex-col gap-6">
            <p className="w-fit px-3 py-1 bg-[#CDEDFF] text-[#1B80BA] rounded-[6px] font-semibold">
              Instant & Secure
            </p>
            <h4 className="text-[24px] font-bold leading-[40px]">
              Your fastest route to global payments.
            </h4>
          </div>
          <p className="pt-[30px] text-sm lg:leading-8">
            Travel the world and spend like a local with instant global
            payments. <br /> No spending limits, just freedom.
          </p>
          <div className="flex flex-col">
            <div className="flex gap-6 pt-[30px]">
              <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Get Started
              </button>
              <Modal videoId="4aPBhAQ7TGU?si=eT5T37FmJdE_kDSt" />
            </div>
            <p className="pt-[30px] text-sm lg:leading-8">
              Get started now to start experiencing the convenience of <br />
              Waverlite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
