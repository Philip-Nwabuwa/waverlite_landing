import Image from "next/image";
import Link from "next/link";

const Setup = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="grid lg:grid-cols-5 gap-[28px]">
        <div className="lg:col-span-2 bg-[#E9F4FA] p-[30px] lg:p-[60px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] font-bold mb-[24px] lg:leading-[80px]">
            Easy Setup
          </h3>
          <p className="text-[24px] text-[#9C9D9D] font-bold mb-12">
            Quickly create virtual debit cards through the Waverlite app with
            just a few clicks.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Dollar Card
          </Link>
        </div>
        <div className="lg:col-span-3 bg-[#272A2B] p-[30px] lg:p-[60px] rounded-[64px]">
          <h3 className="lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold mb-[24px] lg:leading-[80px]">
            Global Acceptance
          </h3>
          <p className="text-[#9C9D9D] text-[26px] font-bold mb-12">
            Use your virtual debit cards on popular platforms and websites
            worldwide, including Amazon, Netflix, and more.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit mb-[60px] py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Dollar Card
          </Link>
          <Image
            unoptimized
            className="w-full rounded-lg mt-12"
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/virtual-cards/Side-Globe.png"
            }
            width={100}
            height={100}
            alt="No hidden charges"
          />
        </div>
      </div>
      <div>
        <div className="bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="bg-[#272A2B] flex flex-col gap-[36px] justify-center items-center p-[28px] rounded-[64px]">
            <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
              <div className="flex items-center gap-5">
                <Image
                  src={
                    "https://res.cloudinary.com/w22/wlt-website/images/virtual-cards/Reset.svg"
                  }
                  width={47}
                  height={47}
                  alt="Block Card"
                />
                <div>
                  <h4 className="text-[34px] text-[#E9EAEA] font-bold">
                    Block Card
                  </h4>
                  <p className="text-gray-text font-semibold text-[16px]">
                    Temporarily disable this card
                  </p>
                </div>
              </div>
              <Image
                src={
                  "https://res.cloudinary.com/w22/wlt-website/images/virtual-cards/switch.svg"
                }
                width={71}
                height={71}
                alt="Block Card"
              />
            </div>
            <div className="w-full bg-[#323435] flex gap-6 px-[30px] py-2.5 rounded-[30px] border border-solid border-[#9c9d9d33]">
              <div className="flex items-center gap-5">
                <Image
                  src={
                    "https://res.cloudinary.com/w22/wlt-website/images/virtual-cards/setting-2.svg"
                  }
                  width={47}
                  height={47}
                  alt="Manage Card"
                />
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
            <Link
              href={"https://app.waverlite.com/create-account"}
              className="w-fit mt-12 py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
            >
              Get Dollar Card
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;