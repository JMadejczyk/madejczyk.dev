"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();
    let animationFrameId: number;
    function raf(time: number): void {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
};

export default SmoothScroll;
