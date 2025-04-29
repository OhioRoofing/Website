import Image from "next/image";

import Hero from "@/images/hero-bg.webp";
import HeroForm from "@/utils/HeroForm";

function Section1() {
  return (
    <section className="py-[150px] text-white bg-black relative z-[0] hero-after">
      <div className="container mx-auto flex flex-col h-full justify-center items-center">
        <Image
          src={Hero}
          alt="ohio roofing - hero image"
          placeholder="blur"
          loading="eager"
          priority
          className="w-full h-full absolute left-0 top-0 -z-[1] object-cover"
        />
        <div className=" flex flex-col justify-center items-center z-[1] max-w-[740px] text-white text-center mt-20">
          <h1 className={`text-[40px] font-extrabold `}>
            Roofing Services in Southern Ohio
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Section1;
