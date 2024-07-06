"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "@/app/styles/animatedParagraph.module.scss";
import { usePangaiaFont } from "./FontLoader";

const AnimatedParagraph = ({ paragraph }: { paragraph: string }) => {
  const font = usePangaiaFont();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.75", "start 0.25"],
  });
  const words = paragraph.split(" ");
  return (
    <>
      <p
        ref={container}
        className={`${styles.paragraph} ${font.className} sm:mb-20`}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: String;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span
      className={`${styles.word} ${
        children == "front-end" || children == "back-end"
          ? "text-[#ec4e39]"
          : ""
      } text-2xl sm:text-[40px]  md:text-[60px] leading-[1]`}
    >
      <span className={`${styles.shadow}`}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default AnimatedParagraph;
