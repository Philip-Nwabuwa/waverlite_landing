import Image from "next/image";

import Netflix from "@/assets/icons/brands/Netflix.png";
import Airbnb from "@/assets/icons/brands/Airbnb.png";
import Amex from "@/assets/icons/brands/Amex.png";
import Discover from "@/assets/icons/brands/Discover.png";
import Framer from "@/assets/icons/brands/Framer.png";
import Mailchimp from "@/assets/icons/brands/Mailchimp.png";
import Microsoft from "@/assets/icons/brands/Microsoft.png";
import Reddit from "@/assets/icons/brands/Reddit.png";
import Slack from "@/assets/icons/brands/Slack.png";
import Spotify from "@/assets/icons/brands/Spotify - Long.png";
import Tesla from "@/assets/icons/brands/Tesla.png";
import Uber from "@/assets/icons/brands/Uber.png";

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
    <section className="container-xl">
      <h3 className="text-[#272A2B] text-center lg:text-[80px] text-[32px] font-bold lg:leading-[94px] lg:mb-[72px] mb-10">
        Over 100 of the fastest-growing brands use Waverlite
      </h3>
      <p className="mt-6 text-gray-text font-bold lg:text-[26px] lg:leading-[32px] text-center mb-[72px]">
        With our secure and efficient platform,
        <br className="hidden lg:flex" /> we provide seamless transactions that
        support businesses <br className="hidden lg:flex" />
        in scaling and thriving in today&apos;s global economy.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-8 gap-4">
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
