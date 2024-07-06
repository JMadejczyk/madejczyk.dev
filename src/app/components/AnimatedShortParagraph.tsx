"use client";
import {
  AnimatePresence,
  motion,
  useTransform,
  MotionValue,
} from "framer-motion";
import React, { useRef } from "react";
import styles from "@/app/styles/animatedParagraph.module.scss";
import { usePangaiaFont } from "./FontLoader";

const AnimatedShortParagraph = (props: {
  paragraph: string;
  isVisible: boolean;
  scrollY: MotionValue<number>;
}) => {
  const font = usePangaiaFont();
  const container = useRef(null);
  const words = props.paragraph.split(" ");
  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.p
          ref={container}
          className={`${styles.paragraph} ${font.className} justify-center w-[450px] sm:w-[600px] `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={props.paragraph}
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} progress={props.scrollY} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </motion.p>
      )}
    </AnimatePresence>
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
  const decreasedValue: any = useTransform(progress, [0.5, 1], [-0.1, 1]);
  const opacity = useTransform(decreasedValue, range, [0, 1]);
  return (
    <span
      className={`${styles.word} ${
        children == "front-end" || children == "back-end"
          ? "text-[#ec4e39]"
          : ""
      } text-5xl sm:text-8xl`}
    >
      <span className={`${styles.shadow}`}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default AnimatedShortParagraph;
