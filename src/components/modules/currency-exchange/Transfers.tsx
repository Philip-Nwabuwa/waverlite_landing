import Image from "next/image";
import Link from "next/link";

const Transfers = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="flex flex-col gap-[28px]">
        <div className="pathClip bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] lg:p-[52px] p-[30px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="h-full lg:h-[680px] bg-[#1B80BA] flex justify-center items-end rounded-[12px] pl-6 pt-6">
            <Image
              unoptimized
              src={
                "https://res.cloudinary.com/w22/wlt-website/images/money-transfer/fast.svg"
              }
              alt={"Send fast"}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-[40px] lg:text-[60px] font-bold lg:leading-[70px] mb-6">
              Fast and Easy Transfers
            </h3>
            <p className="text-gray-text font-bold text-[24px] leading-[32px] mb-12">
              Enjoy quick and straightforward currency exchanges with minimal
              steps, making it convenient for all users.
            </p>
            <Link
              href={"https://app.waverlite.com/create-account"}
              className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-[28px]">
        <div className="lg:col-span-2 bg-[#E9F4FA] lg:p-[60px] p-[30px] rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] font-bold mb-[24px] lg:eading-[80px]">
            No Waiting
          </h3>
          <p className="text-[24px] text-[#9C9D9D] font-bold mb-12">
            Your overdraft balance activates automatically when your funds run
            low, allowing for uninterrupted financial operations without any
            delays.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
        </div>
        <div className="lg:col-span-3 bg-[#272A2B] lg:p-[60px] p-[30px] rounded-[64px]">
          <h3 className="text-[40px] lg:text-[60px] text-[#E9EAEA] font-bold mb-[24px] leading-[80px]">
            No Hidden Charge
          </h3>
          <p className="text-[#9C9D9D] text-[24px] font-bold mb-12">
            Enjoy clear and upfront pricing with Waverlite. Know exactly what
            you&apos;re paying without any surprise fees or hidden costs.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit mb-[60px] py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/currency-exchange/Coins-currencies.svg"
            }
            alt="No hidden charges"
            width={100}
            height={100}
            className="mt-4 w-full h-[200px]"
          />
        </div>
      </div>
      <div className="bg-[#e9f4fa80] grid lg:grid-cols-4 gap-[28px] p-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
        <div className="col-span-1">
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/currency-exchange/sideImage.png"
            }
            alt="No hidden charges"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-1 flex items-end justify-center bg-[#272A2B] pl-10 rounded-[36px]">
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/giftCard/Frame-wave.svg"
            }
            alt="frame"
            width={100}
            height={100}
            className="w-full h-[362px]"
          />
        </div>
        <div className="col-span-2 bg-[#1E8DCC] lg:p-[52px] p-[30px] rounded-[36px]">
          <h3 className="text-[#E9F4FA] text-[40px] lg:text-[60px] font-bold leading-[80px] mb-6">
            Competitive Exchange Rates
          </h3>
          <p className="w-full max-w-[476px] text-[#B9DCEF] font-bold text-[24px] leading-[32px] mb-12">
            Gift cards offer a convenient and versatile solution for any
            occasion.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="w-fit py-4 px-8 bg-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Convert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Transfers;
