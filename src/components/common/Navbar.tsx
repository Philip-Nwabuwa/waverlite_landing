"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo1 from "@/assets/icons/logo/Group.svg";
import MoneySend from "@/assets/icons/money-send.svg";
import MoneyAdd from "@/assets/icons/money-add.svg";
import Virtual from "@/assets/icons/card-virtual.svg";
import Card from "@/assets/icons/cards.svg";
import Code from "@/assets/icons/code-circle.svg";
import Location from "@/assets/icons/location.svg";
import Percent from "@/assets/icons/percent-circle.svg";
import Waverlite from "@/assets/icons/logo/WaverliteBlack.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const NavItems = [
  {
    href: "/",
    imgSrc: MoneySend,
    title: "Payments",
    description: "Global money transfer",
  },
  {
    href: "/money-transfer",
    imgSrc: MoneySend,
    title: "Money Transfer",
    description: "Supporting text",
  },
  {
    href: "/overdraft",
    imgSrc: MoneyAdd,
    title: "Overdraft",
    description: "Global money transfer",
  },
  {
    href: "/gift-cards",
    imgSrc: Card,
    title: "Gift Cards",
    description: "Supporting text",
  },
  {
    href: "/",
    imgSrc: Virtual,
    title: "Virtual Debit Cards",
    description: "Supporting text",
  },
  {
    href: "/",
    imgSrc: Percent,
    title: "Sales Mode",
    description: "Supporting text",
  },
  {
    href: "/",
    imgSrc: MoneySend,
    title: "Currency Exchange",
    description: "Supporting text",
  },
  {
    href: "/",
    imgSrc: Location,
    title: "Locator",
    description: "Supporting text",
  },
  {
    href: "/",
    imgSrc: Code,
    title: "Waverlie APIs",
    description: "Supporting text",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="navbar fixed container-xl max-w-[1440px] z-50">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src={Logo1} alt={""} />
        <Image src={Waverlite} alt={""} />
      </Link>
      <div className="flex items-center gap-1">
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex gap-2 items-center py-2 px-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            Products <Image src={ArrowDown} alt={""} />
          </div>
          {isOpen && (
            <div className="w-max absolute top-full left-0 bg-[#FBFBFB] rounded-[24px] shadow-md p-4 z-10">
              <ul className="bg-[#fff] p-3 grid grid-cols-2 gap-3">
                {NavItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="pl-4 py-2 pr-1"
                  >
                    <Link href={item.href} className="flex gap-4">
                      <Image src={item.imgSrc} alt={""} />
                      <div>
                        <p className="text-[20px] text-[#6E7071] font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-text text-[14px]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
