"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";

const FaqLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "General",
      href: "#general",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Trust & Safety",
      href: "#trust-safety",
    },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <div className="container-xl mt-[200px]">
        <div className="flex flex-col justify-center items-center gap-4 lg:mb-20 mb-12">
          <h3 className="lg:text-[50px] text-[30px] font-semibold lg:leading-[80px] leading-[50px]">
            Frequently Asked Questions
          </h3>
          <p className="lg:text-[20px] text-lg lg:leading-[32px]">
            Find answers to common questions about Waverlite.
          </p>
        </div>
        <div className="flex gap-10">
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
      </div>
      <div className="container-xl flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          <Image
            src={
              "https://res.cloudinary.com/w22/wlt-website/icons/logo/main-white.svg"
            }
            className="w-full h-full"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src={
              "https://res.cloudinary.com/w22/wlt-website/icons/logo/side-white.svg"
            }
            alt=""
            className="w-full h-full"
            height={100}
            width={100}
          />
        </div>
        <div>
          <p>
            Help desk -{" "}
            <Link
              className="text-[#1E8DCC] text-[20px] hover:underline"
              href={"mailto:support@waverlite.email"}
            >
              support@waverlite.email
            </Link>
          </p>
        </div>
      </div>
      <Cta />
      <Footer />
    </main>
  );
};

export default FaqLayout;
