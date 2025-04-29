import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Logo from "@/images/logo.png";
import Nav from "@/images/icons/nav.png";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const scroller = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scroller);

    return () => window.removeEventListener("scroll", scroller);
  }, [scroll]);
  return (
    <header className={`fixed w-full top-0 z-[4] `}>
      <nav
        className={`flex-col hidden lg:flex ${
          scroll
            ? "bg-white  text-black  custom-shadow"
            : router.pathname.includes("/contact-us")
            ? "bg-white text-black border-b-2"
            : "bg-transparent text-white"
        }  transition-all duration-300 `}
      >
        <div
          className={` justify-between items-center hidden lg:flex container mx-auto text-[18px] font-semibold py-3 `}
        >
          <Link href={`/`} aria-label="home">
            <Image
              src={Logo}
              width={scroll ? 80 : 120}
              height={scroll ? 80 : 120}
              alt="ohio roofing - logo"
              placeholder="blur"
              loading="eager"
              className="transition-all duration-300"
              priority
            />
          </Link>
          <div className="flex items-center gap-4  uppercase ">
            <Link
              href={`/`}
              className="hover:border-b-2 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href={`/#About`}
              className="hover:border-b-2 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href={`/services`}
              className="hover:border-b-2 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              href={`/knowledge-portal`}
              className="hover:border-b-2 transition duration-300 ease-in-out"
            >
              Knowledge Portal
            </Link>
            <Link
              href={`/contact-us`}
              className="hover:border-b-2 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
          <div className="text-primary text-[18px] font-bold bg-white px-2 py-1 rounded-md">
            <a href="tel:(937) 619-9523" className="hover:underline">
              (937) 619-9523
            </a>
          </div>
          <Link href={`/contact-us`}>
            <button
              className={`${
                scroll
                  ? "bg-white hover:bg-primary hover:text-white  text-primary"
                  : "bg-primary text-white hover:bg-white hover:text-primary"
              } px-5 py-2 rounded-[10px] border-primary border uppercase transition-all duration-300`}
            >
              Schedule Inspection
            </button>
          </Link>
        </div>
      </nav>
      {/* mobile nav */}
      <nav
        className={`flex lg:hidden ${
          router.pathname.includes("/contact-us") ? "border-b" : ""
        } bg-white relative`}
      >
        <div
          className={` justify-between items-center flex container mx-auto text-[18px] font-semibold py-3 `}
        >
          <Link href={`/`} aria-label="home">
            <Image
              src={Logo}
              width={80}
              height={80}
              alt="ohio roofing - logo"
              placeholder="blur"
              className="transition-all duration-300"
            />
          </Link>
          {/* <div className="flex items-center gap-4  uppercase ">
            <Link href={`/`}>Home</Link>
            <Link href={`/#About`}>About</Link>
            <Link href={`/services`}>Services</Link>
            <Link href={`/knowledge-portal`}>Knowledge Portal</Link>
            <Link href={`/contact-us`}>Contact</Link>
          </div> */}
          {/* 
          <button
            className={`${
              scroll
                ? "bg-white hover:bg-primary hover:text-white  text-primary"
                : "bg-primary text-white"
            } px-5 py-2 rounded-[10px] border-primary border uppercase transition-all duration-300`}
          >
            Schedule Inspection
          </button> */}
          {/* <Image
            src={Nav}
            width={40}
            height={40}
            alt="ohio roofing - icons"
            className="cursor-pointer"
            
          /> */}
          <button onClick={() => setNavOpen(!navOpen)}>
            <span
              className={`bg-primary block transition-all duration-300 ease-out 
                    h-[5px] w-10 rounded ${
                      navOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out 
                    h-[5px] w-10 rounded my-0.5 ${
                      navOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-primary block transition-all duration-300 ease-out 
                    h-[5px] w-10 rounded ${
                      navOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-0.5"
                    }`}
            ></span>
          </button>
          <div
            className={`h-[100vh] w-full bg-primary -z-[1]  ${
              navOpen ? "translate-y-0" : "-translate-y-[120%]"
            } transition-all duration-300 absolute top-full left-0`}
          >
            <div className="flex flex-col mt-24 text-white items-center gap-4  uppercase ">
              <Link onClick={() => setNavOpen(false)} href={`/`}>
                Home
              </Link>
              <Link onClick={() => setNavOpen(false)} href={`/#About`}>
                About
              </Link>
              <Link onClick={() => setNavOpen(false)} href={`/services`}>
                Services
              </Link>

              <Link
                onClick={() => setNavOpen(false)}
                href={`/knowledge-portal`}
              >
                Knowledge Portal
              </Link>
              {/* <Link
                onClick={() => setNavOpen(false)}
                href={`/knowledge-portal`}
              >
                Knowledge Portal
              </Link> */}
              <Link onClick={() => setNavOpen(false)} href={`/contact-us`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
