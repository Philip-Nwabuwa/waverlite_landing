import Image from "next/image";

import QrScan from "@/assets/images/main/qr.png";
import Icon1 from "@/assets/icons/main/Icon1.svg";
import Icon2 from "@/assets/icons/main/Icon2.svg";
import Giftcard1 from "@/assets/images/main/gift-card1.png";
import Giftcard2 from "@/assets/images/main/gift-card2.png";
import Giftcard3 from "@/assets/images/main/gift-card3.png";
import freelancers1 from "@/assets/images/main/freelancers1.png";
import freelancers2 from "@/assets/images/main/freelancers2.png";
import person1 from "@/assets/images/overdraft/overdraft-person.png";
import person2 from "@/assets/images/overdraft/overdraft-person2.png";
import Link from "next/link";

const Simplify = () => {
  return (
    <section className="container-xl w-full">
      <h3 className="text-[#272A2B] text-center lg:text-[60px] text-[40px] font-bold lg:leading-[94px] leading-[50px] mb-8 lg:mb-[72px]">
        Wide Selection{" "}
      </h3>
      <div className="w-full text-[#BCBDBD] flex flex-col justify-center items-center gap-4 text-center ">
        <p className="text-[24px]">
          Enjoy a vast array of options to suit everyone&apos;s preferences.
        </p>
        <p className="text-[20px] max-w-[525px] ">
          Get gift cards for all your favourite platforms including iTunes,
          Google Play, Amazon, Spotify, eBay, Target, and 120+ more.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-[28px]">
        <div>
          <div className="flex lg:hidden mt-[64px]">
            <Image src={Giftcard2} className="w-full" alt="Gift card1" />
          </div>
          <div className="wrapper lg:flex hidden items-center mt-[64px] bg-[#000] rounded-[36px]">
            <div className="item item1">
              <Image src={Giftcard1} alt="Gift card1" />
            </div>
            <div className="item item2">
              <Image src={Giftcard2} alt="Gift card2" />
            </div>
            <div className="item item3">
              <Image src={Giftcard3} alt="Gift card3" />
            </div>
          </div>
        </div>
        <div className="pathClip flex lg:flex-row flex-col justify-between gap-6 bg-[#272A2B] rounded-[64px] p-[52px]">
          <div>
            <h2 className="mb-6 lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold">
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
        <div className="bg-[#E9F4FA] grid lg:grid-cols-2 rounded-[32px]">
          <div className="lg:p-[52px] p-6">
            <Image src={Icon1} alt="" />
            <h3 className="lg:text-[60px] text-[40px] font-bold text-[#272A2B] lg:leading-[80px] my-[24px]">
              Scan to Pay
            </h3>
            <p className="text-[#9C9D9D] lg:text-[20px] text-lg lg:leading-[32px] mb-[48px]">
              Utilize our scan-to-pay feature for quick and secure transactions,
              enhancing your shopping experience.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="p-[28px]">
            <Image src={QrScan} className="w-full" alt={""} />
          </div>
        </div>
        <div className="bg-[#E9F4FA] lg:p-[28px] p-6 rounded-[32px]">
          <div className="lg:grid lg:grid-cols-11 flex flex-col gap-[28px] ">
            <div className="bg-[#272A2B] col-span-5 h-full lg:p-[52px] p-6 rounded-[36px]">
              <Image src={Icon2} alt="" />
              <h3 className="lg:text-[60px] text-2xl font-bold text-[#E9EAEA] lg:leading-[80px] my-[24px]">
                Built for Freelancers
              </h3>
              <p className="text-[#9C9D9D] lg:text-[20px] text-base font-bold leading-[32px] mb-[48px]">
                Empower your business with our sales mode, allowing you to
                receive payments from customers.
              </p>
              <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Learn More
              </button>
            </div>
            <div className="lg:flex col-span-6 hidden gap-[28px]">
              <Image src={freelancers1} alt={""} />
              <Image src={freelancers2} alt={""} />
            </div>
            <div className="flex lg:hidden items-center justify-center gap-[28px]">
              <div>
                <Image src={freelancers1} className="h-full w-full" alt={""} />
              </div>
              <div>
                <Image src={freelancers2} className="h-full w-full" alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
