import Image from "next/image";
import Link from "next/link";

const SendMoney = () => {
  return (
    <section className="container-xl">
      <h2 className="lg:text-[40px] text-[20px] font-bold leading-[30px] lg:leading-[74px] text-center mb-[76px]">
        Easily Send <br />
        Money Overseas
      </h2>
      <div className="flex flex-col gap-[28px]">
        <div className="pathClip bg-[#e9f4fa80] grid lg:grid-cols-2 gap-[28px] lg:p-[52px] p-[30px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="h-full lg:h-[680px] order-last lg:order-first bg-[#1B80BA] flex justify-center items-end rounded-[12px] pl-6 pt-6">
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
            <h3 className="lg:text-[40px] text-[20px] font-bold lg:leading-[80px] leading-[30px] mb-6">
              Instant Transfers
            </h3>
            <p className="text-gray-text font-bold lg:text-[26px] text-lg lg:leading-[32px]">
              Say good-bye to days of waiting for transfers to complete. With
              Waverlite, you can send money instantly, ensuring your funds are
              available when you need them most.
            </p>
            <button className="w-fit lg:mt-12 mt-6 py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="flex gap-[28px] bg-[#e9f4fa80] lg:p-[28px] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div className="w-full order-first lg:order-2 bg-[#272A2B] lg:p-[52px] p-[30px] rounded-[36px]">
            <h3 className="text-[#E9EAEA] lg:text-[40px] text-[20px] lg:leading-[80px] leading-[30px] font-bold mb-6 mt-10 lg:mt-0">
              Global Reach
            </h3>
            <p className="text-gray-text lg:text-[26px] text-lg font-bold leading-[32px] mb-12">
              Send money across the globe effortlessly. Waverlite enables you to
              make international transfers quickly and efficiently, connecting
              you with users worldwide.
            </p>
            <div className="mb-10 lg:mb-0">
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
              >
                Get Started Now
              </Link>
            </div>
          </div>
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/money-transfer/earth1.png"
            }
            width={100}
            height={100}
            alt={""}
            className="w-full h-full hidden lg:flex"
          />
          <Image
            unoptimized
            className="w-full h-full hidden lg:flex order-last"
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/money-transfer/earth2.png"
            }
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className="grid lg:grid-cols-2 bg-[#e9f4fa80] border-2 border-solid border-[#b9dcef80] rounded-[64px]">
          <div>
            <Image
              unoptimized
              src={
                "https://res.cloudinary.com/w22/wlt-website/images/money-transfer/avatars.png"
              }
              width={100}
              height={100}
              className="w-full h-full hidden lg:flex"
              alt={"Avatars"}
            />
          </div>
          <div className="lg:lg:p-[52px] p-[30px]">
            <h3 className="lg:text-[40px] text-[20px] lg:leading-[80px] font-bold mb-6 mt-10 lg:mt-0">
              Peer-to-Peer Technology
            </h3>
            <p className="text-gray-text text-lg font-bold leading-[32px] mb-12">
              Utilize our peer-to-peer (P2P) technology to send money to other
              Waverlite users seamlessly. This cutting-edge technology ensures
              secure, direct transfers between users without intermediary
              delays.
            </p>
            <div className="mb-10 lg:mb-0">
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-[28px]">
          <div className="bg-[#05114A] rounded-[64px]">
            <div className="lg:p-[52px] p-[30px]">
              <h3 className="text-[#E9F4FA] lg:text-[40px] text-[20px] font-bold lg:leading-[80px] mb-6 mt-10 lg:mt-0">
                Your Security is Our Priority
              </h3>
              <p className="text-[#B9DCEF] lg:text-[26px] text-lg font-bold leading-[32px] mb-12">
                Whether you’re a business owner, a student, or sending money to
                family, Waverlite has got you covered.
              </p>
              <div className="mb-10 lg:mb-0">
                <Link
                  href={"https://app.waverlite.com/create-account"}
                  className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#468996] rounded-[64px]">
            <div className="lg:p-[52px] p-[30px]">
              <h3 className="text-[#E9F4FA] lg:text-[40px] text-[20px] font-bold lg:leading-[80px] mb-6 mt-10 lg:mt-0">
                Perfect for Every Situation
              </h3>
              <p className="text-[#B9DCEF] lg:text-[26px] text-lg font-bold leading-[32px] mb-12">
                Whether you’re a business owner, a student, or sending money to
                family, Waverlite has got you covered.
              </p>
              <div className="mb-10 lg:mb-0">
                <Link
                  href={"https://app.waverlite.com/create-account"}
                  className="w-fit py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMoney;
