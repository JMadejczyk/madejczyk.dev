"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Infinity from "./components/Infinity";
import ShortAbout from "./components/ShortAbout";
import AnimatedParagraph from "./components/AnimatedParagraph";
import TextParallax from "./components/TextParallax";
// import SmoothScroll from "./components/SmoothScroll";
import GlassInfinityAndTextComponent from "./components/GlassInfinityAndTextComponent";
import PreLoader from "./components/PreLoader";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import useSmoothScroll from "./lib/useSmoothScroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useSmoothScroll();

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <GlassInfinityAndTextComponent />
      <ShortAbout />
      <TextParallax />
      <div className="flex justify-center">
        <AnimatedParagraph paragraph="I am constantly expanding my skill set to master both front-end and back-end technologies. Whether it's building user-friendly interfaces or developing robust server-side logic, I strive to deliver high-quality solutions that meet modern standards." />
      </div>
      {/* <Menu /> */}
      <div className="w-full h-[20vh]"></div>
      <Footer />
    </main>
  );
}
