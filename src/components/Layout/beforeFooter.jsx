import Image from "next/image";

import { raleway } from "@/config/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";


function BeforeFooter() {
  const path = usePathname();
  if (path === '/landing-page') {
    return null;
  }
  return (
    <section className="h-[550px] overflow-hidden relative footer-after z-[0] image-bg">
      {/* <Image
        src={BG}
        width={0}
        height={0}
        placeholder="blur"
        alt="ohio roofing - image"
        className="absolute -top-[100%] left-0 -z-[1]"
      /> */}
      <div className="max-w-[915px]  mx-auto text-white z-[1] relative flex flex-col justify-center items-center h-full gap-6 max-sm:p-6">
        <h2
          className={`max-md:text-[40px] text-[55px] text-center font-extrabold ${raleway.className} leading-[1.3]`}
        >
          Don’t Put Off Roof Repairs <br /> with Ohio Economic Roofing
        </h2>
        <Link href={"/contact-us"}>
          <button className="bg-[#E6F3FF] text-primary py-3 px-5 rounded-[12px] font-semibold uppercase text-[18px]">
          Schedule Inspection
          </button>
        </Link>
      </div>
      
    </section>
  );
}

export default BeforeFooter;

