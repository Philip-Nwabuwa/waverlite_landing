import Cta from "@/components/common/Cta";
import Footer from "@/components/common/Footer";
import Link from "next/link";

const KycLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
  return (
    <main className="flex flex-col lg:gap-[184px] gap-[100px]">
      <div className="container-xl flex gap-10 mt-[200px]">
        <div className="h-fit w-full max-w-[250px] bg-white border-2 border-solid border-[#BCBDBD] shadow-lg rounded-2xl ">
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                className={`w-full flex px-4 py-2 hover:bg-[#B9DCEF] hover:text-black text-gray-text ${
                  index === 0
                    ? "hover:rounded-t-2xl border-b-2 border-solid border-[#BCBDBD]"
                    : index === sidebarItems.length - 1
                    ? "hover:rounded-b-2xl"
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

      <Cta />
      <Footer />
    </main>
  );
};

export default KycLayout;
