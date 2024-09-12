import Image from "next/image";
import Link from "next/link";

import Icon1 from "@/assets/icons/main/Icon1.svg";
import QrScan from "@/assets/images/main/scan-to-pay.png";
import SalesDash from "@/assets/images/sales-mode/SalesMode-chart.svg";
import SalesBoard from "@/assets/images/sales-mode/SalesMode-chart1.svg";
import Sales1 from "@/assets/images/sales-mode/SalesMode-cons1.svg";
import Sales2 from "@/assets/images/sales-mode/SalesMode-cons2.svg";
import Sales3 from "@/assets/images/sales-mode/SalesMode-cons3.svg";
import Sales4 from "@/assets/images/sales-mode/SalesMode-cons4.svg";
import Btn from "@/components/common/Btn";

const Customer = () => {
  return (
    <section className="container-xl">
      <div className="flex flex-col gap-[28px]">
        <div className="flex flex-col bg-[#E9F4FA] lg:p-[52px] p-[30px] rounded-[32px]">
          <div>
            <h3 className="lg:text-[60px] text-[40px] font-bold text-[#272A2B] lg:leading-[80px] mb-[24px]">
              Expand Your Customer Base
            </h3>
            <p className="w-full max-w-[683px] text-[#9C9D9D] text-[20px] font-bold leading-[32px] mb-[48px]">
              Cater to both local patrons and travelers who use Waverlite,
              increasing foot traffic and sales.
            </p>
            <Link
              href={"https://app.waverlite.com/create-account"}
              className="py-4 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:flex hidden items-center justify-between">
            <Image src={Sales1} alt={""} />
            <Image src={Sales2} alt={""} />
            <Image src={Sales3} alt={""} />
            <Image src={Sales4} alt={""} />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[28px]">
          <div className="flex flex-col justify-between bg-[#E9F4FA] rounded-[64px]">
            <div className="lg:px-[60px] px-[30px] lg:pt-[60px] pt-[30px]">
              <h3 className="text-[40px] lg:text-[60px] font-bold mb-[24px] lg:leading-[70px]">
                Easy Setup
              </h3>
              <p className="text-[24px] text-[#9C9D9D] font-bold mb-12">
                Quickly create virtual debit cards through the Waverlite app
                with just a few clicks.
              </p>
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
              >
                Get Dollar Card
              </Link>
            </div>
            <Image
              src={SalesBoard}
              className="rounded-[64px] mt-10 w-full"
              alt="Sales mode dashboard"
            />
          </div>
          <div className=" bg-[#272A2B] rounded-[64px]">
            <div className="lg:px-[60px] px-[30px] lg:pt-[60px] pt-[30px]">
              <h3 className="lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold mb-[24px] lg:leading-[70px]">
                Global Acceptance
              </h3>
              <p className="text-[#9C9D9D] text-[24px] font-bold mb-12">
                Use your virtual debit cards on popular platforms and websites
                worldwide, including Amazon, Netflix, and more.
              </p>
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="w-fit mb-[60px] py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
              >
                Get Dollar Card
              </Link>
            </div>
            <Image
              src={SalesDash}
              className="rounded-[64px] w-full"
              alt="Sales mode dashboard"
            />
          </div>
        </div>
        <div className="bg-[#E9F4FA] grid lg:grid-cols-2 rounded-[32px]">
          <div className="lg:p-[52px] p-[30px]">
            <Image src={Icon1} alt="" className="lg:size-[60px] size-[40px]" />
            <h3 className="lg:text-[60px] text-[40px] font-bold text-[#272A2B] leading-[80px] my-[24px]">
              Scan to Pay
            </h3>
            <p className="text-[#9C9D9D] text-[20px] font-bold leading-[32px] mb-[48px]">
              Utilize our scan-to-pay feature for quick and secure transactions,
              enhancing your shopping experience.
            </p>
            <Btn href="https://app.waverlite.com/create-account">
              Learn more
            </Btn>
          </div>
          <div className="p-[28px]">
            <Image src={QrScan} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
