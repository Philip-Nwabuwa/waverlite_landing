import Image from "next/image";
import Link from "next/link";

import send from "@/assets/images/freelancer/send.png";
import currencies from "@/assets/images/currency-exchange/Coins-currencies.svg";

const Secure = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="flex flex-col gap-[28px]">
        <div className="pathClip bg-[#e9f4fa80] grid grid-cols-2 gap-[28px] p-[52px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div>
            <h3 className="text-[40px] lg:text-[60px] font-bold leading-[70px] mb-6">
              Fast and Easy Payments{" "}
            </h3>
            <p className="text-gray-text font-bold text-[24px] leading-[32px] mb-12">
              Receive payments instantly from clients worldwide, with no delays
              or hidden fees.
            </p>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </div>
          <div className="h-full lg:h-[680px] bg-[#1B80BA] flex justify-center items-end rounded-[12px] pl-6 pt-6">
            <Image src={send} alt={"Send fast"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[28px]">
        <div className="col-span-2 bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] font-bold mb-[24px] leading-[70px]">
            Secure and Reliable{" "}
          </h3>
          <p className="text-[24px] text-[#9C9D9D] font-bold">
            Your financial data is protected with advanced encryption and
            security measures.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
        </div>
        <div className="col-span-3 bg-[#272A2B] p-[60px] rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] text-[#E9EAEA] font-bold mb-[24px] leading-[70px]">
            Multiple Currency Support{" "}
          </h3>
          <p className="text-[#9C9D9D] text-[24px] font-bold">
            Accept payments in multiple currencies and enjoy automatic
            conversions at competitive rates.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 mb-[60px] py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image src={currencies} alt="No hidden charges" />
        </div>
      </div>
    </section>
  );
};

export default Secure;
