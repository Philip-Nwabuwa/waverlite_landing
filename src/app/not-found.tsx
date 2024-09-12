import Link from "next/link";
import Image from "next/image";

import ErrorImg from "@/assets/images/Error/404-error-with-person-looking-concept-illustration.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[100vh]">
      <h2 className="text-[30px] lg:text-[40px] font-bold">Page not Found</h2>
      <Image src={ErrorImg} alt="404" className="w-[400px] h-[400px]" />
      <Link
        href="/"
        className="w-fit py-4 px-[30px] bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
      >
        Return Home{" "}
      </Link>
    </div>
  );
}
