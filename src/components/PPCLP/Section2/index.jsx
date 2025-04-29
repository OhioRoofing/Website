import { raleway } from "@/config/fonts";
import { useEffect, useState } from "react";

function Section2() {
  const [intersecting, setIntersecting] = useState(false);
  const [pIntersecting, setPIntersecting] = useState(false);
  useEffect(() => {
    const Sec2 = document.getElementById("sec2");

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
    observer.observe(Sec2);

    return () => {
      observer.disconnect();
    };
  });
  return (
    <section className="py-[110px]" id="About">
      <div id="sec2" className={` mx-auto max-w-[1000px] max-sm:p-6`}>
        <h2
          className={`text-[45px] text-black transition-all duration-1000 font-extrabold mb-8 text-center leading-[1.1] ${
            raleway.className
          } ${
            intersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}
        >
          <span className="text-[30px]">Enhancing Your Home&apos;s Value </span>{" "}
          <br /> Through Expert Roofing Solutions
        </h2>
        <p
          className={`text-center text-[18px] transition-all duration-[1500ms] ${
            pIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
          }`}
        >
          Are you looking for fast and affordable roof replacement and repair to
          invest in your home in the Southern Ohio area? If so, Ohio Economic
          Roofing has you covered
          <br />
          <br />
          Hiring a professional roofer like Ohio Economic Roofing can
          significantly improve the value of your home. A well-maintained roof
          not only enhances the aesthetic appeal of your home. It also
          contributes to its structural integrity and aesthetics.{" "}
          <b>
            {" "}
            Prospective home buyers value a home with a well-maintained roof
            more than those with older roofs because it indicates a lesser
            likelihood of encountering problems down the road.
          </b>{" "}
          Additionally, keeping up on your roof and hiring a professional roofer
          like Ohio Economic Roofing also offers expertise and quality
          workmanship, ensuring a robust and durable roof that can withstand all
          of Ohio&apos;s extreme weather conditions. In a nutshell, a solid,
          professionally done roof by a company like us boosts your home&apos;s
          market value. Give us a call and set up an appointment with one of our
          consultants today!
        </p>
      </div>
    </section>
  );
}
export default Section2;
