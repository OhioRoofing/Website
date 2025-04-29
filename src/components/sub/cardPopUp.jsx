import { useEffect, useRef } from "react";
import Image from "next/image";
import { raleway } from "@/config/fonts";

function CardPopUp({ isVisible, data, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className=" z-10 fixed inset-0 bg-black/[0.8]  bg-opacity-25 backdrop-blur-sm flex justify-center items-center pb-4">
      <div
        ref={popupRef}
        className="relative bg-white md:w-2/3 h-2/3 p-10 rounded-lg  mx-5 "
      >
        <div onClick={() => onClose()} className="z-20 absolute -top-7 left-1/2  p-3 rounded-full flex justify-center items-center bg-black mb-5">
          <button >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28002 4.54L15 12.26L22.68 4.58C22.8497 4.39943 23.054 4.25499 23.2808 4.15532C23.5077 4.05566 23.7523 4.00283 24 4C24.5305 4 25.0392 4.21071 25.4142 4.58579C25.7893 4.96086 26 5.46957 26 6C26.0047 6.2452 25.9592 6.48877 25.8663 6.71576C25.7735 6.94275 25.6352 7.14837 25.46 7.32L17.68 15L25.46 22.78C25.7897 23.1025 25.9829 23.5392 26 24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0392 25.7893 24.5305 26 24 26C23.7451 26.0106 23.4908 25.968 23.2533 25.8751C23.0157 25.7821 22.8 25.6408 22.62 25.46L15 17.74L7.30002 25.44C7.13103 25.6145 6.92915 25.7539 6.70602 25.85C6.4829 25.9461 6.24295 25.9971 6.00002 26C5.46959 26 4.96088 25.7893 4.58581 25.4142C4.21073 25.0391 4.00002 24.5304 4.00002 24C3.99536 23.7548 4.04085 23.5112 4.13371 23.2842C4.22657 23.0572 4.36483 22.8516 4.54002 22.68L12.32 15L4.54002 7.22C4.21039 6.89752 4.0171 6.46082 4.00002 6C4.00002 5.46957 4.21073 4.96086 4.58581 4.58579C4.96088 4.21071 5.46959 4 6.00002 4C6.48002 4.006 6.94002 4.2 7.28002 4.54Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="h-full overflow-y-scroll px-2">
          <Image
            src={data.img}
            width={0}
            height={0}
            alt={`ohio roofing - ${data.title}`}
            placeholder="blur"
            className="md:mb-4 md:float-right md:ml-10 md:w-1/2 rounded-[14px] "
          />
          <h4
            className={`text-[24px]  font-extrabold text-black ${raleway.className}`}
          >
            {data.title}
          </h4>
          <p
            className="py-4 text-[18px] h-full "
            dangerouslySetInnerHTML={{ __html: data.desc }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default CardPopUp;
