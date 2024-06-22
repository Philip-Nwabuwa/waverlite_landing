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
      <div className="pathClip flex justify-between bg-[#272A2B] rounded-[64px] p-[52px]">
        <div>
          <h2 className="mb-6 text-[80px] text-[#E9EAEA] font-bold">
            Perfect Gifts
          </h2>
          <p className="w-full max-w-[525px] text-[#BCBDBD] text-[26px] font-bold">
            These gift cards are perfect for your loved ones, employees, and
            customers. Show your appreciation and make gift-giving easy with
            choices they&apos;ll love.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-[#E9EAEA] rounded-[8px] font-semibold">
              Buy Gift Card
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Image className="h-fit" src={person1} alt="" />
          <Image src={person2} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[28px]">
        <div className="col-span-2 bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] font-bold mb-[24px] leading-[80px]">
            No Hidden Fees
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold">
            What you see is what you get—no hidden fees or charges.{" "}
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
        </div>
        <div className="col-span-3 bg-[#272A2B] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] text-[#E9EAEA] font-bold mb-[24px] leading-[80px]">
            Simple to Buy and Use
          </h3>
          <p className="text-[#9C9D9D] text-[26px] font-bold">
            Purchase gift cards online and redeem them instantly at
            participating merchants.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 mb-[60px] py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image src={person3} alt="No hidden charges" />
        </div>
      </div>
      <div>
        <div className="bg-[#e9f4fa80] grid grid-cols-4 gap-[28px] p-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="col-span-2 bg-[#1E8DCC] p-[52px] rounded-[36px]">
            <h3 className="text-[#E9F4FA] text-[80px] font-bold leading-[80px] mb-6">
              Convinient and Versatile
            </h3>
            <p className="w-full max-w-[476px] text-[#B9DCEF] font-bold text-[26px] leading-[32px] mb-12">
              Gift cards offer a convenient and versatile solution for any
              occasion.
            </p>
            <button className="w-fit mt-12 py-2 px-8 bg-[#E9EAEA] rounded-[8px] font-semibold">
              Buy Gift Card
            </button>
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
