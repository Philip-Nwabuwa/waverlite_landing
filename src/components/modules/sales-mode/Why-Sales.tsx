import Image from "next/image";

import star4 from "@/assets/icons/Star 3.svg";

const WhySales = () => {
  return (
    <section className="bg-[#272A2B] text-[#E9EAEA] flex flex-col justify-center text-center">
      <div className="container-xl apiBgLg hidden lg:flex flex-col">
        <h3 className="text-[40px] font-bold leading-[94px] mb-[36px] pt-10">
          Why Your Business Needs Sales Mode
        </h3>
        <div className="flex flex-col gap-6 pb-10">
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Customer Satisfaction</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Operational Efficiency</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Simplify Transaction Management</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Faster Payments</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Attracts Travelers</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Attracts Travelers</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Customer Satisfaction</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Operational Efficiency</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Simplify Transaction Management</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden flex flex-col">
        <h3 className="text-[28px] font-bold leading-[50px] mb-[36px] pt-5">
          Why Your Business Needs Sales Mode
        </h3>
        <div className="flex flex-col gap-4 pb-5">
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Customer Satisfaction</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Operational Efficiency</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Simplify Transaction Management</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Faster Payments</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Attracts Travelers</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Attracts Travelers</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Customer Satisfaction</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Operational Efficiency</p>
            </li>
            <li className="bg-[#9C9D9D] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Simplify Transaction Management</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhySales;
