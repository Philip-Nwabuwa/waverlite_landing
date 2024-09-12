import Link from "next/link";
import React from "react";

const Btn = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="w-fit lg:py-4 py-2 lg:px-[30px] px-3 bg-[#101212] hover:bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
    >
      {children}
    </Link>
  );
};

export default Btn;
