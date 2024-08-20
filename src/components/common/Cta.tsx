import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

import AppStore from "@/assets/images/cta/App Store.png";
import GooglePlay from "@/assets/images/cta/Google Play.png";
import Phone from "@/assets/images/cta/Galaxy S20 Ultra 1.png";
import Hand from "@/assets/images/cta/Hand.png";
import QrCode from "@/assets/images/cta/QR Code.png";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="container-xl">
      <div className="bg-primary flex lg:items-end items-center lg:gap-[92px] rounded-[48px]">
        <div className="hidden lg:flex relative lg:pl-[56px] lg:pt-[56px]">
          <Image src={Phone} className=" top-[-100px]" alt="Phone" />
        </div>
        <div className="flex flex-col lg:py-[56px] lg:pr-[56px] py-10 px-10 gap-[36px]">
          <h4
            className={`${nunito.className} text-[#E9EAEA] font-extrabold lg:text-[60px] text-center lg:text-start text-4xl lg:leading-[98px]`}
          >
            Get more from <br className="hidden lg:flex" /> Waverlite App
          </h4>
          <div className="flex lg:gap-[32px] gap-6">
            <Link
              href={"https://apps.apple.com/us/app/waverlite/id6450453788"}
              target="_blank"
            >
              <Image src={AppStore} alt="App Store" />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.redbiller.waverlite&pcampaignid=web_share"
              }
              target="_blank"
            >
              <Image src={GooglePlay} alt="Google Play" />
            </Link>
          </div>
          <p className="text-[#E9EAEA] w-full max-w-[580px] text-[20px] text-center lg:text-start font-bold leading-[28px]">
            Scan the QR code below to download the Waverlite app directly to
            your device.
          </p>
          <div className="relative">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={QrCode} alt="Qr Code" />
            </div>
            <Image
              src={Hand}
              className="hidden lg:flex absolute top-0 right-[-65px]"
              alt="Hand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
