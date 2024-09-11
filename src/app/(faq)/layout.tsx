import Link from "next/link";
import Image from "next/image";

import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import LogoMain from "@/assets/icons/logo/main-white.svg";
import LogoSide from "@/assets/icons/logo/side-white.svg";

const FaqLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          <div className="hidden lg:block h-fit w-full max-w-[250px] bg-white border-2 border-solid border-[#BCBDBD] shadow-lg rounded-[8px] ">
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <p
                  className={`w-full flex px-4 py-2 hover:bg-[#B9DCEF] hover:text-black text-gray-text ${
                    index === 0
                      ? "hover:rounded-t-[8px] border-b-2 border-solid border-[#BCBDBD]"
                      : index === sidebarItems.length - 1
                      ? "hover:rounded-b-[8px]"
                      : "border-b-2 hover:rounded-none border-solid border-[#BCBDBD]"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
          {children}
        </div>
      </div>
      <div className="container-xl flex flex-col items-center">
        <div className="flex gap-2">
          <Image src={LogoMain} alt="" />
          <Image src={LogoSide} alt="" />
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
