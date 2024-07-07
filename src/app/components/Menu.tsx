import {
  useAvgardFont,
  useAvgardFontLight,
  usePangaiaFont,
} from "./FontLoader";
import Link from "next/link";

const Menu = () => {
  //   const font = usePangaiaFont();
  const font = useAvgardFontLight();
  return (
    <div
      // h-screen
      className={` flex flex-col w-full justify-center items-center text-3xl sm:text-5xl ${font.className} text-[#c0b3a3] `}
    >
      <div className="border-y border-[#c0b3a3] w-full cursor-pointer">
        <Link href="/about">
          <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39] ">
            <h1>About</h1>
          </div>
        </Link>

        <Link href="/skills">
          <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
            <h1>Skills</h1>
          </div>
        </Link>

        <Link href="/projects">
          <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
            <h1>Projects</h1>
          </div>
        </Link>

        <Link href="/contact">
          <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
            <h1>Contact</h1>
          </div>
        </Link>

        <Link href="/hireme">
          <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
            <h1>Hire me</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
