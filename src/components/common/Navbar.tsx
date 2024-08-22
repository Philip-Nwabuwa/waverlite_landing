"use client";

import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

import Logo1 from "@/assets/icons/logo/Group.svg";
import Waverlite from "@/assets/icons/logo/WaverliteBlack.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { SquareMenu, X } from "lucide-react";
import useDropdown from "@/hooks/useDropdown";
import AppStore from "@/assets/images/cta/App Store.png";
import GooglePlay from "@/assets/images/cta/Google Play.png";
import Phone from "@/assets/images/cta/Galaxy S20 Ultra 1.png";
import Hand from "@/assets/images/cta/Hand.png";
import QrCode from "@/assets/images/cta/QR Code.png";

const nunito = Nunito({ subsets: ["latin"] });

type IconType = {
  href: string;
  title: string;
  description: string;
  icon: any;
};

const NavItems: IconType[] = [
  {
    href: "/money-transfer",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 18.3336C12.6667 19.627 13.6668 20.667 14.8934 20.667H17.4001C18.4667 20.667 19.3334 19.7603 19.3334 18.627C19.3334 17.4136 18.8001 16.9736 18.0134 16.6936L14.0001 15.2936C13.2134 15.0136 12.6801 14.587 12.6801 13.3603C12.6801 12.2403 13.5467 11.3203 14.6134 11.3203H17.1201C18.3467 11.3203 19.3468 12.3603 19.3468 13.6536"
          fill="#BCBDBD"
          fill-opacity="0.25"
        />
        <path
          d="M12.6667 18.3336C12.6667 19.627 13.6668 20.667 14.8934 20.667H17.4001C18.4667 20.667 19.3334 19.7603 19.3334 18.627C19.3334 17.4136 18.8001 16.9736 18.0134 16.6936L14.0001 15.2936C13.2134 15.0136 12.6801 14.587 12.6801 13.3603C12.6801 12.2403 13.5467 11.3203 14.6134 11.3203H17.1201C18.3467 11.3203 19.3468 12.3603 19.3468 13.6536"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 10V22"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 16.0003C29.3334 23.3603 23.3601 29.3337 16.0001 29.3337C8.64008 29.3337 2.66675 23.3603 2.66675 16.0003C2.66675 8.64033 8.64008 2.66699 16.0001 2.66699"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3333 8.00033V2.66699H24"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.6667 9.33366L29.3334 2.66699"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Money Transfer",
    description: "Supporting text",
  },
  {
    href: "/overdraft",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0001 19.3337C17.841 19.3337 19.3334 17.8413 19.3334 16.0003C19.3334 14.1594 17.841 12.667 16.0001 12.667C14.1591 12.667 12.6667 14.1594 12.6667 16.0003C12.6667 17.8413 14.1591 19.3337 16.0001 19.3337Z"
          fill="#BCBDBD"
          fill-opacity="0.25"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.6667 12.667V19.3337"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.9999 24.0003C11.9999 25.0003 11.7199 25.947 11.2266 26.747C10.3066 28.2937 8.61325 29.3337 6.66659 29.3337C4.71992 29.3337 3.02657 28.2937 2.10657 26.747C1.61323 25.947 1.33325 25.0003 1.33325 24.0003C1.33325 21.0537 3.71992 18.667 6.66659 18.667C9.61325 18.667 11.9999 21.0537 11.9999 24.0003Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.65544 23.9727H4.68213"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.6665 22.0264V26.013"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66675 20.3997V11.9997C2.66675 7.33301 5.33341 5.33301 9.33341 5.33301H22.6667C26.6667 5.33301 29.3334 7.33301 29.3334 11.9997V19.9997C29.3334 24.6663 26.6667 26.6663 22.6667 26.6663H11.3334"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Overdraft",
    description: "Global money transfer",
  },
  {
    href: "/gift-cards",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66675 16.8135H25.3334"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.3334 13.7067V23.2401C25.2934 27.0401 24.2534 28.0001 20.2934 28.0001H7.70679C3.68012 28.0001 2.66675 27.0001 2.66675 23.0267V13.7067C2.66675 10.1067 3.50675 8.94673 6.66675 8.76007C6.98675 8.74673 7.33345 8.7334 7.70679 8.7334H20.2934C24.32 8.7334 25.3334 9.7334 25.3334 13.7067Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 8.97333V18.2933C29.3334 21.8933 28.4934 23.0533 25.3334 23.24V13.7067C25.3334 9.73333 24.32 8.73333 20.2934 8.73333H7.70679C7.33345 8.73333 6.98675 8.74667 6.66675 8.76C6.70675 4.96 7.74679 4 11.7068 4H24.2934C28.32 4 29.3334 5 29.3334 8.97333Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 23.7471H9.29329"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.1467 23.7471H16.7334"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Gift Cards",
    description: "Supporting text",
  },
  {
    href: "/virtual-cards",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.2395 21.1726L21.1728 5.23926"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.8018 24.3725L16.4018 22.7725"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.3906 20.7853L21.5773 17.5986"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.80177 13.6523L13.6551 4.79899C16.4818 1.97233 17.8951 1.95899 20.6951 4.75899L27.2418 11.3057C30.0418 14.1057 30.0284 15.519 27.2018 18.3457L18.3484 27.199C15.5218 30.0257 14.1084 30.039 11.3084 27.239L4.76177 20.6923C1.96177 17.8923 1.96177 16.4923 4.80177 13.6523Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66675 29.3311H29.3334"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Virtual Debit Cards",
    description: "Supporting text",
  },
  {
    href: "/sales-mode",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4268 20.3596L20.1467 11.6396"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.9733 13.8269C12.879 13.8269 13.6132 13.0926 13.6132 12.1869C13.6132 11.2811 12.879 10.5469 11.9733 10.5469C11.0675 10.5469 10.3333 11.2811 10.3333 12.1869C10.3333 13.0926 11.0675 13.8269 11.9733 13.8269Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.6934 21.4538C21.5992 21.4538 22.3335 20.7195 22.3335 19.8138C22.3335 18.9081 21.5992 18.1738 20.6934 18.1738C19.7877 18.1738 19.0535 18.9081 19.0535 19.8138C19.0535 20.7195 19.7877 21.4538 20.6934 21.4538Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0001 29.3337C23.3639 29.3337 29.3334 23.3641 29.3334 16.0003C29.3334 8.63653 23.3639 2.66699 16.0001 2.66699C8.63628 2.66699 2.66675 8.63653 2.66675 16.0003C2.66675 23.3641 8.63628 29.3337 16.0001 29.3337Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Sales Mode",
    description: "Supporting text",
  },
  {
    href: "currency-exchange",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 18.3336C12.6667 19.627 13.6668 20.667 14.8934 20.667H17.4001C18.4667 20.667 19.3334 19.7603 19.3334 18.627C19.3334 17.4136 18.8001 16.9736 18.0134 16.6936L14.0001 15.2936C13.2134 15.0136 12.6801 14.587 12.6801 13.3603C12.6801 12.2403 13.5467 11.3203 14.6134 11.3203H17.1201C18.3467 11.3203 19.3468 12.3603 19.3468 13.6536"
          fill="#BCBDBD"
          fill-opacity="0.25"
        />
        <path
          d="M12.6667 18.3336C12.6667 19.627 13.6668 20.667 14.8934 20.667H17.4001C18.4667 20.667 19.3334 19.7603 19.3334 18.627C19.3334 17.4136 18.8001 16.9736 18.0134 16.6936L14.0001 15.2936C13.2134 15.0136 12.6801 14.587 12.6801 13.3603C12.6801 12.2403 13.5467 11.3203 14.6134 11.3203H17.1201C18.3467 11.3203 19.3468 12.3603 19.3468 13.6536"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 10V22"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 16.0003C29.3334 23.3603 23.3601 29.3337 16.0001 29.3337C8.64008 29.3337 2.66675 23.3603 2.66675 16.0003C2.66675 8.64033 8.64008 2.66699 16.0001 2.66699"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3333 8.00033V2.66699H24"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.6667 9.33366L29.3334 2.66699"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Currency Exchange",
    description: "Supporting text",
  },
  {
    href: "/locator",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0001 17.9069C18.2976 17.9069 20.1601 16.0444 20.1601 13.7469C20.1601 11.4494 18.2976 9.58691 16.0001 9.58691C13.7026 9.58691 11.8401 11.4494 11.8401 13.7469C11.8401 16.0444 13.7026 17.9069 16.0001 17.9069Z"
          stroke="#6E7071"
          stroke-width="1.5"
        />
        <path
          d="M4.8266 11.3203C7.45327 -0.226338 24.5599 -0.213005 27.1733 11.3337C28.7066 18.107 24.4933 23.8403 20.7999 27.387C18.1199 29.9737 13.8799 29.9737 11.1866 27.387C7.5066 23.8403 3.29327 18.0937 4.8266 11.3203Z"
          stroke="#6E7071"
          stroke-width="1.5"
        />
      </svg>
    ),
    title: "Locator",
    description: "Supporting text",
  },
  {
    href: "/api",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 13.333L8 15.9997L10.6667 18.6663"
          fill="#BCBDBD"
          fill-opacity="0.25"
        />
        <path
          d="M10.6667 13.333L8 15.9997L10.6667 18.6663"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.3333 13.333L23.9999 15.9997L21.3333 18.6663"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0001 29.3337C23.3639 29.3337 29.3334 23.3641 29.3334 16.0003C29.3334 8.63653 23.3639 2.66699 16.0001 2.66699C8.63628 2.66699 2.66675 8.63653 2.66675 16.0003C2.66675 23.3641 8.63628 29.3337 16.0001 29.3337Z"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3334 12.8936L14.6667 19.1069"
          stroke="#6E7071"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Waverlie APIs",
    description: "Supporting text",
  },
];

const Navbar = () => {
  const {
    isOpen: isDropdownOpen,
    toggleDropdown,
    ref: dropdownRef,
  } = useDropdown();
  const {
    isOpen: isDownloadOpen,
    toggleDropdown: toggleDownloadDropdown,
    ref: downloadDropdownRef,
  } = useDropdown();
  const {
    isOpen: isNavOpen,
    toggleDropdown: toggleNavDropdown,
    ref: dropdownNavRef,
  } = useDropdown();

  return (
    <nav className="navbar fixed container-xl z-50">
      <Link
        aria-label="Waverlite logo"
        href="/"
        className="flex items-center justify-center gap-2"
      >
        <Image src={Logo1} alt={""} />
        <Image src={Waverlite} alt={""} />
      </Link>
      <div className="lg:flex hidden items-center gap-1">
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex gap-2 items-center py-2 px-4 hover:bg-white/20 hover:backdrop-blur-[80px] rounded-lg cursor-pointer"
            onClick={toggleDropdown}
          >
            Products <Image src={ArrowDown} alt={""} />
          </div>
          {isDropdownOpen && (
            <div className="w-max absolute top-full left-0 bg-[#FBFBFB] rounded-[24px] shadow-md p-4 z-10">
              <ul className="bg-[#fff] p-3 grid grid-cols-2 gap-3">
                {NavItems.map(({ href, icon, title, description }, index) => (
                  <li
                    key={index}
                    onClick={toggleDropdown}
                    className="svg-img px-4 py-2 hover:bg-gray-100 text-gray-text hover:text-black rounded-md"
                  >
                    <Link
                      key={index}
                      href={href}
                      className="flex items-center gap-4"
                    >
                      {icon}
                      <div>
                        <p className="text-[20px] font-semibold">{title}</p>
                        <p className="text-[14px]">{description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link
          href={"/our-story"}
          className="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-[80px] rounded-lg cursor-pointer"
        >
          Our Story
        </Link>
      </div>
      <div className="lg:flex hidden items-center gap-2 py-2 px-4">
        <div className="relative" ref={downloadDropdownRef}>
          <div
            onClick={toggleDownloadDropdown}
            className="flex gap-2 items-center py-2 px-4 hover:bg-white/20 hover:backdrop-blur-[80px] rounded-lg cursor-pointer"
          >
            Download App <Image src={ArrowDown} alt={""} />
          </div>
          {isDownloadOpen && (
            <div className="w-[900px] h-[300px] absolute top-[120%] -left-[700px] rounded-[24px] shadow-md z-10">
              <div className="bg-primary flex lg:items-end items-center gap-10 rounded-[48px]">
                <div className="flex relative pl-10">
                  <Image src={Phone} className="top-[10px]" alt="Phone" />
                </div>
                <div className="flex flex-col py-10 px-10 gap-[36px]">
                  <h4
                    className={`${nunito.className} text-[#E9EAEA] font-extrabold lg:text-[20px] text-center lg:text-start text-2xl`}
                  >
                    Get more from Waverlite App
                  </h4>
                  <div className="flex gap-6">
                    <Link
                      href={
                        "https://apps.apple.com/us/app/waverlite/id6450453788"
                      }
                      target="_blank"
                    >
                      <Image src={AppStore} alt="App Store" />
                    </Link>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.redbiller.waverlite&pcampaignid=web_share"
                      }
                      target="_blank"
                    >
                      <Image src={GooglePlay} alt="Google Play" />
                    </Link>
                  </div>
                  <p className="text-[#E9EAEA] w-full max-w-[580px] text-[20px] text-center lg:text-start font-bold leading-[28px]">
                    Scan the QR code below to download the Waverlite app
                    directly to your device.
                  </p>
                  <div className="relative">
                    <div className="flex items-center justify-start">
                      <Image src={QrCode} alt="Qr Code" />
                    </div>
                    <Image
                      src={Hand}
                      className="w-[200px] flex absolute top-0 right-[-40px]"
                      alt="Hand"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center rounded-[10px]">
          <Link
            href={"https://app.waverlite.com/"}
            className="py-2 px-8 border-[0.5px] bg-white hover:bg-[#E9EAEA] text-[#1B80BA] rounded-s-[10px]"
          >
            Login
          </Link>
          <Link
            href={"https://app.waverlite.com/create-account"}
            className="py-2 px-8 border-[0.5px] border-solid bg-[#1B80BA] text-[#E9EAEA] hover:bg-[#2579a9] border-[#4ba4d6] border-opacity-50 rounded-e-[10px]"
          >
            Register
          </Link>
        </div>
      </div>
      <div
        className="flex lg:hidden cursor-pointer"
        onClick={toggleNavDropdown}
      >
        {isNavOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <SquareMenu className="w-8 h-8" />
        )}
      </div>
      {isNavOpen && (
        <div
          className={`flex flex-col lg:hidden container-xl absolute top-20 left-0 w-full bg-white text-black transform transition-transform duration-300 ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="divide-y divide-gray-500/10">a</div>
          <div className="flex items-center justify-center py-6">
            <div className="w-fit flex items-center rounded-[10px]">
              <Link
                href={"https://app.waverlite.com/"}
                className="py-2 px-8 border-[0.5px] text-[#1B80BA] bg-[#E9EAEA] rounded-s-[10px]"
              >
                Login
              </Link>
              <Link
                href={"https://app.waverlite.com/create-account"}
                className="py-2 px-8 bg-[#1B80BA] text-[#E9EAEA] border-[0.5px] border-solid border-[#4ba4d6] border-opacity-50 rounded-e-[10px]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
