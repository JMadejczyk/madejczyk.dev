"use client";
import styles from "@/app/styles/glassInfinity.module.scss";
import dynamic from "next/dynamic";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function GlassInfinity(props: {
  isVisible: boolean;
  scrollY: MotionValue<number>;
}) {
  const opacity = useTransform(props.scrollY, [0.1, 0.5], [1, 0]);
  return (
    <motion.main
      key="glass-infinity"
      className={`${styles.main} ${
        props.isVisible ? "" : setTimeout(() => "hidden", 250)
      }`}
      initial={{ opacity: 0 }}
      style={{ opacity: opacity }}
      transition={{ duration: 0.25 }}
    >
      <Scene isVisible={props.isVisible} />
    </motion.main>
  );
}
