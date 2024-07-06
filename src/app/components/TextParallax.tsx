"use client";
import Picture from "../../../public/images/dev.png";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useAvgardFontLight } from "./FontLoader";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden">
      <div className="h-[50vh]" />
      <Slide
        src={Picture}
        direction={"left"}
        left={"-40%"}
        progress={scrollYProgress}
        text={"Web Developer"}
      />
      <Slide
        src={Picture}
        direction={"right"}
        left={"-22%"}
        progress={scrollYProgress}
        text={"Jakub Madejczyk"}
      />
      <Slide
        src={Picture}
        direction={"left"}
        left={"-75%"}
        progress={scrollYProgress}
        text={"Web Developer"}
      />
      <div className="h-[50vh]" />
    </main>
  );
}

interface SlideProps {
  src: StaticImageData;
  left: string;
  direction: string | number;
  progress: any;
  text: string;
}

const Slide = (props: SlideProps) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
      <Phrase src={props.src} text={props.text} />
    </motion.div>
  );
};

const Phrase = ({ src, text }: { src: StaticImageData; text: string }) => {
  const font = useAvgardFontLight();
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className={`${font.className} text-[7.5vw] text-[#c0b3a3]`}>{text}</p>
      <span className={`relative h-[7.5vw] aspect-square overflow-hidden mx-8`}>
        <Image
          style={{ objectFit: "cover" }}
          src={src}
          alt="web developer"
          fill
        />
      </span>
    </div>
  );
};
