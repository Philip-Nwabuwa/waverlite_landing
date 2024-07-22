import Link from "next/link";
import Image from "next/image";

import Group from "@/assets/images/overdraft/overdraft-group.svg";
import HiddenCharges from "@/assets/images/overdraft/overdraft-hidden.png";
import person1 from "@/assets/images/overdraft/overdraft-person.png";
import person2 from "@/assets/images/overdraft/overdraft-person2.png";

const Support = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="bg-[#272A2B] rounded-[64px] p-[28px]">
        <h2 className="mb-6 text-[80px] text-[#E9EAEA] font-bold">
          Emergency Support
        </h2>
        <p className="text-[#BCBDBD] text-[26px] font-bold">
          Get immediate access to extra funds during unexpected expenses or{" "}
          <br />
          emergencies, ensuring you&apos;re never caught off guard.
        </p>
        <Link href={"/"}>
          <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
            Get Started Now
          </button>
        </Link>
        <div className="pt-[64px]">
          <Image src={Group} alt="group" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[28px]">
        <div className="col-span-2 bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] font-bold mb-[24px] leading-[80px]">
            No Waiting
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold">
            Your overdraft balance activates automatically when your funds run
            low, allowing for uninterrupted financial operations without any
            delays.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
        </div>
        <div className="col-span-3 bg-[#272A2B] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] text-[#E9EAEA] font-bold mb-[24px] leading-[80px]">
            No Hidden Charge
          </h3>
          <p className="text-[#9C9D9D] text-[26px] font-bold">
            Enjoy clear and upfront pricing with Waverlite. Know exactly what
            you&apos;re paying without any surprise fees or hidden costs.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 mb-[60px] py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image src={HiddenCharges} alt="No hidden charges" />
        </div>
      </div>
      <div>
        <div className="pathClip bg-[#e9f4fa80] grid grid-cols-5 p-[52px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="flex col-span-3 items-center gap-4">
            <Image className="h-fit" src={person1} alt="" />
            <Image src={person2} alt="" />
          </div>
          <div className="col-span-2">
            <h3 className="text-[80px] font-bold leading-[80px] mb-6">
              Low Overdraft Fees
            </h3>
            <p className="text-gray-text font-bold text-[26px] leading-[32px] mb-12">
              Benefit from competitive and reasonable overdraft fees that are
              designed to be budget-friendly and manageable.
            </p>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
