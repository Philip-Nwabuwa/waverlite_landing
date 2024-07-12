import Image from "next/image";
import Link from "next/link";

import Logo1 from "@/assets/icons/logo/Group.svg";
import Waverlite from "@/assets/icons/logo/WaverliteWhite.svg";
import Mail from "@/assets/icons/footer/mail.png";
import X from "@/assets/icons/logo/media/X.png";
import Facebook from "@/assets/icons/logo/media/Facebook.png";
import IG from "@/assets/icons/logo/media/Instagram.png";
import Linkedin from "@/assets/icons/logo/media/Linkedin.png";

const icons = [
  { src: X, alt: "X", href: "https://x.com/waverlite" },
  {
    src: Facebook,
    alt: "Facebook",
    href: "https://web.facebook.com/waverlite",
  },
  { src: IG, alt: "Instagram", href: "https://www.instagram.com/thewaverlite" },
  {
    src: Linkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/showcase/waverlite",
  },
];

const ProductsList = [
  { text: "Money Transfer", href: "/money-transfer" },
  { text: "Scan to pay", href: "/scan-to-pay" },
  { text: "Overdraft", href: "/overdraft" },
  { text: "Gift Cards", href: "/gift-cards" },
  { text: "Virtual Card", href: "/virtual-cards" },
  { text: "Sales Mode", href: "/sales-mode" },
  { text: "Currency Exchange", href: "/currency-exchange" },
  { text: "Locator", href: "/locator" },
];

const CompanyList = [
  { text: "Our Story", href: "/our-story" },
  { text: "Freelancers", href: "/freelancers" },
  { text: "Careers", href: "/career" },
];
const DeveloperList = [
  { text: "API Documentation", href: "/api" },
  { text: "Tech Support", href: "#" },
];
const LegalList = [
  { text: "AML & KYC Policy", href: "kyc-policy" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
];
const HelpList = [
  { text: "Contact", href: "/contact" },
  { text: "FAQs", href: "/faqs" },
];

const Footer = () => {
  return (
    <footer className="container-xl my-[184px]">
      <div className="bg-[#272A2B] p-[52px] flex flex-col gap-[56px] rounded-[64px]">
        <div className="grid grid-cols-2 gap-[32px]">
          <div className="text-[#E9EAEA] flex flex-col gap-[32px]">
            <Image src={Mail} alt="Mail" />
            <h5 className="text-[48px] font-bold leading-[56.16px]">
              Stay updated with
              <br />
              the latest
            </h5>
            <p className="text-[22px] font-semibold leading-[28px]">
              Join our newsletter to stay updated <br /> with new releases and
              features
            </p>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="p-8"></div>
            <p className="text-[22px] text-[#E9EAEA] font-semibold">
              Enter your email
            </p>
            <div className="w-full flex gap-4">
              <input
                className="w-full bg-[#696969] text-[#E9EAEA] py-2 px-4 rounded-lg"
                placeholder="philipjoe@gmail.com"
              />
              <button className="py-2 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-gray-text text-lg font-bold">
              By subscribing you agree to our{" "}
              <Link
                href={"/privacy-policy"}
                className="text-[#E9EAEA] underline hover:text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[#525555]" />
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 pr-4">
            <div className="flex flex-col gap-[48px] text-[#E9EAEA]">
              <Link href="/" className="flex items-center gap-2">
                <Image src={Logo1} alt={""} />
                <Image src={Waverlite} alt={""} />
              </Link>
              <div className="flex flex-col gap-3 font-semibold">
                <address>
                  325 Front Street West,Toronto, ON M5V 2Y1, Canada
                </address>
                <p>
                  <a href="tel:+1 (647) 493 5887">+1 (647) 493 5887</a>
                </p>
              </div>
              <div className="flex gap-[24px]">
                {icons.map((icon, index) => (
                  <Link target="_blank" key={index} href={icon.href}>
                    <Image src={icon.src} alt={icon.alt} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h6 className="text-[#E9EAEA] font-bold text-[20px] mb-9">
              Products
            </h6>
            <ul>
              {ProductsList.map((item, index) => (
                <li
                  className="flex flex-col gap-3 font-semibold text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                  key={index}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h6 className="text-[#E9EAEA] font-bold text-[20px] mb-9">
              Company
            </h6>
            <ul>
              {CompanyList.map((item, index) => (
                <li
                  className="flex flex-col gap-3 font-semibold text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                  key={index}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h6 className="text-[#E9EAEA] font-bold text-[20px] mb-9">
              Developers
            </h6>
            <ul>
              {DeveloperList.map((item, index) => (
                <li
                  className="flex flex-col gap-3 font-semibold text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                  key={index}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h6 className="text-[#E9EAEA] font-bold text-[20px] mb-9">Legal</h6>
            <ul>
              {LegalList.map((item, index) => (
                <li
                  className="flex flex-col gap-3 font-semibold text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                  key={index}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="text-[#E9EAEA] font-bold text-[20px] mb-9">Help</h6>
            <ul>
              {HelpList.map((item, index) => (
                <li
                  className="flex flex-col gap-3 font-semibold text-[#9C9D9D] hover:text-primary hover:underline leading-[32px]"
                  key={index}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <p className="text-[#272A2B] text-[20px] font-semibold">
          © 2024 Waverlite, All rights reserved.
        </p>
        <p className="text-gray-text text-[20px] font-semibold">
          Redbiller Technologies Inc., Ontario Canada is registered and
          regularised by the Financial Transactions and Report Analysis Centre
          of Canada (FINTRAC) as a Money Service Business with registration
          number: M22065104.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
