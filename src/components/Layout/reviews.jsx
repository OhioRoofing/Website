import Image from "next/image";

import Stars from "@/images/stars.png";
import { Urbanist } from "next/font/google";
import { raleway } from "@/config/fonts";
import { usePathname } from "next/navigation";

const Reviews = [
  {
    initial: "M",
    name: "Matthew Stinson",
    desc: "Ohio Economic Roofing recently completed a full replacement of my roof. They managed my claim with my insurance company and I’m grateful for it because the insurance company kept denying my claim when there was clearly hail and wind damage. Ohio Economic Roofing was able to get my insurance company to commit to the cost of a full roof replacement. In addition, Ohio Economic Roofing’s price was fair and comparable to the going market rate. I’m very satisfied with the quality and would recommend them to anyone needing claim support and/or a roof replacement.",
  },
  {
    initial: "C",
    name: "Linda Foster",
    desc: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value Work done in a timely fashion, contractors were professional and polite. Would use and highly recommend. Services: Roof repair for storm & wind damage, Roof inspection, Roof repair, Roof installation",
  },
];

function GoogleReviews() {
  const path = usePathname();
  if (path === '/landing-page') {
    return null;
  }
  return (
    <section className="py-[100px]">
      <div className="max-w-[1000px] mx-auto max-sm:p-6">
        <h2
          className={`text-[45px] font-extrabold mb-8 text-center ${raleway.className}`}
        >
          Ohio Economic Roofing Customer Reviews
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          {Reviews.map((review, i) => {
            return (
              <div className="bg-[#f8f8f8] border rounded-[14px] p-8" key={i}>
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-[40px] h-[40px] bg-primary rounded-full text-white flex justify-center items-center text-[18px] font-bold">
                    {review.initial}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[25px] font-bold">{review.name}</p>
                  </div>
                </div>
                <Image
                  src={Stars}
                  width={120}
                  height={20}
                  alt="ohio roofing - icons"
                  className="mb-4"
                />

                <p className="line-clamp-4 text-[18px]">{review.desc}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GoogleReviews;
