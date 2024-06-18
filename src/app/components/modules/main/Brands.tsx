import Image from "next/image";

import Netflix from "@/app/assets/icons/brands/Netflix.png";
import Airbnb from "@/app/assets/icons/brands/Airbnb.png";
import Amex from "@/app/assets/icons/brands/Amex.png";
import Discover from "@/app/assets/icons/brands/Discover.png";
import Framer from "@/app/assets/icons/brands/Framer.png";
import Mailchimp from "@/app/assets/icons/brands/Mailchimp.png";
import Microsoft from "@/app/assets/icons/brands/Microsoft.png";
import Reddit from "@/app/assets/icons/brands/Reddit.png";
import Slack from "@/app/assets/icons/brands/Slack.png";
import Spotify from "@/app/assets/icons/brands/Spotify - Long.png";
import Tesla from "@/app/assets/icons/brands/Tesla.png";
import Uber from "@/app/assets/icons/brands/Uber.png";

const brands = [
  { src: Framer, alt: "Framer" },
  { src: Reddit, alt: "Reddit" },
  { src: Amex, alt: "Amex" },
  { src: Tesla, alt: "Tesla" },
  { src: Uber, alt: "Uber" },
  { src: Netflix, alt: "Netflix" },
  { src: Mailchimp, alt: "Mailchimp" },
  { src: Microsoft, alt: "Microsoft" },
  { src: Discover, alt: "Discover" },
  { src: Netflix, alt: "Netflix" },
  { src: Spotify, alt: "Spotify" },
  { src: Airbnb, alt: "Airbnb" },
  { src: Reddit, alt: "Reddit" },
  { src: Slack, alt: "Slack" },
];

const Brands = () => {
  return (
    <section className="container-xl my-[184px]">
      <h3 className="text-[#272A2B] text-center text-[80px] font-bold leading-[94px] mb-[72px]">
        Over 100 of the fastest-growing brands use Waverlite
      </h3>
      <p className="mt-6 text-gray-text font-bold text-[26px] leading-[32px] text-center mb-[72px]">
        With our secure and efficient platform,
        <br /> we provide seamless transactions that support businesses <br />
        in scaling and thriving in today&apos;s global economy.
      </p>
      <div className="grid grid-cols-7 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-[#E9EAEA] py-3 bg-main flex justify-center rounded-[16px]"
          >
            <Image src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
