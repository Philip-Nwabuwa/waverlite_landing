"use client";

import Image from "next/image";

import QrScan from "@/assets/images/main/scanImage.png";
import Icon1 from "@/assets/icons/main/Icon1.svg";
import Icon2 from "@/assets/icons/main/Icon2.svg";
import Icon3 from "@/assets/icons/main/Icon3.svg";
import Icon4 from "@/assets/icons/main/Icon4.svg";
import giftCards from "@/assets/images/main/Frame 71.png";
import salesMode from "@/assets/images/main/sales-mode.png";
import freelancers1 from "@/assets/images/main/freelancers.png";
import freelancers2 from "@/assets/images/main/freelancers1.png";
import freelancerSm1 from "@/assets/images/main/free1.svg";
import freelancerSm2 from "@/assets/images/main/free2.svg";

const Experience = () => {
  return (
    <section className="container-xl">
      <h2 className="text-[#272A2B] text-center lg:text-[60px] text-[40px] font-bold lg:leading-[94px] leading-[50px] mb-[72px]">
        Feel the best experience with <br className="hidden lg:flex" /> our
        features
      </h2>
      <div className="flex flex-col gap-[28px]">
        <div className="bg-[#E9F4FA] scanBg grid lg:grid-cols-2 rounded-[32px]">
          <div className="lg:p-[52px] p-6">
            <Image src={Icon1} alt="" className="size-[40px] lg:size-[60px]" />
            <h2 className="lg:text-[40px] text-[24px] font-bold text-[#272A2B] lg:leading-[80px] my-[24px]">
              Scan to Pay
            </h2>
            <p className="lg:text-[20px] text-lg lg:leading-[32px] mb-[48px]">
              Utilize our scan-to-pay feature for quick and{" "}
              <br className="hidden lg:flex" /> secure transactions, enhancing
              your <br className="hidden lg:flex" /> shopping experience.
            </p>
            <button className="py-2 px-6 bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="p-[28px]">
            <Image src={QrScan} className="w-full" alt={"QrScan"} />
          </div>
        </div>

        <div className="bg-[#FFF8f1] grid lg:grid-cols-10 lg:p-[52px] gap-[28px] p-6 rounded-[32px]">
          <div className="lg:col-span-4 flex flex-col gap-[24px]">
            <Image src={Icon2} alt="" className="size-[40px] lg:size-[60px]" />
            <h2 className="lg:text-[40px] text-[30px] font-semibold lg:leading-[80px] leading-[50px]">
              Built for Freelancers
            </h2>
            <p className="lg:text-[20px] text-lg lg:leading-[32px]">
              Empower your business with our <br className="lg:block hidden " />{" "}
              mode, allowing you to receive payments{" "}
              <br className="hidden lg:block" /> from customers.
            </p>
            <button className="w-fit py-2 px-6 bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-2 lg:hidden gap-[10px] pt-[24px]">
            <Image unoptimized src={freelancerSm1} alt="" className="w-full" />
            <Image unoptimized src={freelancerSm2} alt="" className="w-full" />
          </div>
          <div className="lg:flex hidden col-span-3">
            <Image src={freelancers1} alt="freeelancer 1" />
          </div>
          <div className="lg:flex hidden col-span-3">
            <Image src={freelancers2} alt="freeelancer 2" />
          </div>
        </div>

        <div className="bg-[#FFFef5] grid lg:grid-cols-2 lg:p-[52px] lg:gap-[60px] gap-[28px] p-6 rounded-[32px]">
          <div className="flex flex-col gap-[24px]">
            <Image src={Icon3} alt="" className="size-[40px] lg:size-[60px]" />
            <h2 className="lg:text-[40px] text-[30px] font-semibold lg:leading-[80px] leading-[50px]">
              Purchase Gift cards{" "}
            </h2>
            <p className="lg:text-[20px] text-lg lg:leading-[32px]">
              Get gift cards for all your favourite platforms including iTunes,
              Google Play, Amazon, Spotify, eBay, Target, and 120+ more, perfect
              for your loved ones, employees and customers.
            </p>
            <button className="w-fit py-2 px-6 bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="gap-[28px] pt-[24px]">
            <Image unoptimized src={giftCards} alt="" className="w-full" />
          </div>
        </div>

        <div className="bg-[#F3F7FF] grid lg:grid-cols-2 lg:p-[52px] lg:gap-[60px] gap-[28px] p-6 rounded-[32px]">
          <div className="flex flex-col gap-[24px]">
            <Image src={Icon4} alt="" className="size-[40px] lg:size-[60px]" />
            <h2 className="lg:text-[40px] text-[30px] font-semibold lg:leading-[80px] leading-[50px]">
              Sales Mode
            </h2>
            <p className="lg:text-[20px] text-lg lg:leading-[32px]">
              Empower your business with our sales mode,{" "}
              <br className="hidden lg:flex" /> allowing you to receive payments
              from <br className="hidden lg:flex" /> waverlite users.
            </p>
            <button className="w-fit py-2 px-6 bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="gap-[28px] pt-[24px]">
            <Image unoptimized src={salesMode} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
