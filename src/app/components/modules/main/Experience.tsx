import Image from "next/image";

import QrScan from "@/app/assets/images/main/qr.png";
import Icon1 from "@/app/assets/icons/main/Icon1.svg";
import Icon2 from "@/app/assets/icons/main/Icon2.svg";
import Icon3 from "@/app/assets/icons/main/Icon3.svg";
import Icon4 from "@/app/assets/icons/main/Icon4.svg";
import Giftcard1 from "@/app/assets/images/main/gift-card1.png";
import Giftcard2 from "@/app/assets/images/main/gift-card2.png";
import Giftcard3 from "@/app/assets/images/main/gift-card3.png";
import freelancers1 from "@/app/assets/images/main/freelancers1.png";
import freelancers2 from "@/app/assets/images/main/freelancers2.png";
import sales1 from "@/app/assets/images/main/sales1.png";
import sales2 from "@/app/assets/images/main/sales2.png";
import sales3 from "@/app/assets/images/main/sales3.png";
import sales4 from "@/app/assets/images/main/sales4.png";
import map from "@/app/assets/images/main/map.png";

const Experience = () => {
  return (
    <section className="container-xl">
      <h3 className="text-[#272A2B] text-center text-[80px] font-bold leading-[94px] mb-[72px]">
        Feel the best experience with our features
      </h3>
      <div className="flex flex-col gap-[28px]">
        <div className="bg-[#E9F4FA] grid grid-cols-2 rounded-[32px]">
          <div className="p-[52px]">
            <Image src={Icon1} alt="" />
            <h3 className="text-[68px] font-bold text-[#272A2B] leading-[80px] my-[24px]">
              Scan to Pay
            </h3>
            <p className="text-[#9C9D9D] text-[20px] font-bold leading-[32px] mb-[48px]">
              Utilize our scan-to-pay feature for quick and secure transactions,
              enhancing your shopping experience.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="p-[28px]">
            <Image src={QrScan} alt={""} />
          </div>
        </div>
        <div className="bg-[#E9F4FA] grid grid-cols-11 gap-[28px] p-[28px] rounded-[32px]">
          <div className="col-span-5">
            <div className="bg-[#272A2B] h-full p-[52px] rounded-[36px]">
              <Image src={Icon2} alt="" />
              <h3 className="text-[60px] font-bold text-[#E9EAEA] leading-[80px] my-[24px]">
                Built for Freelancers
              </h3>
              <p className="text-[#9C9D9D] text-[20px] font-bold leading-[32px] mb-[48px]">
                Empower your business with our sales mode, allowing you to
                receive payments from customers.
              </p>
              <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-span-6 flex gap-[28px]">
            <div>
              <Image src={freelancers1} className="h-full" alt={""} />
            </div>
            <div>
              <Image src={freelancers2} className="h-full" alt={""} />
            </div>
          </div>
        </div>
        <div className="bg-[#E9F4FA] rounded-[32px] p-[28px]">
          <div className="p-[24px]">
            <Image src={Icon3} alt="" />
            <h3 className="text-[68px] font-bold text-[#272A2B] leading-[80px] my-[24px]">
              Purchase Gift cards
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] text-[20px] font-bold leading-[32px] mb-[48px]">
              Get gift cards for all your favorite platforms including iTunes,
              Google Play, Amazon, Spotify, eBay, Target, and 120+ more, perfect
              for your loved ones, employees and customers.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="wrapper flex items-center mt-[64px] bg-[#000] rounded-[36px]">
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
        <div className="bg-[#E9F4FA] rounded-[32px] p-[28px]">
          <div className="p-[24px]">
            <Image src={Icon4} alt="" />
            <h3 className="text-[68px] font-bold text-[#272A2B] leading-[80px] my-[24px]">
              Fast and Secure <br /> Global Money Transfers
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] text-[20px] font-bold leading-[32px] mb-[48px]">
              Send money locally and internationally with ease.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <Image src={map} alt="" className="mt-[64px] h-[413px]" />
        </div>
        <div className="bg-[#E9F4FA] w-full rounded-[32px] p-[28px] h-[1045px] relative overflow-hidden">
          <div className="p-[24px]">
            <Image src={Icon3} alt="" />
            <h3 className="text-[68px] font-bold text-[#272A2B] leading-[80px] my-[24px]">
              Sales Mode
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] text-[20px] font-bold leading-[32px] mb-[48px]">
              Empower your business with our sales mode, allowing you to receive
              payments from waverlite users.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="w-full max-w-[990px]">
            <div className="relative flex justify-between">
              <Image className="absolute left-0 top-0" src={sales1} alt="" />
              <Image className="absolute left-1/4 top-0" src={sales2} alt="" />
              <Image className="absolute left-1/2 top-0" src={sales3} alt="" />
              <Image
                className="absolute left-[77%] top-0 rounded-[32px]"
                src={sales4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
