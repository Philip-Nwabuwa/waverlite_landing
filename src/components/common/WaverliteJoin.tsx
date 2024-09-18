import Link from "next/link";
import Image from "next/image";

import JoinImage from "@/assets/images/careers/join.png";

const WaverliteJoin = () => {
  return (
    <div className="bg-[#004A74]">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 lg:gap-[100px] gap-[60px]">
        <div className="">
          <h4 className="text-white lg:text-[48px] text-[20px] lg:pt-[55px] pt-[30px] font-bold mb-[18px]">
            Join the Waverlite Community
          </h4>
          <p className="text-white lg:text-[16px] text-[14px] mb-[40px]">
            Travel the world confidently with Waverlite. Whether you’re
            exploring new cities, working abroad, or simply enjoying a vacation,
            Waverlite ensures you can spend like a local without any hassle.
          </p>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="py-4 px-[30px] bg-primary text-[#E9EAEA] rounded-[8px] font-bold text-[14px] lg:text-[16px]"
          >
            Join Us Now{" "}
          </Link>
        </div>
        <div>
          <Image
            src={JoinImage}
            alt="Join"
            className="lg:my-[55px] my-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WaverliteJoin;
