import Image from "next/image";

import star4 from "@/assets/icons/Star 4.png";
import star8 from "@/assets/icons/Star 8.png";

const Why = () => {
  return (
    <section className="container-xl flex flex-col justify-center text-center">
      <div className="gridWhy">
        <h3 className="text-[84px] font-bold leading-[94px] mb-[36px]">
          Why Waverlite?
        </h3>
        <div className="flex flex-col gap-6">
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>The best exchange rates</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Anti-fraud protection</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Fair and transparent transfer fees</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Anti-fraud protection</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>The best exchange rates</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image src={star4} alt={"star"} />
              <p>Anti-fraud protection</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;
