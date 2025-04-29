import { raleway } from "@/config/fonts";
import Link from "next/link";

function Section6() {
  return (
    <section className="mt-8 max-sm:p-6">
      <div className="container mx-auto flex flex-col justify-center items-center bg-primary text-white py-[90px] rounded-[15px] gap-8">
        <h2
          className={`text-[30px] font-extrabold text-center leading-[1.1] ${raleway.className}`}
        >
          Do you really need a <br />{" "}
          <span className="text-[45px] uppercase"> new roof?</span>
        </h2>
        <p className="text-center w-3/4 text-[18px]">
          So is it time for a new roof? We hear this question often from
          concerned homeowners just like you. That&apos;s why we&apos;ve put
          together this guide for you to do your own walkthrough to see if
          you&apos;re ready for a new roof or not.
        </p>
        <Link href={`/knowledge-portal`}>
          <button className="bg-white hover:bg-primary hover:border-white border border-primary hover:text-white text-primary py-4 px-5 font-semibold rounded-[12px] text-[18px] transition-all duration-300">
            View Knowledge Portal
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Section6;
