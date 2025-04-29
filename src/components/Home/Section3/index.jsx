import Image from "next/image";

import { raleway } from "@/config/fonts";
import { Services } from "@/config/services";
import Link from "next/link";

function Section3() {
  return (
    <section className="pb-16">
      <div className="container mx-auto">
        <h2
          className={`text-[45px] font-extrabold text-black mb-4 text-center ${raleway.className}`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Services.map((service, idx) => {
            return (
              <div className="p-[20px] border rounded-2xl" key={idx}>
                <Link href={`/services${service.slug}`}>
                  <Image
                    src={service.img}
                    width={0}
                    height={0}
                    className="w-full h-[320px] object-cover rounded-[8px]"
                    placeholder="blur"
                    alt="ohio roofing - services"
                  />
                  <h3 className="text-[28px] font-extrabold text-black my-4">
                    {service.title}
                  </h3>
                  <p className="text-[18px] line-clamp-6">{service.cardDesc}</p>

                  <button className="text-primary font-extrabold mt-4 text-[18px]">
                    Learn More{" "}
                    <span className="text-slate-600 ml-2"> &gt;</span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
    
  
    
  );
}
export default Section3;
