import { raleway } from "@/config/fonts";
import Link from "next/link";

const Cards = [
  {
    title: "Get A Free Inspection With Photos",
    desc: "Our Roofing Specialist are experts at evaluating your entire home, inside and out. If you’re home qualifies for repairs covered under insurance due to a storm, we’ll let you know!",
  },
  {
    title: "Get The Job Done Right, Including Excellent Cleanup",
    desc: "Just like we learned in boy scouts, “leave no trace!” We do the same with your yard. No garbage, shingles or nails will be left for you to discover later.",
  },
  {
    title: `Relax! Cross “Fix Roof” off your List`,
    desc: "Rest easy knowing that your roof will protect everything inside and in the rare case something does need fixing, you’re covered under our warranty and maintenance plan.    ",
  },
];

function Section4() {
  return (
    <section className="py-[90px] bg-[#F2F9FF]">
      <div className="container mx-auto">
        <h2
          className={`text-[45px] font-extrabold text-black text-center capitalize ${raleway.className}`}
        >
         It’s As Easy As 1-2-3 To Work With Us!
        </h2>
        <div className="flex flex-wrap gap-8 mt-8">
          {Cards.map((card, idx) => {
            return (
              <div
                className="p-[25px] bg-white min-w-[298px] flex flex-col flex-1 rounded-[15px]"
                key={idx}
              >
                <span className="text-[30px] font-extrabold text-primary">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-[24px] my-5 capitalize">{card.title}</h3>
                <p className="text-[18px]">{card.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href={`/contact-us`}>
            <button className="bg-primary border-primary border hover:bg-white hover:text-primary transition-all duration-300 text-white px-5 py-4 rounded-[12px] font-semibold uppercase text-[18px] uppercase">
            Schedule Inspection
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section4;
