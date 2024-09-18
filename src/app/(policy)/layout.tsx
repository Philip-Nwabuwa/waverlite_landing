"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";

const KycLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "AML & KYC Policy",
      href: "/kyc-policy",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
    },
  ];
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <div className="container-xl flex gap-10 mt-[200px]">
        <div className="hidden lg:block h-fit w-[180px] bg-white border-2 border-solid border-[#BCBDBD] shadow-lg rounded-2xl ">
          {sidebarItems.map((item, index) => (
            <>
              <Link key={index} href={item.href}>
                <p
                  className={`w-[180px] flex px-4 py-2 hover:text-black ${
                    isActive(item.href) ? "text-black" : "text-gray-text"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
              {index < sidebarItems.length - 1 && (
                <hr className="border-t border-[#BCBDBD] mx-4" />
              )}
            </>
          ))}
        </div>
        {children}
      </div>

      <Cta />
      <Footer />
    </main>
  );
};

export default KycLayout;
