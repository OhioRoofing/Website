import CardPopUp from "@/components/sub/cardPopUp";
import { KPData } from "@/config/KP";
import { raleway } from "@/config/fonts";
import Image from "next/image";
import { useState } from "react";

function Section2() {
  const [showModel, setShowModel] = useState(false);
  const [selectedKP, setSelectedKP] = useState(null);

  const openPopup = (kp) => {
    setSelectedKP(kp);
    setShowModel(true);
  };

  const handleClosePopup = () => {
    setShowModel(false);
  };

  return (
    <>
      <section>
        <div className="container mx-auto -mt-28 relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {KPData.map((each, idx) => {
              return (
                <div
                  className="p-[20px] border rounded-[21px] flex flex-col items-start bg-white"
                  key={idx}
                >
                  <Image
                    src={each.img}
                    width={0}
                    height={0}
                    alt={`ohio roofing - ${each.title}`}
                    placeholder="blur"
                    className="mb-4 w-full h-[260px] rounded-[14px]"
                  />
                  <h4
                    className={`text-[24px] font-extrabold text-black ${raleway.className}`}
                  >
                    {each.title}
                  </h4>
                  <p
                    className="my-4 text-[18px] h-full line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: each.desc }}
                  ></p>
                  <button
                    onClick={() => openPopup(each)}
                    className="border-0 bg-transparent text-[18px] font-semibold text-primary"
                  >
                    Learn More <span className="ml-3"> &gt;</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {showModel && (
        <CardPopUp
          isVisible={showModel}
          data={selectedKP}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}

export default Section2;
