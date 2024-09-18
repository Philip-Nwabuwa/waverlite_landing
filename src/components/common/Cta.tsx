import Image from "next/image";
import Link from "next/link";

import QrCode from "@/assets/images/qr-code.png";

const Cta = () => {
  return (
    <section className="container-xl">
      <div className="bg-[#004A74] flex lg:flex-row flex-col lg:items-end justify-between items-center lg:gap-[92px] rounded-[30px]">
        <div className="lg:pl-[56px] px-4 lg:px-0 order-last lg:order-first">
          <Image
            unoptimized
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/cta/Iphone-cta.png"
            }
            width={100}
            height={100}
            alt="Phone"
            className="lg:w-[445px] lg:h-[460px] w-full h-full rounded-[10px] lg:rounded-none"
          />
        </div>
        <div className="flex flex-col lg:py-[56px] lg:pr-[56px] py-10 px-5">
          <h4 className=" text-[#E9EAEA] font-medium lg:text-[48px] lg:text-start text-3xl lg:leading-[70px] mb-6">
            Get more from <br className="hidden lg:flex" /> Waverlite App
          </h4>
          <p className="text-[#E9EAEA] hidden lg:flex w-full max-w-[580px] text-[20px] text-center lg:text-start font-medium leading-[28px] mb-[35px]">
            Scan the QR code below to download the Waverlite app directly to
            your device.
          </p>
          <p className="text-[#E9EAEA] w-full max-w-[580px] text-[16px] text-start font-normal leading-[28px] flex lg:hidden mb-[26px]">
            Download now to start experiencing the convenience of Waverlite.
          </p>

          <Link
            href={"/scan"}
            className="bg-primary lg:hidden flex w-fit text-white font-bold text-[16px] py-4 px-[30px] rounded-[10px]"
          >
            Download App
          </Link>

          <div className="bg-[#01446A] hidden lg:flex flex-row items-center rounded-[18px] gap-4 px-5 py-[33px]">
            <Image
              unoptimized
              src={QrCode}
              alt="Qr Code"
              className="size-[146px] rounded-[10px]"
              width={100}
              height={100}
            />
            <div className="flex flex-col lg:gap-[32px] gap-6">
              <h4 className="text-[24px] text-white font-medium">
                Scan to download app
              </h4>
              <div className="flex items-center justify-center gap-6">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.redbiller.waverlite&pcampaignid=web_share"
                  }
                  target="_blank"
                  className="flex gap-3 items-center "
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/w22/wlt-website/icons/playstore.png"
                    }
                    width={100}
                    height={100}
                    alt="Google Play"
                    className="size-[25px]"
                  />
                  <p className="text-white font-normal text-[12px]">
                    Play Store
                  </p>
                </Link>
                <Link
                  href={"https://apps.apple.com/us/app/waverlite/id6450453788"}
                  target="_blank"
                  className="flex gap-3 items-center "
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/w22/wlt-website/icons/applestore.png"
                    }
                    width={100}
                    height={100}
                    alt="App Store"
                    className="size-[25px]"
                  />
                  <p className="text-white font-normal text-[12px]">
                    App Store
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
