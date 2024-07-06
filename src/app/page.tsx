import Infinity from "./components/Infinity";
import Spectacular from "./components/Spectacular";
import ShortAbout from "./components/ShortAbout";
import AnimatedParagraph from "./components/AnimatedParagraph";
import TextParallax from "./components/TextParallax";
import SmoothScroll from "./components/SmoothScroll";
import GlassInfinityAndTextComponent from "./components/GlassInfinityAndTextComponent";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <GlassInfinityAndTextComponent />
      {/* <Infinity /> */}
      {/* <Spectacular /> */}
      <ShortAbout />
      <TextParallax />
      <div className="flex justify-center">
        <AnimatedParagraph paragraph="I am constantly expanding my skill set to master both front-end and back-end technologies. Whether it's building user-friendly interfaces or developing robust server-side logic, I strive to deliver high-quality solutions that meet modern standards." />
      </div>
      <Infinity />
    </main>
  );
}
