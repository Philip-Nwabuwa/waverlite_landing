import Image from "next/image";
import Link from "next/link";

import lock from "@/assets/images/api/lock.svg";
import avatars from "@/assets/images/api/avatars.png";
import Reset from "@/assets/images/api/reset.svg";
import Switch from "@/assets/images/api/switch.svg";

const About = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="pathClip bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] lg:p-[52px] p-6 border-2 border-solid border-[#b9dcef80] rounded-[64px]">
        <div>
          <h3 className="text-[40px] lg:text-[60px] font-bold leading-[70px] mb-6">
            3D Secure Authentication
          </h3>
          <p className="text-gray-text font-bold text-[24px] leading-[32px] mb-12">
            Waverlite uses 3D Secure Authentication to add an aditional layer of
            security by ensuring that all debit related requests made on your
            wallet actually originated from your server.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit mt-12 py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
        </div>
        <div className="h-full lg:h-[680px] bg-[#1B80BA] flex justify-center items-end rounded-[12px] pl-6 pt-6">
          <Image src={lock} alt={"Send fast"} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-[28px]">
        <div className="bg-[#E9F4FA] lg:p-[52px] p-6 rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] font-bold mb-[24px] leading-[70px]">
            Payouts, withdrawals, collections
          </h3>
          <p className="text-[24px] text-[#9C9D9D] font-bold mb-12">
            Make requests to send and receive money from your customers in
            Africa, Asia, Latin America, Canada and over 50 countries via
            Waverlite&apos;s robust APIs.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
        </div>
        <div className="bg-[#272A2B] lg:p-[52px] p-6 rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] text-[#E9EAEA] font-bold mb-[24px] leading-[70px]">
            Customer profiles
          </h3>
          <p className="text-[#9C9D9D] text-[24px] font-bold mb-12">
            Customer profiles are used to keep track of customer information.
            All API operations are attached to a customer profile for ease of
            access and audit.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit mb-[60px] py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
          <Image src={avatars} alt="No hidden charges" />
        </div>
      </div>
      <div className="bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
        <div className="bg-[#272A2B] flex flex-col gap-[36px] justify-center items-center p-[28px] rounded-[64px]">
          <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
            <div className="flex items-center gap-5">
              <Image src={Reset} alt="" />
              <div>
                <h4 className="text-[34px] text-[#E9EAEA] font-bold">
                  Auto Reversal
                </h4>
              </div>
            </div>
            <Image src={Switch} alt="" />
          </div>
          <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
            <div className="flex items-center gap-5">
              <div>
                <h4 className="text-[34px] text-[#E9EAEA] font-bold">
                  Reversal Successful!
                </h4>
                <p className="text-gray-text font-semibold text-[16px]">
                  $30,000 was succesfully reversed back to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-[52px] lg:pr-[52px] lg:pl-0 pr-6 pl-6 py-6">
          <h3 className="text-[40px] lg:text-[60px] font-bold leading-[70px] mb-6">
            Seamless payment reconciliation
          </h3>
          <p className="text-gray-text font-bold text-[24px] leading-[32px] mb-12">
            Waverlite&apos;s APIs handle pending or failed transactions through
            automatic reversals or retries, based on your account settings.{" "}
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
