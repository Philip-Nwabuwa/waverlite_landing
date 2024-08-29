import Image from "next/image";
import Link from "next/link";

import Globe from "@/assets/images/virtual-cards/Side-Globe.png";
import Reset from "@/assets/images/virtual-cards/Reset.svg";
import Setting from "@/assets/images/virtual-cards/setting-2.svg";
import Switch from "@/assets/images/virtual-cards/switch.svg";

const Setup = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="grid lg:grid-cols-5 gap-[28px]">
        <div className="lg:col-span-2 bg-[#E9F4FA] p-[30px] lg:p-[60px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] font-bold mb-[24px] lg:leading-[80px]">
            Easy Setup
          </h3>
          <p className="text-[24px] text-[#9C9D9D] font-bold">
            Quickly create virtual debit cards through the Waverlite app with
            just a few clicks.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Dollar Card
            </button>
          </Link>
        </div>
        <div className="lg:col-span-3 bg-[#272A2B] p-[30px] lg:p-[60px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold mb-[24px] lg:leading-[80px]">
            Global Acceptance
          </h3>
          <p className="text-[#9C9D9D] text-[26px] font-bold">
            Use your virtual debit cards on popular platforms and websites
            worldwide, including Amazon, Netflix, and more.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 mb-[60px] py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Dollar Card
            </button>
          </Link>
          <Image className="rounded-lg" src={Globe} alt="No hidden charges" />
        </div>
      </div>
      <div>
        <div className="bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="bg-[#272A2B] flex flex-col gap-[36px] justify-center items-center p-[28px] rounded-[64px]">
            <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
              <div className="flex items-center gap-5">
                <Image src={Reset} alt="" />
                <div>
                  <h4 className="text-[34px] text-[#E9EAEA] font-bold">
                    Block Card
                  </h4>
                  <p className="text-gray-text font-semibold text-[16px]">
                    Temporarily disable this card
                  </p>
                </div>
              </div>
              <Image src={Switch} alt="" />
            </div>
            <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
              <div className="flex items-center gap-5">
                <Image src={Setting} alt="" />
                <div>
                  <h4 className="text-[34px] text-[#E9EAEA] font-bold">
                    Manage Card
                  </h4>
                  <p className="text-gray-text font-semibold text-[16px]">
                    Card pin and limits
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[52px] lg:pr-[52px] flex flex-col items-center">
            <h3 className="lg:text-[60px] text-[40px] font-bold lg:leading-[80px] text-center mb-6">
              Control Spending
            </h3>
            <p className="text-gray-text font-bold text-center text-[24px] leading-[32px] mb-12">
              Enable or disable your cards instantly to manage spending.
            </p>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Dollar Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
