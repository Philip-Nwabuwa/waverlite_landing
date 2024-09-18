"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo1 from "@/assets/icons/logo/Group.svg";
import Waverlite from "@/assets/icons/logo/WaverliteBlack.svg";
import ThickArrow from "@/assets/icons/CaretDown.svg";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import useDropdown from "@/hooks/useDropdown";

import { CompanyList, DeveloperList, LegalList, ProductsList } from "./Footer";
import QrCode from "@/assets/images/qr-code.png";

type IconType = {
  href: string;
  title: string;
  description: string;
  icon: any;
};

const ProductsItems: IconType[] = [
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
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 10V22"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 16.0003C29.3334 23.3603 23.3601 29.3337 16.0001 29.3337C8.64008 29.3337 2.66675 23.3603 2.66675 16.0003C2.66675 8.64033 8.64008 2.66699 16.0001 2.66699"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3333 8.00033V2.66699H24"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.6667 9.33366L29.3334 2.66699"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Money Transfer",
    description: "Secure, Fast, Global Transfers.",
  },
  {
    href: "/overdraft",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 8.39719V7.875C17.25 5.52375 13.7034 3.75 9 3.75C4.29656 3.75 0.75 5.52375 0.75 7.875V11.625C0.75 13.5834 3.21094 15.1397 6.75 15.6056V16.125C6.75 18.4762 10.2966 20.25 15 20.25C19.7034 20.25 23.25 18.4762 23.25 16.125V12.375C23.25 10.4344 20.8669 8.87625 17.25 8.39719ZM21.75 12.375C21.75 13.6144 18.8634 15 15 15C14.6503 15 14.3034 14.9878 13.9613 14.9653C15.9834 14.2284 17.25 13.0312 17.25 11.625V9.91313C20.0503 10.3303 21.75 11.4628 21.75 12.375ZM6.75 14.0859V11.8556C7.49604 11.9528 8.24765 12.0011 9 12C9.75235 12.0011 10.504 11.9528 11.25 11.8556V14.0859C10.5051 14.196 9.75302 14.2508 9 14.25C8.24698 14.2508 7.49493 14.196 6.75 14.0859ZM15.75 10.3059V11.625C15.75 12.4116 14.5866 13.2562 12.75 13.7691V11.5781C13.9603 11.2847 14.985 10.8478 15.75 10.3059ZM9 5.25C12.8634 5.25 15.75 6.63562 15.75 7.875C15.75 9.11438 12.8634 10.5 9 10.5C5.13656 10.5 2.25 9.11438 2.25 7.875C2.25 6.63562 5.13656 5.25 9 5.25ZM2.25 11.625V10.3059C3.015 10.8478 4.03969 11.2847 5.25 11.5781V13.7691C3.41344 13.2562 2.25 12.4116 2.25 11.625ZM8.25 16.125V15.7341C8.49656 15.7434 8.74594 15.75 9 15.75C9.36375 15.75 9.71906 15.7378 10.0678 15.7172C10.4552 15.8559 10.8499 15.9736 11.25 16.0697V18.2691C9.41344 17.7562 8.25 16.9116 8.25 16.125ZM12.75 18.5859V16.35C13.4958 16.4503 14.2475 16.5004 15 16.5C15.7523 16.5011 16.504 16.4528 17.25 16.3556V18.5859C15.758 18.8047 14.242 18.8047 12.75 18.5859ZM18.75 18.2691V16.0781C19.9603 15.7847 20.985 15.3478 21.75 14.8059V16.125C21.75 16.9116 20.5866 17.7562 18.75 18.2691Z"
          fill="black"
        />
      </svg>
    ),
    title: "Overdraft",
    description: "Instant Access, Flexible Repayments",
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
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.3334 13.7067V23.2401C25.2934 27.0401 24.2534 28.0001 20.2934 28.0001H7.70679C3.68012 28.0001 2.66675 27.0001 2.66675 23.0267V13.7067C2.66675 10.1067 3.50675 8.94673 6.66675 8.76007C6.98675 8.74673 7.33345 8.7334 7.70679 8.7334H20.2934C24.32 8.7334 25.3334 9.7334 25.3334 13.7067Z"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 8.97333V18.2933C29.3334 21.8933 28.4934 23.0533 25.3334 23.24V13.7067C25.3334 9.73333 24.32 8.73333 20.2934 8.73333H7.70679C7.33345 8.73333 6.98675 8.74667 6.66675 8.76C6.70675 4.96 7.74679 4 11.7068 4H24.2934C28.32 4 29.3334 5 29.3334 8.97333Z"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 23.7471H9.29329"
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.1467 23.7471H16.7334"
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Gift Cards",
    description: "The Perfect Gift, Anytime, Anywhere",
  },
  {
    href: "/debit-cards",
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
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.8018 24.3725L16.4018 22.7725"
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.3906 20.7853L21.5773 17.5986"
          stroke="#000"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.80177 13.6523L13.6551 4.79899C16.4818 1.97233 17.8951 1.95899 20.6951 4.75899L27.2418 11.3057C30.0418 14.1057 30.0284 15.519 27.2018 18.3457L18.3484 27.199C15.5218 30.0257 14.1084 30.039 11.3084 27.239L4.76177 20.6923C1.96177 17.8923 1.96177 16.4923 4.80177 13.6523Z"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66675 29.3311H29.3334"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Debit Cards",
    description: "Instant Access, Unlimited Convenience.",
  },
  {
    href: "/sales-mode",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 4.5V3H20.25V1.5H18.75V3H18C17.1727 3 16.5 3.6735 16.5 4.5V6C16.5 6.82725 17.1727 7.5 18 7.5H21V9H16.5V10.5H18.75V12H20.25V10.5H21C21.8272 10.5 22.5 9.82725 22.5 9V7.5C22.5 6.6735 21.8272 6 21 6H18V4.5H22.5ZM18 15V16.5H19.9395L17.25 19.1895L15.531 17.4697C15.3906 17.3293 15.2001 17.2502 15.0015 17.25H15C14.8014 17.2502 14.6109 17.3293 14.4705 17.4697L10.5 21.4395L11.5605 22.5L15.0007 19.0605L16.7197 20.7803C16.8604 20.9209 17.0511 20.9998 17.25 20.9998C17.4489 20.9998 17.6396 20.9209 17.7803 20.7803L21 17.5605V19.5H22.5V15H18ZM3 22.5H1.5V18.75C1.5 15.855 3.855 13.5 6.75 13.5H11.25C12.7417 13.5 14.1675 14.1375 15.1627 15.2498L14.0452 16.2502C13.6935 15.8569 13.2627 15.5423 12.7811 15.3268C12.2994 15.1114 11.7777 15 11.25 15H6.75C4.68225 15 3 16.6823 3 18.75V22.5ZM9 12C10.3924 12 11.7277 11.4469 12.7123 10.4623C13.6969 9.47774 14.25 8.14239 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5C7.60761 1.5 6.27226 2.05312 5.28769 3.03769C4.30312 4.02226 3.75 5.35761 3.75 6.75C3.75 8.14239 4.30312 9.47774 5.28769 10.4623C6.27226 11.4469 7.60761 12 9 12ZM9 3C9.99456 3 10.9484 3.39509 11.6517 4.09835C12.3549 4.80161 12.75 5.75544 12.75 6.75C12.75 7.74456 12.3549 8.69839 11.6517 9.40165C10.9484 10.1049 9.99456 10.5 9 10.5C8.00544 10.5 7.05161 10.1049 6.34835 9.40165C5.64509 8.69839 5.25 7.74456 5.25 6.75C5.25 5.75544 5.64509 4.80161 6.34835 4.09835C7.05161 3.39509 8.00544 3 9 3Z"
          fill="black"
        />
      </svg>
    ),
    title: "Sales Mode",
    description: "Boost Your Sales with Ease",
  },
  {
    href: "currency-exchange",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 8L7 4M7 4L3 8M7 4V20M13 16L17 20M17 20L21 16M17 20V4"
          stroke="#101212"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Currency Exchange",
    description: "Seamless, Real-Time Currency Exchange",
  },
];

const CompanyItems: IconType[] = [
  {
    href: "/about",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.95 14.0999C22.8712 14.159 22.7815 14.202 22.6861 14.2265C22.5907 14.2509 22.4914 14.2563 22.3939 14.2424C22.2964 14.2285 22.2026 14.1955 22.1179 14.1453C22.0331 14.0951 21.9591 14.0287 21.9 13.9499C21.4479 13.3423 20.8595 12.8493 20.1821 12.5106C19.5048 12.1719 18.7573 11.997 18 11.9999C17.8525 11.9999 17.7083 11.9564 17.5854 11.8749C17.4625 11.7933 17.3664 11.6774 17.309 11.5415C17.2701 11.4492 17.25 11.3501 17.25 11.2499C17.25 11.1498 17.2701 11.0506 17.309 10.9584C17.3664 10.8225 17.4625 10.7065 17.5854 10.625C17.7083 10.5434 17.8525 10.4999 18 10.4999C18.4208 10.4999 18.8332 10.3818 19.1903 10.1592C19.5473 9.93653 19.8348 9.61819 20.0201 9.24034C20.2053 8.86248 20.2809 8.44025 20.2382 8.02161C20.1955 7.60296 20.0362 7.20468 19.7785 6.87201C19.5208 6.53933 19.1749 6.2856 18.7803 6.13963C18.3856 5.99365 17.9579 5.96129 17.5457 6.04622C17.1335 6.13115 16.7535 6.32996 16.4486 6.62007C16.1438 6.91018 15.9264 7.27997 15.8212 7.68742C15.7966 7.78284 15.7534 7.87247 15.6942 7.95119C15.6349 8.02992 15.5607 8.09621 15.4758 8.14626C15.391 8.19632 15.2971 8.22917 15.1995 8.24293C15.1019 8.2567 15.0026 8.25111 14.9072 8.22649C14.8118 8.20186 14.7221 8.15869 14.6434 8.09943C14.5647 8.04016 14.4984 7.96598 14.4483 7.8811C14.3983 7.79622 14.3654 7.70231 14.3517 7.60474C14.3379 7.50717 14.3435 7.40784 14.3681 7.31242C14.5141 6.7474 14.79 6.22426 15.1738 5.78463C15.5576 5.34499 16.0387 5.00099 16.5788 4.78C17.1189 4.55901 17.7031 4.46713 18.285 4.51167C18.8669 4.55621 19.4304 4.73594 19.9305 5.03656C20.4307 5.33718 20.8539 5.75039 21.1663 6.24332C21.4787 6.73624 21.6717 7.29527 21.73 7.87593C21.7884 8.45659 21.7104 9.04285 21.5022 9.58806C21.2941 10.1333 20.9616 10.6224 20.5312 11.0165C21.5511 11.458 22.4376 12.1587 23.1028 13.049C23.1619 13.128 23.2048 13.2179 23.2291 13.3135C23.2534 13.4091 23.2586 13.5085 23.2444 13.6062C23.2302 13.7038 23.1969 13.7976 23.1464 13.8824C23.0959 13.9671 23.0291 14.041 22.95 14.0999ZM17.8987 19.8749C17.953 19.9603 17.9894 20.0557 18.0058 20.1556C18.0223 20.2554 18.0183 20.3575 17.9943 20.4557C17.9702 20.554 17.9265 20.6463 17.8658 20.7272C17.8051 20.8082 17.7287 20.876 17.6411 20.9266C17.5536 20.9772 17.4566 21.0096 17.3562 21.0218C17.2558 21.034 17.154 21.0258 17.0568 20.9976C16.9597 20.9694 16.8692 20.9219 16.7909 20.8578C16.7126 20.7938 16.6481 20.7146 16.6012 20.6249C16.1288 19.8249 15.4559 19.1619 14.649 18.7014C13.8421 18.2408 12.9291 17.9986 12 17.9986C11.0709 17.9986 10.1579 18.2408 9.35096 18.7014C8.54406 19.1619 7.87119 19.8249 7.39873 20.6249C7.35184 20.7146 7.28731 20.7938 7.20901 20.8578C7.13072 20.9219 7.04028 20.9694 6.94313 20.9976C6.84599 21.0258 6.74414 21.034 6.64373 21.0218C6.54331 21.0096 6.44641 20.9772 6.35883 20.9266C6.27126 20.876 6.19483 20.8082 6.13414 20.7272C6.07346 20.6463 6.02977 20.554 6.0057 20.4557C5.98164 20.3575 5.97769 20.2554 5.99411 20.1556C6.01053 20.0557 6.04696 19.9603 6.10123 19.8749C6.82835 18.6256 7.93704 17.6424 9.26435 17.0699C8.51747 16.4981 7.96857 15.7066 7.69479 14.8066C7.42102 13.9067 7.43613 12.9436 7.73802 12.0527C8.03991 11.1618 8.61339 10.3879 9.37786 9.83981C10.1423 9.29169 11.0593 8.99692 12 8.99692C12.9406 8.99692 13.8576 9.29169 14.6221 9.83981C15.3866 10.3879 15.96 11.1618 16.2619 12.0527C16.5638 12.9436 16.5789 13.9067 16.3052 14.8066C16.0314 15.7066 15.4825 16.4981 14.7356 17.0699C16.0629 17.6424 17.1716 18.6256 17.8987 19.8749ZM12 16.4999C12.5933 16.4999 13.1733 16.324 13.6667 15.9943C14.16 15.6647 14.5446 15.1962 14.7716 14.648C14.9987 14.0998 15.0581 13.4966 14.9423 12.9147C14.8266 12.3327 14.5409 11.7982 14.1213 11.3786C13.7017 10.959 13.1672 10.6733 12.5852 10.5576C12.0033 10.4418 11.4001 10.5012 10.8519 10.7283C10.3038 10.9553 9.83521 11.3399 9.50557 11.8332C9.17593 12.3266 8.99998 12.9066 8.99998 13.4999C8.99998 14.2956 9.31605 15.0586 9.87866 15.6212C10.4413 16.1839 11.2043 16.4999 12 16.4999ZM6.74998 11.2499C6.74998 11.051 6.67096 10.8602 6.53031 10.7196C6.38966 10.5789 6.19889 10.4999 5.99998 10.4999C5.57916 10.4999 5.16679 10.3818 4.8097 10.1592C4.45261 9.93653 4.16512 9.61819 3.97988 9.24034C3.79465 8.86248 3.71909 8.44025 3.76179 8.02161C3.80449 7.60296 3.96374 7.20468 4.22145 6.87201C4.47917 6.53933 4.82501 6.2856 5.2197 6.13963C5.61439 5.99365 6.0421 5.96129 6.45426 6.04622C6.86642 6.13115 7.2465 6.32996 7.55133 6.62007C7.85616 6.91018 8.07352 7.27997 8.17873 7.68742C8.22846 7.88012 8.3527 8.04517 8.52412 8.14626C8.69554 8.24736 8.90009 8.27621 9.09279 8.22649C9.28549 8.17676 9.45054 8.05252 9.55163 7.8811C9.65273 7.70968 9.68158 7.50512 9.63185 7.31242C9.48583 6.7474 9.20996 6.22426 8.82618 5.78463C8.4424 5.34499 7.96131 5.00099 7.42119 4.78C6.88106 4.55901 6.29682 4.46713 5.71494 4.51167C5.13306 4.55621 4.56961 4.73594 4.06941 5.03656C3.56921 5.33718 3.14608 5.75039 2.83369 6.24332C2.52129 6.73624 2.32825 7.29527 2.26992 7.87593C2.21159 8.45659 2.28959 9.04285 2.49771 9.58806C2.70583 10.1333 3.03832 10.6224 3.46873 11.0165C2.44993 11.4585 1.5644 12.1591 0.899979 13.049C0.780508 13.2081 0.729143 13.4082 0.757186 13.6052C0.785228 13.8022 0.890381 13.98 1.04951 14.0995C1.20864 14.2189 1.40871 14.2703 1.60571 14.2422C1.80271 14.2142 1.98051 14.1091 2.09998 13.9499C2.55203 13.3423 3.14043 12.8493 3.81781 12.5106C4.4952 12.1719 5.24264 11.997 5.99998 11.9999C6.19889 11.9999 6.38966 11.9209 6.53031 11.7803C6.67096 11.6396 6.74998 11.4488 6.74998 11.2499Z"
          fill="#101212"
        />
      </svg>
    ),
    title: "About Us",
    description: "Your Trusted Partner for Seamless Global Payments",
  },
  {
    href: "/career",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM9 11.25C9 10.6567 9.17595 10.0766 9.50559 9.58329C9.83524 9.08994 10.3038 8.70542 10.8519 8.47836C11.4001 8.2513 12.0033 8.19189 12.5853 8.30764C13.1672 8.4234 13.7018 8.70912 14.1213 9.12868C14.5409 9.54824 14.8266 10.0828 14.9424 10.6647C15.0581 11.2467 14.9987 11.8499 14.7716 12.3981C14.5446 12.9462 14.1601 13.4148 13.6667 13.7444C13.1734 14.0741 12.5933 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM6.80344 18.75C7.32999 17.8377 8.08744 17.0801 8.99964 16.5533C9.91184 16.0266 10.9466 15.7493 12 15.7493C13.0534 15.7493 14.0882 16.0266 15.0004 16.5533C15.9126 17.0801 16.67 17.8377 17.1966 18.75H6.80344ZM20.25 18.75H18.8747C18.083 16.942 16.6117 15.5182 14.7787 14.7863C15.515 14.2083 16.0527 13.4151 16.3169 12.5172C16.5812 11.6193 16.5589 10.6613 16.2531 9.77666C15.9474 8.89201 15.3734 8.12473 14.611 7.58164C13.8487 7.03855 12.936 6.74668 12 6.74668C11.064 6.74668 10.1513 7.03855 9.38898 7.58164C8.62665 8.12473 8.05264 8.89201 7.74688 9.77666C7.44112 10.6613 7.41881 11.6193 7.68308 12.5172C7.94734 13.4151 8.48502 14.2083 9.22125 14.7863C7.3883 15.5182 5.91699 16.942 5.12531 18.75H3.75V5.25H20.25V18.75Z"
          fill="#101212"
        />
      </svg>
    ),
    title: "Careers",
    description: "Join Us and Shape the Future.",
  },
];

const ResourcesItems: IconType[] = [
  {
    href: "/api",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7025 16.4999H10.4362C10.3227 17.1716 10.0582 17.8089 9.6625 18.3635C9.26684 18.9181 8.75042 19.3756 8.15218 19.7016C7.55393 20.0275 6.88949 20.2134 6.20895 20.2452C5.52841 20.2769 4.84954 20.1538 4.22354 19.8849C3.59754 19.6161 3.04074 19.2087 2.59515 18.6933C2.14955 18.178 1.82678 17.5682 1.65119 16.9099C1.47559 16.2517 1.45175 15.5621 1.58146 14.8933C1.71117 14.2245 1.99105 13.5938 2.39999 13.0489C2.51946 12.8898 2.69725 12.7847 2.89425 12.7566C3.09125 12.7286 3.29133 12.7799 3.45046 12.8994C3.60959 13.0189 3.71474 13.1967 3.74278 13.3937C3.77082 13.5907 3.71946 13.7908 3.59999 13.9499C3.20862 14.4682 2.99787 15.1004 2.99999 15.7499C2.99999 16.5455 3.31606 17.3086 3.87867 17.8712C4.44128 18.4338 5.20434 18.7499 5.99999 18.7499C6.79564 18.7499 7.5587 18.4338 8.12131 17.8712C8.68392 17.3086 8.99999 16.5455 8.99999 15.7499C8.99999 15.551 9.079 15.3602 9.21966 15.2196C9.36031 15.0789 9.55107 14.9999 9.74999 14.9999H16.7025C16.8676 14.7139 17.1224 14.4904 17.4275 14.3641C17.7326 14.2377 18.0708 14.2155 18.3898 14.301C18.7087 14.3865 18.9905 14.5748 19.1916 14.8367C19.3926 15.0987 19.5015 15.4197 19.5015 15.7499C19.5015 16.0801 19.3926 16.4011 19.1916 16.663C18.9905 16.925 18.7087 17.1133 18.3898 17.1988C18.0708 17.2842 17.7326 17.2621 17.4275 17.1357C17.1224 17.0093 16.8676 16.7858 16.7025 16.4999ZM5.99999 17.2499C6.25979 17.25 6.51515 17.1826 6.74108 17.0543C6.96701 16.9261 7.15575 16.7413 7.28882 16.5182C7.42189 16.295 7.49472 16.0412 7.50018 15.7814C7.50565 15.5217 7.44355 15.265 7.31999 15.0364L10.6734 9.58582C10.7775 9.41647 10.8101 9.21273 10.764 9.01937C10.718 8.826 10.597 8.65883 10.4278 8.55457C10.0269 8.30779 9.68976 7.97013 9.44355 7.5689C9.19735 7.16768 9.04902 6.71414 9.01056 6.24497C8.9721 5.7758 9.04459 5.30416 9.22216 4.8682C9.39974 4.43223 9.67742 4.04417 10.0327 3.7354C10.3881 3.42662 10.8111 3.2058 11.2676 3.09079C11.724 2.97577 12.2012 2.9698 12.6604 3.07334C13.1196 3.17688 13.548 3.38703 13.911 3.68681C14.2739 3.98658 14.5612 4.36757 14.7497 4.79895C14.8292 4.98133 14.978 5.12463 15.1632 5.19733C15.3484 5.27003 15.555 5.26617 15.7373 5.1866C15.9197 5.10704 16.063 4.95828 16.1357 4.77306C16.2084 4.58784 16.2046 4.38133 16.125 4.19895C15.8548 3.58135 15.4494 3.03234 14.9385 2.59247C14.4277 2.1526 13.8246 1.83312 13.1737 1.65762C12.5229 1.48212 11.8409 1.45509 11.1782 1.57853C10.5155 1.70196 9.88898 1.97271 9.34495 2.37077C8.80092 2.76882 8.35328 3.28402 8.03508 3.8783C7.71688 4.47258 7.53626 5.13076 7.50656 5.80421C7.47687 6.47766 7.59885 7.14918 7.86351 7.76916C8.12817 8.38914 8.52873 8.94174 9.03561 9.38614L6.04124 14.2499C6.02717 14.2499 6.01405 14.2499 5.99999 14.2499C5.60216 14.2499 5.22063 14.4079 4.93933 14.6892C4.65802 14.9705 4.49999 15.3521 4.49999 15.7499C4.49999 16.1477 4.65802 16.5292 4.93933 16.8105C5.22063 17.0918 5.60216 17.2499 5.99999 17.2499ZM18 11.2499C17.4217 11.2499 16.8489 11.361 16.3125 11.5771L13.32 6.71239C13.476 6.42343 13.5328 6.09128 13.4818 5.7669C13.4308 5.44253 13.2748 5.14384 13.0376 4.9167C12.8005 4.68955 12.4954 4.54648 12.1692 4.50945C11.8429 4.47242 11.5135 4.54348 11.2315 4.71171C10.9495 4.87995 10.7305 5.13606 10.6081 5.44076C10.4857 5.74546 10.4667 6.0819 10.5539 6.39846C10.6412 6.71502 10.8299 6.9942 11.0911 7.19316C11.3523 7.39213 11.6716 7.49988 12 7.49989H12.0412L15.3956 12.9514C15.5 13.1205 15.6673 13.2413 15.8606 13.2871C16.054 13.333 16.2576 13.3003 16.4269 13.1961C16.8217 12.9527 17.2677 12.8042 17.7296 12.7622C18.1916 12.7202 18.657 12.7859 19.0893 12.9542C19.5215 13.1224 19.9089 13.3886 20.2209 13.7318C20.533 14.0751 20.7612 14.486 20.8876 14.9323C21.014 15.3786 21.0352 15.8481 20.9495 16.304C20.8638 16.7599 20.6736 17.1897 20.3938 17.5597C20.114 17.9296 19.7521 18.2296 19.3368 18.4362C18.9214 18.6427 18.4639 18.7501 18 18.7499C17.8011 18.7499 17.6103 18.8289 17.4697 18.9696C17.329 19.1102 17.25 19.301 17.25 19.4999C17.25 19.6988 17.329 19.8896 17.4697 20.0302C17.6103 20.1709 17.8011 20.2499 18 20.2499C19.1935 20.2499 20.3381 19.7758 21.182 18.9319C22.0259 18.088 22.5 16.9434 22.5 15.7499C22.5 14.5564 22.0259 13.4118 21.182 12.5679C20.3381 11.724 19.1935 11.2499 18 11.2499Z"
          fill="black"
        />
      </svg>
    ),
    title: "API Documents",
    description: "Comprehensive API Docs for Seamless Integration",
  },
  {
    href: "/faqs",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8972 6.80525C15.2184 5.21615 14.0118 3.91017 12.4812 3.1081C10.9506 2.30604 9.19006 2.05709 7.49712 2.40335C5.80418 2.74961 4.28274 3.66984 3.19001 5.00845C2.09727 6.34707 1.5003 8.02195 1.5 9.74994V15.7499C1.5 16.1478 1.65804 16.5293 1.93934 16.8106C2.22064 17.0919 2.60218 17.2499 3 17.2499H8.12531C8.71058 18.5865 9.67231 19.7237 10.8931 20.5228C12.1139 21.3219 13.5409 21.7483 15 21.7499H21C21.3978 21.7499 21.7794 21.5919 22.0607 21.3106C22.342 21.0293 22.5 20.6478 22.5 20.2499V14.2499C22.4996 12.4164 21.8277 10.6466 20.6111 9.27485C19.3945 7.90313 17.7175 7.02458 15.8972 6.80525ZM3 9.74994C3 8.56325 3.35189 7.40321 4.01118 6.41652C4.67047 5.42982 5.60754 4.66079 6.7039 4.20666C7.80026 3.75254 9.00666 3.63372 10.1705 3.86523C11.3344 4.09674 12.4035 4.66818 13.2426 5.5073C14.0818 6.34641 14.6532 7.41551 14.8847 8.5794C15.1162 9.74328 14.9974 10.9497 14.5433 12.046C14.0892 13.1424 13.3201 14.0795 12.3334 14.7388C11.3467 15.398 10.1867 15.7499 9 15.7499H3V9.74994ZM21 20.2499H15C13.939 20.2487 12.8973 19.9668 11.9805 19.4329C11.0637 18.8989 10.3045 18.1319 9.78 17.2096C10.8072 17.103 11.8013 16.7852 12.6999 16.2762C13.5985 15.7672 14.3822 15.0779 15.0018 14.2517C15.6213 13.4254 16.0634 12.48 16.3003 11.4748C16.5371 10.4695 16.5636 9.4262 16.3781 8.41025C17.6937 8.72072 18.8659 9.46632 19.7048 10.5262C20.5436 11.5861 21 12.8982 21 14.2499V20.2499Z"
          fill="#101212"
        />
      </svg>
    ),
    title: "FAQs",
    description: "Your Questions, Answered",
  },
];

const Navbar = () => {
  const {
    isOpen: isDropdownOpen,
    toggleDropdown,
    ref: dropdownRef,
  } = useDropdown();
  const {
    isOpen: isDownloadDropdownOpen,
    toggleDropdown: toggleDownloadDropdown,
    ref: dropdownDownloadRef,
  } = useDropdown();
  const {
    isOpen: isCompanyDropdownOpen,
    toggleDropdown: toggleCompanyDropdown,
    ref: dropdownCompanyRef,
  } = useDropdown();
  const {
    isOpen: isResourcesDropdownOpen,
    toggleDropdown: toggleResourcesDropdown,
    ref: dropdownResourcesRef,
  } = useDropdown();
  const {
    isOpen: isNavOpen,
    toggleDropdown: toggleNavDropdown,
    ref: dropdownNavRef,
  } = useDropdown();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [openList, setOpenList] = useState(null);

  const toggleList = (listName: any) => {
    if (openList === listName) {
      setOpenList(null);
    } else {
      setOpenList(listName);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > 50) {
        setIsScrolled(true);
      } else if (currentScroll < lastScrollTop) {
        setIsScrolled(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`navbar bg-white ${
        isScrolled ? "shadow-md transition-all" : ""
      } fixed w-full px-[20px] sm:px-[40px] lg:px-[60px] 2xl:px-[100px] z-50`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
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
              className="flex gap-2 items-center py-2 px-4 rounded-lg cursor-pointer"
              onClick={toggleDropdown}
            >
              Products{" "}
              {isDropdownOpen ? (
                <ChevronDown className="rotate-180 ease-in-out duration-300" />
              ) : (
                <ChevronDown className="ease-in-out duration-300" />
              )}
            </div>
            {isDropdownOpen && (
              <div className="w-max absolute top-[65px] left-0 z-10">
                <div className="bg-[#fff] rounded-xl shadow-2xl">
                  <h3 className="pl-5 pt-5 text-[20px] font-bold">Features</h3>
                  <ul className="p-3 grid grid-cols-2 gap-3 rounded-[18px]">
                    {ProductsItems.map(
                      ({ href, icon, title, description }, index) => (
                        <li
                          key={index}
                          onClick={toggleDropdown}
                          className="pl-6 pr-[32px] p-2 hover:bg-[#F1FAFF] rounded-md"
                        >
                          <Link
                            key={index}
                            href={href}
                            className="flex items-center gap-4"
                          >
                            {icon}
                            <div>
                              <p className="text-[18px] font-semibold">
                                {title}
                              </p>
                              <p className="text-[14px] text-[#424646]">
                                {description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownCompanyRef}>
            <div
              className="flex gap-2 items-center py-2 px-4 rounded-lg cursor-pointer"
              onClick={toggleCompanyDropdown}
            >
              Company{" "}
              {isCompanyDropdownOpen ? (
                <ChevronDown className="rotate-180 ease-in-out duration-300" />
              ) : (
                <ChevronDown className="ease-in-out duration-300" />
              )}
            </div>
            {isCompanyDropdownOpen && (
              <div className="w-max absolute top-[65px] left-0 z-10">
                <div className="bg-[#fff] rounded-xl shadow-2xl">
                  <h3 className="pl-5 pt-5 text-[20px] font-bold">
                    About Waverlite
                  </h3>
                  <ul className="p-3 grid gap-3 rounded-[18px]">
                    {CompanyItems.map(
                      ({ href, icon, title, description }, index) => (
                        <li
                          key={index}
                          onClick={toggleCompanyDropdown}
                          className="pl-6 pr-[88px] p-2 hover:bg-[#F1FAFF] rounded-md"
                        >
                          <Link
                            key={index}
                            href={href}
                            className="flex items-center gap-4"
                          >
                            {icon}
                            <div>
                              <p className="text-[20px] font-semibold">
                                {title}
                              </p>
                              <p className="text-[14px]">{description}</p>
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownResourcesRef}>
            <div
              className="flex gap-2 items-center py-2 px-4 rounded-lg cursor-pointer"
              onClick={toggleResourcesDropdown}
            >
              Resources{" "}
              {isResourcesDropdownOpen ? (
                <ChevronDown className="rotate-180 ease-in-out duration-300" />
              ) : (
                <ChevronDown className="ease-in-out duration-300" />
              )}
            </div>
            {isResourcesDropdownOpen && (
              <div className="w-max absolute top-[65px] left-0 z-10">
                <div className="bg-[#fff] rounded-xl shadow-2xl">
                  <h3 className="pl-5 pt-5 text-[20px] font-bold">Resources</h3>
                  <ul className="p-3 grid gap-3 rounded-[18px]">
                    {ResourcesItems.map(
                      ({ href, icon, title, description }, index) => (
                        <li
                          key={index}
                          onClick={toggleResourcesDropdown}
                          className="pl-6 pr-[88px] p-2 hover:bg-[#F1FAFF] rounded-md"
                        >
                          <Link
                            key={index}
                            href={href}
                            className="flex items-center gap-4"
                          >
                            {icon}
                            <div>
                              <p className="text-[20px] font-semibold">
                                {title}
                              </p>
                              <p className="text-[14px]">{description}</p>
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-2 py-2 pl-4">
          <div className="relative" ref={dropdownDownloadRef}>
            <button
              className="flex items-center gap-2.5 py-[17px] px-[30px] bg-[#101212] text-[#E9EAEA] rounded-[10px]"
              onClick={toggleDownloadDropdown}
            >
              Download app{" "}
              {isDownloadDropdownOpen ? (
                <Image
                  className="rotate-180 ease-in-out duration-300"
                  src={ThickArrow}
                  alt={""}
                />
              ) : (
                <Image
                  className="ease-in-out duration-300"
                  src={ThickArrow}
                  alt={""}
                />
              )}
            </button>
            {isDownloadDropdownOpen && (
              <div className="w-max absolute top-[75px] right-0 z-10">
                <div className="bg-[#fff] rounded-[6px] shadow-2xl p-4">
                  <div className="flex justify-center items-center mb-4">
                    <Image
                      unoptimized
                      src={QrCode}
                      alt="Qr Code"
                      className="size-[146px]"
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="w-full max-w-[200px] text-center">
                    Use your phone to scan this QR code and download our app!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="flex lg:hidden cursor-pointer"
          onClick={toggleNavDropdown}
        >
          {isNavOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <AlignJustify className="w-8 h-8" />
          )}
        </div>
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-[20px] sm:px-[40px] lg:px-[60px] 2xl:px-[100px] flex flex-col gap-4 lg:hidden absolute top-[70px] left-0 w-full bg-white text-black"
            >
              <div
                className="flex mt-4 justify-between items-center cursor-pointer"
                onClick={() => toggleList("products")}
              >
                <div className="font-semibold">Products</div>
                {openList === "products" ? (
                  <ChevronDown className="rotate-180 ease-in-out duration-300" />
                ) : (
                  <ChevronDown className="ease-in-out duration-300" />
                )}
              </div>
              {openList === "products" && (
                <ul className="flex flex-col gap-1 ml-4">
                  {ProductsList.map((item, index) => (
                    <li className="flex flex-col leading-[32px]" key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          toggleNavDropdown();
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div
                className="flex mt-4 justify-between items-center cursor-pointer"
                onClick={() => toggleList("company")}
              >
                <div className="font-semibold">Company</div>
                {openList === "company" ? (
                  <ChevronDown className="rotate-180 ease-in-out duration-300" />
                ) : (
                  <ChevronDown className="ease-in-out duration-300" />
                )}
              </div>
              {openList === "company" && (
                <ul className="flex flex-col gap-1 ml-4">
                  {CompanyList.map((item, index) => (
                    <li className="flex flex-col leading-[32px]" key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          toggleNavDropdown();
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div
                className="flex mt-4 justify-between items-center cursor-pointer"
                onClick={() => toggleList("developer")}
              >
                <div className="font-semibold">Developers</div>
                {openList === "developer" ? (
                  <ChevronDown className="rotate-180 ease-in-out duration-300" />
                ) : (
                  <ChevronDown className="ease-in-out duration-300" />
                )}
              </div>
              {openList === "developer" && (
                <ul className="flex flex-col gap-1 ml-4">
                  {DeveloperList.map((item, index) => (
                    <li className="flex flex-col leading-[32px]" key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          toggleNavDropdown();
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div
                className="flex mt-4 justify-between items-center cursor-pointer"
                onClick={() => toggleList("legal")}
              >
                <div className="font-semibold">Legal</div>
                {openList === "legal" ? (
                  <ChevronDown className="rotate-180 ease-in-out duration-300" />
                ) : (
                  <ChevronDown className="ease-in-out duration-300" />
                )}
              </div>
              {openList === "legal" && (
                <ul className="flex flex-col gap-1 ml-4">
                  {LegalList.map((item, index) => (
                    <li className="flex flex-col leading-[32px]" key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          toggleNavDropdown();
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <div className="w-full flex justify-center items-center my-4">
                <Link
                  href={"https://app.waverlite.com/create-account"}
                  target="_blank"
                  className="py-3 px-8 bg-[#101212] text-[#E9EAEA] rounded-[10px]"
                >
                  Get started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
