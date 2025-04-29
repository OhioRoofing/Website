import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import SEO from "@/common/SEO";
import { Services } from "@/config/services";
import HeroForm from "@/utils/HeroForm";

function ServicePost({
  title = "",
  desc = [],
  img,
  pageTitle = "",
  pageDesc = "",
  slug = "",
}) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const serviceSlug = document.getElementById("serviceSlug");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      });
    });
    observer.observe(serviceSlug);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <SEO title={title} desc={desc[0]} route={slug} />
      <section className="py-[100px] text-white bg-black relative z-[0] hero-after">
        <div className="container mx-auto flex flex-col h-full justify-center items-center">
          <Image
            src={img}
            alt="ohio roofing - hero image"
            placeholder="blur"
            loading="eager"
            priority
            className="w-full h-full absolute left-0 top-0 -z-[1] object-cover"
          />
          <div className=" flex flex-col justify-center items-center z-[1]  text-white text-center mt-20">
            <h1 className={`text-[40px] font-extrabold `}>{pageTitle}</h1>
            <p className="w-3/4">{pageDesc}</p>
          </div>
         
        </div>
      </section>
      <section>
        <div className="container mx-auto pt-16">
          <div
            className="flex flex-col md:flex-row  gap-8 p-8 overflow-hidden"
            id="serviceSlug"
          >
            <div
              className={`flex-1  flex items-center justify-center transition-all duration-1000 ${
                intersecting
                  ? "translate-x-0 opacity-1"
                  : "-translate-x-[110%] opacity-0"
              } `}
            >
              <Image
                src={img}
                alt={title}
                width={0}
                height={0}
                className="rounded-[15px] object-cover w-full md:h-[550px]"
                placeholder="blur"
              />
            </div>
            <div
              className={`flex-1 flex flex-col items-start transition-all duration-1000   ${
                intersecting
                  ? "translate-x-0 opacity-1"
                  : "translate-x-[110%] opacity-0"
              }`}
            >
              <h2 className="text-[30px] font-extrabold text-black">{title}</h2>
              {desc.map((each, idx) => {
                return (
                  <div
                    dangerouslySetInnerHTML={{ __html: each }}
                    key={idx}
                    className="mb-3 text-[18px]"
                  />
                );
              })}
              <Link
                href="/contact-us"
                className="py-4 px-5 text-white bg-primary rounded-[12px] uppercase font-semibold"
              >
                Call for help with roof Replacement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServicePost;

export function getServerSideProps({ query }) {
  const servicePost = Services.find((each) => {
    if (`${each.slug}` == "/" + query.slug) {
      return each;
    }
  });
  return {
    props: {
      title: servicePost?.title,
      desc: servicePost?.desc,
      img: servicePost?.img,
      slug: servicePost?.slug,
      pageDesc: servicePost.pageDesc,
      pageTitle: servicePost?.pageTitle,
    },
  };
}
