import Image from "next/image";
import Link from "next/link";

import Logo1 from "@/app/assets/icons/logo/Group.svg";
import Waverlite from "@/app/assets/icons/logo/WaverliteBlack.svg";
import ArrowDown from "@/app/assets/icons/arrow-down.svg";

const Navbar = () => {
  return (
    <nav className="navbar fixed container-xl max-w-[1440px] z-50">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src={Logo1} alt={""} />
        <Image src={Waverlite} alt={""} />
      </Link>
      <div className="flex items-center gap-1">
        <div className="flex gap-2 items-center py-2 px-4">
          Products <Image src={ArrowDown} alt={""} />
        </div>
        <Link href={"/"} className="py-2 px-4">
          Story
        </Link>
      </div>
      <div className="flex items-center gap-2 py-2 px-4">
        <div className="flex gap-2 items-center py-2 px-4">
          Download App <Image src={ArrowDown} alt={""} />
        </div>
        <div className="bg-[#1B80BA] text-[#E9EAEA] flex items-center rounded-[10px]">
          <Link
            href={"/"}
            className="py-2 px-8 border-[0.5px] border-solid border-[#4ba4d6] border-opacity-50 rounded-s-[10px]"
          >
            Login
          </Link>
          <Link
            href={"/"}
            className="py-2 px-8 border-[0.5px] border-solid border-[#4ba4d6] border-opacity-50 rounded-e-[10px]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
