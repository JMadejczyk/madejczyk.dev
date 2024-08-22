"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Menu from "./Menu";

const Footer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  return (
    <div ref={container} className="relative">
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
};

const Logos = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [-225, 0]);

  return (
    <div className="h-fit bg-black overflow-hidden">
      <motion.div style={{ y }} className="pt-4">
        <Menu />
      </motion.div>
    </div>
  );
};

export default Footer;
