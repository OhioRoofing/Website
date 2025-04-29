import Image from "next/image";

import List from "@/images/list.png";

const Reasons = [
  "Thousands of Dollars Saved",
  "Insurance Claims Assistance",
  "Great Communication",
  "A+ rating with the BBB",
  "Consistently Rated as 5 Star Roofing Company",
  "Serving Southern Ohio since 2008",
];

function Section5() {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto lg:border p-6 gap-8 flex flex-col lg:flex-row  rounded-[15px]">
        <div className="lg:w-[60%] w-full relative">
          <Image
            src={List}
            width={0}
            height={0}
            alt="ohio roofing - lists"
            placeholder="blur"
            className="h-full w-full"
          />
        </div>
        <div className="lg:w-[40%] w-full flex flex-col">
          <h2 className="text-[30px] font-extrabold text-black">
            Reasons Homeowners Love Ohio Economic Roofing
          </h2>
          <p className="text-[18px] text-black my-4">
            We&apos;ve asked our customers what is it that sets up apart from
            other roofing companies and this is what they said:
          </p>
          <div className="my-auto flex flex-col">
            {Reasons.map((reason, idx) => {
              return (
                <div
                  className={`px-3 py-2 flex items-center bg-[#ccddff]/40 rounded-[9px] max-sm:w-full w-max gap-4 ${
                    idx === Reasons.length - 1 ? "" : "mb-4"
                  }`}
                  key={idx}
                >
                  <div className="w-[26px] h-[26px] bg-[#CCDDFF] rounded-full flex justify-center items-center ">
                    <div className="w-[16px] h-[16px] rounded-full bg-primary"></div>
                  </div>
                  <p className="text-[20px] font-extrabold capitalize ">
                    {reason}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
