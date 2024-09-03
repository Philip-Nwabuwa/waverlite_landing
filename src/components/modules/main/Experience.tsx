import Image from "next/image";

import QrScan from "@/assets/images/main/scanImage.png";
import Icon1 from "@/assets/icons/main/Icon1.svg";
import Icon2 from "@/assets/icons/main/Icon2.svg";
import Icon3 from "@/assets/icons/main/Icon3.svg";
import Icon4 from "@/assets/icons/main/Icon4.svg";
import Giftcard1 from "@/assets/images/main/gift-card1.png";
import Giftcard2 from "@/assets/images/main/gift-card2.png";
import Giftcard3 from "@/assets/images/main/gift-card3.png";
import freelancers1 from "@/assets/images/main/freelancers.png";
import freelancers2 from "@/assets/images/main/freelancers1.png";
import freelancerSm1 from "@/assets/images/main/free1.svg";
import freelancerSm2 from "@/assets/images/main/free2.svg";
import sales from "@/assets/images/main/SalesMode_Slide.png";
import map from "@/assets/images/main/map.png";

const Experience = () => {
  return (
    <section className="container-xl">
      <h3 className="text-[#272A2B] text-center lg:text-[60px] text-[40px] font-bold lg:leading-[94px] leading-[50px] mb-[72px]">
        Feel the best experience with our features
      </h3>
      <div className="flex flex-col gap-[28px]">
        <div className="bg-[#E9F4FA] scanBg grid lg:grid-cols-2 rounded-[32px]">
          <div className="lg:p-[52px] p-6">
            <Image src={Icon1} alt="" />
            <h3 className="lg:text-[40px] text-[30px] font-bold text-[#272A2B] lg:leading-[80px] my-[24px]">
              Scan to Pay
            </h3>
            <p className="lg:text-[20px] text-lg lg:leading-[32px] mb-[48px]">
              Utilize our scan-to-pay feature for quick and{" "}
              <br className="hidden lg:flex" /> secure transactions, enhancing
              your <br className="hidden lg:flex" /> shopping experience.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="p-[28px]">
            <Image src={QrScan} className="w-full" alt={""} />
          </div>
        </div>
        <div className="bg-[#101313] grid lg:grid-cols-5 lg:p-[52px] p-6 rounded-[32px]">
          <div className="text-white lg:col-span-2 flex flex-col gap-[24px]">
            <Image src={Icon2} alt="" />
            <h3 className="lg:text-[40px] text-[30px] font-semibold lg:leading-[80px] leading-[50px]">
              Built for Freelancers
            </h3>
            <p className="lg:text-[20px] text-lg lg:leading-[32px]">
              Empower your business with our <br className="lg" /> mode,
              allowing you to receive payments <br /> from customers.
            </p>
            <button className="w-fit py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="flex lg:hidden gap-[28px] pt-[24px]">
            <Image unoptimized src={freelancerSm1} alt="" className="w-full" />
            <Image unoptimized src={freelancerSm2} alt="" className="w-full" />
          </div>
          <div className="lg:flex hidden col-span-3 gap-[28px]">
            <Image src={freelancers1} alt="" className="w-full" />
            <Image src={freelancers2} alt="" className="w-full" />
          </div>
        </div>
        <div className="bg-[#E9F4FA] rounded-[32px] lg:p-[52px] p-6">
          <div className="lg:p-[24px]">
            <Image src={Icon3} alt="" />
            <h3 className="lg:text-[40px] text-[30px] font-bold text-[#272A2B] lg:leading-[80px] my-[24px]">
              Purchase Gift cards
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] lg:text-[20px] text-lg leading-[32px] mb-[48px]">
              Get gift cards for all your favorite platforms including iTunes,
              Google Play, Amazon, Spotify, eBay, Target, and 120+ more, perfect
              for your loved ones, employees and customers.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
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
        <div className="bg-[#E9F4FA] rounded-[32px] lg:p-[52px] p-6">
          <div className="lg:p-[24px]">
            <Image src={Icon4} alt="" />
            <h3 className="lg:text-[40px] text-[30px] font-bold text-[#272A2B] lg:leading-[50px] my-[24px]">
              Fast and Secure <br className="hidden lg:flex" /> Global Money
              Transfers
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] lg:text-[20px] text-lg lg:leading-[32px] mb-[48px]">
              Send money locally and internationally with ease.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <Image
            src={map}
            alt="map"
            className="mt-[64px] h-full max-h-[413px] min-h-[150px] w-full"
          />
        </div>
        <div className="bg-[#E9F4FA] w-full rounded-[32px] lg:p-[52px] p-6">
          <div className="lg:p-[24px]">
            <Image src={Icon3} alt="" />
            <h3 className="lg:text-[40px] text-[30px] font-bold text-[#272A2B] lg:leading-[80px] my-[24px]">
              Sales Mode
            </h3>
            <p className="text-[#9C9D9D] max-w-[910px] lg:text-[20px] text-lg leading-[32px] mb-[48px]">
              Empower your business with our sales mode,
              <br /> allowing you to receive payments from waverlite users.
            </p>
            <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="w-full mt-10 lg:mt-0">
            <Image className="w-full" src={sales} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
