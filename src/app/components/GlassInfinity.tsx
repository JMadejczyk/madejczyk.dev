"use client";
import styles from "@/app/styles/glassInfinity.module.scss";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import Caption from "@/app/components/Caption";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function GlassInfinity(props: { isVisible: boolean }) {
  return (
    <motion.main
      key="glass-infinity"
      className={`${styles.main} ${
        props.isVisible ? "" : setTimeout(() => "hidden", 250)
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: props.isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <Scene isVisible={props.isVisible} />
    </motion.main>
  );
}
