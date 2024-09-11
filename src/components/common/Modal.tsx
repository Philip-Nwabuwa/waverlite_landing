"use client";

import { useState } from "react";
import Image from "next/image";

import { X } from "lucide-react";
import PlayIcon from "@/assets/icons/PlayCircle.svg";
import PlayIconDark from "@/assets/icons/PlayCircle.png";

type Props = {
  videoId: string;
};

const Modal = ({ videoId }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="flex items-center gap-1.5 py-2 px-4 lg:text-[#fff] border border-solid lg:border-white border-black rounded-[8px] font-semibold"
      >
        <Image src={PlayIcon} alt={""} className="hidden lg:flex" />{" "}
        <Image src={PlayIconDark} alt={""} className="flex lg:hidden" />
        Watch Demo
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              <X className="text-white" />
            </button>
            <div className="video-container">
              <iframe
                width="1200"
                height="700"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
