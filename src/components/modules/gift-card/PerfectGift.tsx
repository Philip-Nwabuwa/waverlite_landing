import Link from "next/link";
import Image from "next/image";

import person1 from "@/assets/images/overdraft/overdraft-person.png";
import person2 from "@/assets/images/overdraft/overdraft-person2.png";
import person3 from "@/assets/images/giftCard/giftcard-person.png";
import person4 from "@/assets/images/giftCard/giftcard-person1.png";
import frame from "@/assets/images/giftCard/Frame-wave.svg";

const PerfectGift = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="pathClip flex lg:flex-row flex-col justify-between gap-6 bg-[#272A2B] rounded-[64px] lg:p-[52px] p-[30px]">
        <div>
          <h2 className="mb-6 lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold">
            Perfect Gifts
          </h2>
          <p className="w-full max-w-[525px] text-[#BCBDBD] text-[26px] font-bold  mb-12">
            These gift cards are perfect for your loved ones, employees, and
            customers. Show your appreciation and make gift-giving easy with
            choices they&apos;ll love.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Buy Gift Card
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Image className="h-fit" src={person1} alt="" />
          <Image src={person2} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-[28px]">
        <div className="lg:col-span-2 bg-[#E9F4FA] lg:p-[60px] p-[30px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] font-bold mb-[24px] lg:leading-[80px]">
            No Hidden Fees
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold mb-12">
            What you see is what you get—no hidden fees or charges.{" "}
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
        </div>
        <div className="lg:col-span-3 bg-[#272A2B] lg:p-[60px] p-[30px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold mb-[24px] lg:leading-[80px]">
            Simple to Buy and Use
          </h3>
          <p className="text-[#9C9D9D] text-[26px] font-bold mb-12">
            Purchase gift cards online and redeem them instantly at
            participating merchants.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit mb-[60px] py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
          <Image src={person3} alt="No hidden charges" className="mt-12" />
        </div>
      </div>
      <div>
        <div className="bg-[#e9f4fa80] grid lg:grid-cols-4 gap-[28px] p-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="col-span-2 bg-[#1E8DCC] lg:p-[52px] p-[30px] rounded-[36px]">
            <h3 className="text-[#E9F4FA] lg:text-[60px] font-bold leading-[70px] mb-6">
              Convinient and Versatile
            </h3>
            <p className="w-full max-w-[476px] text-[#B9DCEF] font-bold text-[24px] leading-[32px] mb-12">
              Gift cards offer a convenient and versatile solution for any
              occasion.
            </p>
            <Link
              href={"https://app.waverlite.com/create-account"}
              className="w-fit mt-12 py-4 px-8 bg-[#E9EAEA] rounded-[8px] font-semibold"
            >
              Buy Gift Card
            </Link>
          </div>
          <div className="col-span-1">
            <Image className="w-fit h-full" src={person4} alt="" />
          </div>
          <div className="col-span-1 flex items-end justify-center bg-[#272A2B] pl-10 rounded-[36px]">
            <Image src={frame} alt="frame" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectGift;
