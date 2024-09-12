import Image from "next/image";

import PlayIcon from "@/assets/icons/PlayCircle.svg";
import PlayIconDark from "@/assets/icons/PlayCircle.png";
import Link from "next/link";
const Modal = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div>
      <Link
        href={
          "https://www.youtube.com/watch?v=4aPBhAQ7TGU&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=Mjg2NjY"
        }
        className="flex items-center gap-1.5 py-4 px-[30px] text-[14px] lg:text-[16px] lg:text-[#fff] border border-solid lg:border-white border-black rounded-[8px] font-bold"
        target="_blank"
      >
        <Image src={PlayIcon} alt={""} className="hidden lg:flex" />{" "}
        <Image src={PlayIconDark} alt={""} className="flex lg:hidden" />
        Watch demo
      </Link>

      {/* {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              <X className="text-white" />
            </button>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Modal;
