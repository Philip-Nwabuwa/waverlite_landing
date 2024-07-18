import Image from "next/image";
import Link from "next/link";

import search from "@/assets/images/locator/search.png";
import filter from "@/assets/images/locator/filter.png";
import map from "@/assets/images/locator/3d-view-map (1) 1.png";

const About = () => {
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      <div className="flex gap-[28px]">
        <div className="bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] font-bold mb-[24px] leading-[80px]">
            Filter by Category
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold">
            Filter results by category, such as dining, shopping, or services.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image className="mt-[28px]" src={search} alt={"search"} />
        </div>
        <div className="bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] font-bold mb-[24px] leading-[80px]">
            Locate Businesses with Ease
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold">
            Search for nearby stores, restaurants, and services that accept
            Waverlite.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image className="mt-[28px]" src={filter} alt={"filter"} />
        </div>
      </div>
      <div className="flex gap-[28px]">
        <div className="bg-[#E9F4FA] p-[60px] rounded-[64px]">
          <h3 className="text-[80px] font-bold mb-[24px] leading-[80px]">
            Get Instant Directions
          </h3>
          <p className="text-[26px] text-[#9C9D9D] font-bold">
            Get step-by-step directions to any Waverlite-supported business.
          </p>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
          <Image className="mt-[64px]" src={map} alt={"filter"} />
        </div>
      </div>
    </section>
  );
};

export default About;
