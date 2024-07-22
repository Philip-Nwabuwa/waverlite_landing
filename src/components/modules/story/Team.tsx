import Image from "next/image";

import TeamPic from "@/assets/images/story/Group.png";

const Team = () => {
  return (
    <section>
      <div className="text-center">
        <p className="text-gray-text text-[22px] font-semibold mb-[48px]">
          MEET THE TEAM
        </p>
        <div className="flex flex-col items-center justify-center mb-20">
          <h2 className="container-xl text-[#272A2B] text-[70px] font-bold leading-[80px] pt-12">
            Alone we can do so little,
            <span className="text-[#1E8DCC]">together </span>we can{" "}
            <span className="text-[#1E8DCC]">do so much </span>
          </h2>

          <p className="w-full max-w-[600px] pt-12 text-[20px]">
            The Waverlite team consists of smart, hardworking individuals with
            diverse backgrounds and skillsets.
          </p>
        </div>
        <Image src={TeamPic} alt="team" />
      </div>
    </section>
  );
};

export default Team;
