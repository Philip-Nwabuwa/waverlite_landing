import Image from "next/image";
import Link from "next/link";

import fast from "@/assets/images/money-transfer/fast.svg";
import earth1 from "@/assets/images/money-transfer/earth1.png";
import earth2 from "@/assets/images/money-transfer/earth2.png";
import avatars from "@/assets/images/money-transfer/avatars.png";

const SendMoney = () => {
  return (
    <section className="container-xl">
      <h2 className="text-[84px] font-bold leading-[94px] text-center mb-[76px]">
        Easily Send <br />
        Money Overseas
      </h2>
      <div className="flex flex-col gap-[28px]">
        <div className="pathClip bg-[#e9f4fa80] grid grid-cols-2 gap-[28px] p-[52px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="h-full lg:h-[680px] bg-[#1B80BA] flex justify-center items-end rounded-[12px] pl-6 pt-6">
            <Image src={fast} alt={"Send fast"} />
          </div>
          <div>
            <h3 className="text-[80px] font-bold leading-[80px] mb-6">
              Instant Transfers
            </h3>
            <p className="text-gray-text font-bold text-[26px] leading-[32px] mb-12">
              Say good-bye to days of waiting for transfers to complete. With
              Waverlite, you can send money instantly, ensuring your funds are
              available when you need them most.
            </p>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="flex gap-[28px] bg-[#e9f4fa80] p-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <Image src={earth1} alt={""} />
          <div className="w-full bg-[#272A2B] p-[52px] rounded-[36px]">
            <h3 className="text-[#E9EAEA] text-[80px] leading-[80px] font-bold mb-6">
              Global Reach
            </h3>
            <p className="text-gray-text text-[26px] font-bold leading-[32px]">
              Send money across the globe effortlessly. Waverlite enables you to
              make international transfers quickly and efficiently, connecting
              you with users worldwide.
            </p>
            <Link href={"/"}>
              <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Get Started Now
              </button>
            </Link>
          </div>
          <Image src={earth2} alt={""} />
        </div>
        <div className="grid grid-cols-2 bg-[#e9f4fa80] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div>
            <Image src={avatars} alt={"Avatars"} />
          </div>
          <div className="p-[52px]">
            <h3 className="text-[70px] leading-[80px] font-bold mb-6">
              Peer-to-Peer Technology
            </h3>
            <p className="text-gray-text text-[26px] font-bold leading-[32px]">
              Utilize our peer-to-peer (P2P) technology to send money to other
              Waverlite users seamlessly. This cutting-edge technology ensures
              secure, direct transfers between users without intermediary
              delays.
            </p>
            <Link href={"/"}>
              <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[28px]">
          <div className="security rounded-[64px]">
            <div className="p-[52px]">
              <h3 className="text-[#E9F4FA] text-[70px] font-bold leading-[80px] mb-6">
                Your Security is Our Priority
              </h3>
              <p className="text-[#B9DCEF] text-[26px] font-bold leading-[32px]">
                Whether you’re a business owner, a student, or sending money to
                family, Waverlite has got you covered.
              </p>
              <Link href={"/"}>
                <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
          <div className="perfect rounded-[64px]">
            <div className="p-[52px]">
              <h3 className="text-[#E9F4FA] text-[70px] font-bold leading-[80px] mb-6">
                Perfect
                <br />
                for Every Situation
              </h3>
              <p className="text-[#B9DCEF] text-[26px] font-bold leading-[32px]">
                Whether you’re a business owner, a student, or sending money to
                family, Waverlite has got you covered.
              </p>
              <Link href={"/"}>
                <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMoney;
