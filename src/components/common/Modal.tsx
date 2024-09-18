import Image from "next/image";
import Link from "next/link";

import playIcon from "@/assets/icons/PlayCircleBlue.svg";

const Modal = () => {
  return (
    <div>
      <Link
        href={
          "https://www.youtube.com/watch?v=4aPBhAQ7TGU&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=Mjg2NjY"
        }
        className="flex items-center gap-1.5 py-4 px-[30px] text-[14px] lg:bg-[#DEEFFF] lg:text-[16px] lg:text-[#1E8DCC] border border-solid lg:border-transparent border-black rounded-[8px] font-bold"
        target="_blank"
      >
        <Image
          unoptimized
          src={playIcon}
          alt={""}
          width={24}
          height={24}
          className="hidden lg:flex"
        />{" "}
        <Image
          unoptimized
          src={
            "https://res.cloudinary.com/w22/wlt-website/icons/PlayCircle.png"
          }
          alt={""}
          width={24}
          height={24}
          className="flex lg:hidden"
        />
        Watch demo
      </Link>
    </div>
  );
};

export default Modal;
