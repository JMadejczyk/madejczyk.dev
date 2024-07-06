import Infinity from "./components/Infinity";
import Spectacular from "./components/Spectacular";
import ShortAbout from "./components/ShortAbout";
import AnimatedParagraph from "./components/AnimatedParagraph";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main>
      <Infinity />
      <Spectacular />
      <ShortAbout />
      <div className="flex justify-center">
        <AnimatedParagraph paragraph="I am constantly expanding my skill set to master both front-end and back-end technologies. Whether it's building user-friendly interfaces or developing robust server-side logic, I strive to deliver high-quality solutions that meet modern standards." />
      </div>
      <Infinity />
    </main>
  );
}
