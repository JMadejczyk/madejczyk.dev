"use client";
import styles from "../styles/shortAbout.module.scss";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../lib/useMousePosition";
import { useFont } from "@/app/components/FontLoader";

const ShortAbout = () => {
  const Avgard = useFont("Avgard");
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isComponentHovered, setIsComponentHovered] = useState(false);
  const [componentPosition, setComponentPosition] = useState({ y: 0 });
  const [maxDotSize, setMaxDotSize] = useState(400);
  const { x, y } = useMousePosition();

  const size = isTextHovered ? maxDotSize : isComponentHovered ? 40 : 0;

  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      const rect = (elementRef.current as HTMLElement).getBoundingClientRect();
      setComponentPosition({ y: rect.top });
    }
    const deviceWidth = window.innerWidth;
    setMaxDotSize(deviceWidth < 1000 ? deviceWidth / 2.5 : 400);
  }, [y]);

  return (
    <div className="h-[170vh]">
      <main
        className={`${styles.main} sticky top-0 m-auto h-auto`}
        onMouseEnter={() => {
          setIsComponentHovered(true);
        }}
        onMouseLeave={() => {
          setIsComponentHovered(false);
        }}
        ref={elementRef}
      >
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x !== null ? x - size / 2 : 0}px ${
              y !== null ? y - size / 2 - componentPosition.y : 0
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            className={`${Avgard.className} text-3xl sm:text-[64px] sm:leading-[66px]`}
            onMouseEnter={() => {
              setIsTextHovered(true);
            }}
            onMouseLeave={() => {
              setIsTextHovered(false);
            }}
          >
            Hi, I&apos;m an Artificial Intelligence student based in Poznan
            University of Technology, dedicated to achieving knowledge in data
            science.
          </p>
        </motion.div>

        <div className={styles.body}>
          <p
            className={`${Avgard.className} text-3xl sm:text-[64px] sm:leading-[66px]`}
          >
            Hi, I&apos;m a <span>web developer</span> based in Poznan, Poland,
            dedicated to achieving comprehensive knowledge in full-stack
            development.
          </p>
        </div>
      </main>
    </div>
  );
};
export default ShortAbout;
