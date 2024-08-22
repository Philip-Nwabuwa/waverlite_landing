"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";

const Faqpage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openIndex === index) return;

    setOpenIndex(index);
  };
  const GeneralFaqItems = [
    {
      title: "What is Waverlite?",
      content:
        "Waverlite is a fast and secure platform for sending and receiving money, perfect for immigrants, students, freelancers, and businesses.",
    },
    {
      title: "How does Waverlite work?",
      content:
        "Waverlite is a fast and secure platform for sending and receiving money, perfect for immigrants, students, freelancers, and businesses.",
    },
    {
      title: "How do I create a Waverlite account?",
      content:
        "Waverlite is a fast and secure platform for sending and receiving money, perfect for immigrants, students, freelancers, and businesses.",
    },
  ];
  return (
    <div>
      {GeneralFaqItems.map((item, index) => (
        <div
          key={index}
          className={`w-[85%] flex flex-col gap-4 ${
            index === GeneralFaqItems.length - 1
              ? ""
              : "border-b border-solid border-[#BCBDBD]"
          }`}
        >
          <div
            className={`flex flex-col gap-2 p-6 cursor-pointer`}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex gap-8">
              <div
                className={`transform w-fit h-[16px] transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <Image
                  src={openIndex === index ? Minus : Plus}
                  alt={openIndex === index ? "minus" : "plus"}
                  className="w-fit"
                />
              </div>
              <h3 className="font-bold text-xl">{item.title}</h3>
            </div>
            <div>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-text text-sm pl-[52px]">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqpage;
