import Image from "next/image";

import { useEffect, useState } from "react";
import Hero from "@/images/hero-bg.webp";
import Rating from "@/images/icons/rating.png";
import { raleway } from "@/config/fonts";
import Link from "next/link";
import HeroForm from "@/utils/HeroForm";

function Section1() {
  const [intersecting, setIntersecting] = useState(false);
  const [pIntersecting, setPIntersecting] = useState(false);
  useEffect(() => {
    const Sec1 = document.getElementById("sec1");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          setTimeout(() => {
            setPIntersecting(true);
          }, 300);
        } else {
          setIntersecting(false);
          setPIntersecting(false);
        }
      });
    });
    observer.observe(Sec1);

    return () => {
      observer.disconnect();
    };
  });
  return (
    <section className="py-20 md:pt-[150px] md:pb-[130px] relative z-[0] hero-after bg-hero-image md:min-h-[85vh] min-h-[100vh]">
      <div id="sec1" className="container mx-auto flex flex-wrap lg:flex-nowrap h-full justify-center items-center">
        {/* <Image
          src={Hero}
          alt="ohio roofing - hero image"
          placeholder="blur"
          loading="eager"
          priority
          className="w-full h-full absolute left-0 top-0 -z-[1] object-cover"
        /> */}
        <div className="w-full  flex flex-col justify-center items-center z-[1]  text-white text-center lg:text-left  mt-20">
          <h1
            className={`text-[40px] font-extrabold transition-all duration-1000 leading-[1.1] ${raleway.className}  ${
              intersecting
                ? "translate-y-0 opacity-100"
                : "translate-y-32 opacity-0"
            }`}
          >
            Secure Your Home with Southern <br />{" "}
            <span className="text-[48px]">
              {" "}
              Ohio&apos;s Premier Roofing Experts
            </span>
          </h1>
          <p className={`text-[18px] my-4  transition-all duration-1000  ${
            pIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}>
            Providing expert roofing installations and repairs across Southern
            Ohio. With our skilled team, expect quality workmanship on every
            project.
          </p>
          <div className={` md:flex my-8 text-black gap-4 transition-all duration-[1500ms]  ${
            pIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}>
            <Link
              href={"/services/roof-replacement"}
              className="md:px-5 px-3 py-2 font-semibold md:text-[18px] text-[13px] md:mx-0 mx-1 bg-[#B2DDFF] rounded-[10px]"
            >
              Roof Replacement
            </Link>
            <Link
              href={"/services/roof-repair"}
              className="md:px-5 px-3 py-2 font-semibold md:text-[18px] text-[13px] md:mx-0 mx-1 bg-[#C7D7FE] rounded-[10px]"
            >
              Roof Repair
            </Link>
            <Link
              href={"/services"}
              className="md:px-5 px-3 py-2 font-semibold md:text-[18px] text-[13px] md:mx-0 mx-1 bg-[#D5D9EB] rounded-[10px]"
            >
              Learn More
            </Link>
          </div>
          <div className={` flex flex-col justify-center items-center mt-8 gap-3 transition-all duration-[1500ms] ${
            pIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}>
            <div className="flex items-center flex-row">
            <p className="  text-[18px] font-normal">
            Rating:
            </p>
            <Image
            className="ml-2"
              src={Rating}
              width={130}
              height={20}
              alt="ohio roofing - icon"
            />
            </div>
            <p className="text-[18px] font-normal">
              Trusted by many home owners
            </p>
            <div className={` md:flex mt-8 text-black gap-4 transition-all duration-[1500ms]  ${
            pIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}>
            
            {/* <Link
              href={""}
              className="px-5 py-2 font-semibold text-[18px] bg-[#5585ff] rounded-[10px]"
            >
              Get Started
            </Link> */}
          
          </div>
          </div>
        </div>
        {/* <HeroForm /> */}
      </div>
    </section>
  );
}

export default Section1;
