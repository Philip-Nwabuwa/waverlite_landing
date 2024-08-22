import Image from "next/image";

import team1 from "@/assets/images/careers/team.png";
import team2 from "@/assets/images/careers/team2.png";
import bulb from "@/assets/images/careers/bulb.png";
import cash from "@/assets/images/careers/cash.png";
import colab from "@/assets/images/careers/colab.png";
import plant from "@/assets/images/careers/plant.png";

const Why = () => {
  return (
    <section className="container-xl">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[84px]">
        <h1 className="text-black text-[84px] font-bold my-6 leading-[94px]">
          Why Work With Us?{" "}
        </h1>
        <p className="w-full text-[#bcbdbd] text-[34px]">
          At Waverlite, we&apos;re passionate about creating innovative payment
          solutions that make life easier for everyone. Join us and help shape
          the future of financial technology.{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[30px]">
          <div className="bg-[#272A2B] flex flex-col justify-between h-[490px] w-[400px] p-9 rounded-[44px]">
            <Image src={bulb} alt="bulb" />
            <p className="text-[#E9EAEA] text-[40px] font-bold">
              {" "}
              Innovative & dynamic work environment.
            </p>
          </div>
          <div>
            <Image src={team2} alt="team2" />
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="bg-[#E9EAEA] flex flex-col justify-between h-[490px] w-[400px] p-9 rounded-[44px]">
            <Image src={plant} alt="plant" />
            <p className="text-black text-[40px] font-bold">
              {" "}
              Innovative & dynamic work environment.
            </p>
          </div>
          <div className="bg-[#E9EAEA] flex flex-col justify-between h-[490px] w-[400px] p-9 rounded-[44px]">
            <Image src={cash} alt="cash" />
            <p className="text-black text-[40px] font-bold">
              {" "}
              Innovative & dynamic work environment.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <Image src={team1} alt="team2" />
          </div>
          <div className="bg-[#272A2B] flex flex-col justify-between h-[490px] w-[400px] p-9 rounded-[44px]">
            <Image src={colab} alt="colab" />
            <p className="text-[#E9EAEA] text-[40px] font-bold">
              {" "}
              Innovative & dynamic work environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
