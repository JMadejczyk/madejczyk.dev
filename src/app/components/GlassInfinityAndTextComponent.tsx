"use client";
import GlassInfinity from "./GlassInfinity";
import { useState, useRef, useEffect } from "react";
import AnimatedShortParagraph from "./AnimatedShortParagraph";
import { useScroll, MotionValue } from "framer-motion";

const GlassInfinityAndTextComponent = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [scrollY, setScrollY] = useState<MotionValue<number>>(scrollYProgress);
  const [show, setShow] = useState("infinity");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
      setScrollY(scrollYProgress);
      if (scrollYProgress.get() < 0.5) {
        setShow("infinity");
      } else if (scrollYProgress.get() > 0.5 && scrollYProgress.get() < 1) {
        setShow("text");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <div className="h-[300vh] max-w-[1600px] mx-auto" ref={container}>
      <div className="sticky top-0 m-auto h-auto">
        <GlassInfinity isVisible={show == "infinity"} scrollY={scrollY} />
      </div>
      <div className="sticky top-0 m-auto h-auto ">
        <div className="h-screen flex items-center justify-center">
          <AnimatedShortParagraph
            paragraph="to make something spectacular"
            isVisible={show == "text"}
            scrollY={scrollY}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassInfinityAndTextComponent;
