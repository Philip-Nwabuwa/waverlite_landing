import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

import AppStore from "@/app/assets/images/cta/App Store.png";
import GooglePlay from "@/app/assets/images/cta/Google Play.png";
import Phone from "@/app/assets/images/cta/Galaxy S20 Ultra 1.png";
import Hand from "@/app/assets/images/cta/Hand.png";
import QrCode from "@/app/assets/images/cta/QR Code.png";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="container-xl">
      <div className="bg-primary flex items-end gap-[92px] rounded-[48px]">
        <div className="relative pl-[56px] pt-[56px]">
          <Image src={Phone} className=" top-[-100px]" alt="Phone" />
        </div>
        <div className="flex flex-col py-[56px] pr-[56px] gap-[36px]">
          <h4
            className={`${nunito.className} text-[#E9EAEA] font-extrabold text-[60px] leading-[98px]`}
          >
            Get more from <br /> Waverlite App
          </h4>
          <div className="flex gap-[32px]">
            <Link href={"/"}>
              <Image src={AppStore} alt="App Store" />
            </Link>
            <Link href={"/"}>
              <Image src={GooglePlay} alt="Google Play" />
            </Link>
          </div>
          <p className="text-[#E9EAEA] w-full max-w-[580px] text-[20px] font-bold leading-[28px]">
            Scan the QR code below to download the Waverlite app directly to
            your device.
          </p>
          <div className="relative">
            <Image src={QrCode} alt="Qr Code" />
            <Image
              src={Hand}
              className="absolute top-0 right-[-55px]"
              alt="Hand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
