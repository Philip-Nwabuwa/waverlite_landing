import Image from "next/image";
import Link from "next/link";

import Empower from "@/assets/images/careers/empower.png";
import Logo from "@/assets/images/careers/logo.svg";
import iphone from "@/assets/images/careers/iphone.png";
import protect from "@/assets/images/careers/Protected.png";
import currency from "@/assets/images/careers/currency.svg";

const Why = () => {
  return (
    <section className="container-xl">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[56px]">
        <h1 className="text-black lg:text-[40px] text-[20px] font-bold my-6 leading-[94px]">
          What we do
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[70px] lg:mb-[150px] mb-[50px]">
        <div className="flex flex-col gap-[30px]">
          <h3 className="lg:text-[40px] font-medium leading-[65px]">
            Empower Your Freelance Career with Waverlite
          </h3>
          <p className="text-[15px] lg:text-[18px] font-normal leading-[25px]">
            Our vision is to create a world where financial barriers are
            removed, enabling everyone to transact and thrive globally with
            ease.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-[30px] bg-black text-[#E9EAEA] rounded-[8px] font-bold text-[14px] lg:text-[16px]"
          >
            Get Started
          </Link>{" "}
        </div>
        <div>
          <Image src={Empower} alt="Empower" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] justify-center items-center lg:gap-[70px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[30px]">
            <div className="bg-[#F1FAFF] flex flex-col justify-between w-full rounded-[10px] pt-5 pl-5">
              <div>
                <h4 className="text-[#1E8DCC] lg:text-[24px] text-[20px] font-bold">
                  Waverlite
                </h4>
                <p className="text-[#424646] lg:text-[18px] text-[15px] font-bold mt-1 mb-4">
                  We are here
                </p>
              </div>
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="bg-[#0773B0] w-full rounded-[10px] pt-5 px-5">
              <h4 className="text-[#fff] lg:text-[24px] text-[20px] font-bold">
                Fast and Easy Payments
              </h4>
              <div className="flex justify-end items-center mt-2">
                <Image src={iphone} alt="Logo" />
              </div>
            </div>{" "}
          </div>
          <div className="flex gap-[30px]">
            <div className="bg-[#0773B0] w-full rounded-[10px] pt-5 px-5">
              <h4 className="text-[#fff] lg:text-[24px] text-[20px] font-bold">
                Secure and Reliable{" "}
              </h4>
              <div className="mt-2">
                <Image src={protect} alt="Logo" />
              </div>
            </div>{" "}
            <div className="bg-[#000] w-full flex flex-col justify-between items-start rounded-[10px] p-5">
              <h4 className="text-[#fff] lg:text-[24px] text-[20px] font-bold">
                Multiple Currency Support
              </h4>

              <Image src={currency} alt="Logo" />
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h3 className="lg:text-[40px] font-medium leading-[65px]">
            Empower Your Freelance Career with Waverlite
          </h3>
          <p className="text-[15px] lg:text-[18px] font-normal leading-[25px]">
            Our vision is to create a world where financial barriers are
            removed, enabling everyone to transact and thrive globally with
            ease.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-[30px] bg-black text-[#E9EAEA] rounded-[8px] font-bold text-[14px] lg:text-[16px]"
          >
            Get Started
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default Why;
