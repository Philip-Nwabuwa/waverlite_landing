import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    src: "https://res.cloudinary.com/w22/wlt-website/icons/logo/media/X.png",
    alt: "X",
    href: "https://x.com/waverlite",
  },
  {
    src: "https://res.cloudinary.com/w22/wlt-website/icons/logo/media/Facebook.png",
    alt: "Facebook",
    href: "https://web.facebook.com/waverlite",
  },
  {
    src: "https://res.cloudinary.com/w22/wlt-website/icons/logo/media/Instagram.png",
    alt: "Instagram",
    href: "https://www.instagram.com/thewaverlite",
  },
  {
    src: "https://res.cloudinary.com/w22/wlt-website/icons/logo/media/Linkedin.png",
    alt: "Linkedin",
    href: "https://www.linkedin.com/showcase/waverlite",
  },
];

export const ProductsList = [
  { text: "Money Transfer", href: "/money-transfer" },
  { text: "Scan to pay", href: "/scan-to-pay" },
  { text: "Overdraft", href: "/overdraft" },
  { text: "Gift Cards", href: "/gift-cards" },
  { text: "Virtual Card", href: "/virtual-cards" },
  { text: "Sales Mode", href: "/sales-mode" },
  { text: "Currency Exchange", href: "/currency-exchange" },
  { text: "Locator", href: "/locator" },
];

export const CompanyList = [
  { text: "About Us", href: "/about" },
  { text: "Careers", href: "/career" },
];
export const DeveloperList = [
  { text: "API Documentation", href: "/api" },
  { text: "FAQs", href: "/faqs" },
];
export const LegalList = [
  { text: "AML & KYC Policy", href: "kyc-policy" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="container-xl mb-[60px]">
      <div className="bg-[#101313] lg:p-[52px] p-6 flex flex-col gap-[30px] lg:gap-[56px] rounded-[30px]">
        <div className="grid lg:grid-cols-2 lg:gap-[120px] gap-[32px]">
          <div className="text-[#E9EAEA] flex flex-col lg:gap-[40px] gap-[32px]">
            <div className="flex lg:gap-[28px] gap-4">
              <Image
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/footer/mailOutlined.png"
                }
                unoptimized
                height={100}
                width={100}
                alt="Mail"
                className="lg:size-[60px] size-12"
              />

              <div className="flex flex-col items-center lg:gap-[28px] gap-[14px]">
                <h5 className="lg:text-[42px] text-3xl font-medium lg:leading-[45px]">
                  Stay updated with the latest
                </h5>
                <p className="text-[#E0E3E3] lg:text-[18px] text-base font-light lg:leading-[28px]">
                  Join our newsletter to stay updated with new releases and
                  features
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] lg:pt-[20px]">
            <p className="lg:text-[20px] text-[18px] text-[#E9EAEA] font-medium">
              Enter your email
            </p>
            <div className="w-full flex lg:gap-4 gap-2">
              <input
                className="w-full bg-[#F2F5F6] text-[#6D6F70] py-2 px-3 rounded-lg outline-none placeholder:text-[14px]"
                placeholder="johndoe@example.com"
              />
              <button className="py-2 px-6 bg-primary text-[#E9EAEA] text-[14px] rounded-[8px] font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-[#E0E3E3] font-light text-[14px] pt-1">
              By subscribing you agree to our{" "}
              <Link
                href={"/privacy-policy"}
                className="font-semibold text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[#525555]" />
        <div className="lg:flex lg:gap-20 gap-5">
          <div>
            <div className="flex flex-col gap-[48px] text-[#E9EAEA]">
              <div className="flex flex-col gap-4">
                <Link
                  aria-label="Waverlite logo"
                  href="/"
                  className="flex items-center gap-2"
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/w22/wlt-website/icons/logo/Group.svg"
                    }
                    unoptimized
                    height={100}
                    width={100}
                    alt="Waverlite"
                    className="size-[40px]"
                  />
                  <Image
                    src={
                      "https://res.cloudinary.com/w22/wlt-website/icons/logo/WaverliteWhite.svg"
                    }
                    unoptimized
                    height={100}
                    width={100}
                    alt="Waverlite"
                  />
                </Link>
                <p className="text-[15px] font-semibold">We Are Here</p>
                <Link
                  href={"https://maps.app.goo.gl/aCcdREtCcwQs6CAo8"}
                  target="_blank"
                >
                  <address className="text-[#9C9D9D] text-[13px] font-normal">
                    325 Front Street West, <br /> Toronto, ON M5V 2Y1, Canada
                  </address>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 flex-grow gap-4 my-10 lg:my-0">
            <div className="lg:col-span-2">
              <h6 className="text-[#E9EAEA] font-semibold lg:text-[20px] text-[16px] lg:mb-9 mb-3">
                Products
              </h6>
              <ul>
                {ProductsList.map((item, index) => (
                  <li
                    className="flex flex-col gap-3 text-[14px] font-normal text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                    key={index}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="text-[#E9EAEA] font-bold lg:text-[20px] text-[16px] lg:mb-9 mb-3">
                Company
              </h6>
              <ul>
                {CompanyList.map((item, index) => (
                  <li
                    className="flex flex-col gap-3 text-[14px] font-normal text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                    key={index}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="text-[#E9EAEA] font-bold lg:text-[20px] text-[16px] lg:mb-9 mb-3">
                Resources
              </h6>
              <ul>
                {DeveloperList.map((item, index) => (
                  <li
                    className="flex flex-col gap-3 text-[14px] font-normal text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                    key={index}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="text-[#E9EAEA] font-bold lg:text-[20px] text-[16px] lg:mb-9 mb-3">
                Legal
              </h6>
              <ul>
                {LegalList.map((item, index) => (
                  <li
                    className="flex flex-col gap-3 text-[14px] font-normal  text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                    key={index}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[#525555] -mt-10" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-[24px]">
            {icons.map((icon, index) => (
              <Link target="_blank" key={index} href={icon.href}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  className="size-[18px] lg:size-[24]"
                  height={100}
                  width={100}
                />
              </Link>
            ))}
          </div>
          <div className="flex md:flex-row flex-col items-center text-[14px] font-normal gap-5">
            <Link href={"/contact"} className="text-primary text-[16px]">
              Contact
            </Link>

            <a href="tel:+1 (647) 493 5887" className="text-[#9C9D9D]">
              +1 (647) 493 5887
            </a>
            <Link
              href={"malito:support@waverlite.email"}
              className="text-[#9C9D9D] underline"
            >
              support@waverlite.email
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 lg:mt-10">
        <p className="text-[#272A2B] lg:text-[20px] text-[13px] font-semibold">
          © 2024 Waverlite, All rights reserved.
        </p>
        <p className="text-black text-[13px] lg:text-[15px] leading-6">
          Redbiller Technologies Inc. Ontario Canada is registered and
          regularised by the Financial Transactions and Report Analysis Centre
          of Canada (FINTRAC) as a Money Service Business with registration
          number: M22065104.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
