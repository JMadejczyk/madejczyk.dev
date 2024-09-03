import { useFont } from "./FontLoader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Menu = () => {
  const font = useFont("AvgardLight");
  const currentPath = usePathname();
  const path = currentPath.split("/")[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <div
      // h-screen
      className={`flex flex-col w-full justify-center items-center text-3xl sm:text-5xl ${font.className} text-[#c0b3a3]`}
    >
      <div className="border-y border-[#c0b3a3] w-full cursor-pointer">
        <Link href="/">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              Main
            </h1>
          </div>
        </Link>

        <Link href="/about">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "about" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              About
            </h1>
          </div>
        </Link>

        <Link href="/skills">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "skills" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              Skills
            </h1>
          </div>
        </Link>

        <Link href="/projects">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "projects" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              Projects
            </h1>
          </div>
        </Link>

        <Link href="/contact">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "contact" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              Contact
            </h1>
          </div>
        </Link>

        <Link href="/hireme">
          <div
            className={`border-y border-[#c0b3a3] p-4 flex justify-center
            ${path == "hireme" ? "text-[#ec4e39]" : ""}`}
          >
            <h1 className="hover:scale-105 transition duration-200 hover:text-[#ec4e39]">
              Hire me
            </h1>
          </div>
        </Link>
      </div>
      <div className="h-8" />
    </div>
  );
};

export default Menu;
