"use client";
import GlassInfinity from "./GlassInfinity";
import { useState, useRef, useEffect } from "react";
import AnimatedShortParagraph from "./AnimatedShortParagraph";
import { useScroll, AnimatePresence } from "framer-motion";

const GlassInfinityAndTextComponent = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  //   console.log(scrollYProgress.get());
  const [y, setY] = useState<any>(0);

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      setY(scrollYProgress);
      if (scrollYProgress.get() < 0.5) {
        setShow("infinity");
      } else {
        setShow("text");
      }
    });
  }, [scrollYProgress]);

  const [show, setShow] = useState("infinity");
  return (
    <div className="h-[300vh]" ref={container}>
      <div className="sticky top-0 m-auto h-auto">
        <GlassInfinity isVisible={show == "infinity"} y={y} />
      </div>
      <div className="sticky top-0 m-auto h-auto ">
        <div className="h-screen flex items-center justify-center">
          <AnimatedShortParagraph
            paragraph="to make something spectacular"
            isVisible={show == "text"}
            y={y}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassInfinityAndTextComponent;
