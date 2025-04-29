import { Services } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

function Section2() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2
          className={`text-[45px] font-extrabold text-black mb-4 text-center `}
        >
          Our Services
        </h2>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-8">
          {Services.map((service, idx) => {
            return (
              <Link href={`/services${service.slug}`} key={idx}>
                <div className="p-[20px] border rounded-2xl">
                  <Image
                    src={service.img}
                    width={0}
                    height={0}
                    className="w-full h-[320px] object-cover rounded-[8px]"
                    placeholder="blur"
                    alt="ohio roofing - services"
                  />
                  <h3 className="text-[24px] font-extrabold text-black my-4">
                    {service.title}
                  </h3>
                  <p className="text-[18px] line-clamp-6">{service.cardDesc}</p>

                  <button className="text-primary font-extrabold mt-4">
                    Learn More{" "}
                    <span className="text-slate-600 ml-2"> &gt;</span>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Section2;
