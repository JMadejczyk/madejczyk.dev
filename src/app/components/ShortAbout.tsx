"use client";
import styles from "../styles/shortAbout.module.scss";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../lib/useMousePosition";
import { useAvgardFont } from "@/app/components/FontLoader";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const ShortAbout = () => {
  const Avgard = useAvgardFont();
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isComponentHovered, setIsComponentHovered] = useState(false);
  const [componentPosition, setComponentPosition] = useState({ y: 0 });
  const { x, y } = useMousePosition();
  const size = isTextHovered ? 400 : isComponentHovered ? 40 : 0;
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const rect = (elementRef.current as HTMLElement).getBoundingClientRect();
      setComponentPosition({ y: rect.top });
    }
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
            className={Avgard.className}
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
          <p className={Avgard.className}>
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
