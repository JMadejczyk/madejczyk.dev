import {
  useAvgardFont,
  useAvgardFontLight,
  usePangaiaFont,
} from "./FontLoader";

const Menu = () => {
  //   const font = usePangaiaFont();
  const font = useAvgardFontLight();
  return (
    <div
      className={`h-screen flex flex-col w-full justify-center items-center text-3xl sm:text-5xl ${font.className} text-[#c0b3a3] `}
    >
      <div className="border-y border-[#c0b3a3] w-full cursor-pointer">
        <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39] ">
          <h1>About</h1>
        </div>
        <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
          <h1>Skills</h1>
        </div>
        <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
          <h1>Projects</h1>
        </div>
        <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
          <h1>Contact</h1>
        </div>
        <div className="border-y border-[#c0b3a3] p-4 flex justify-center hover:text-[#ec4e39]">
          <h1>Hire me</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
