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

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
      setScrollY(scrollYProgress);
      if (scrollYProgress.get() < 0.5) {
        setShow("infinity");
      } else if (scrollYProgress.get() > 0.5 && scrollYProgress.get() < 1) {
        setShow("text");
      }
      if (scrollYProgress.get() > 0.9) {
        setShowInf(false);
      } else {
        setShowInf(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const [show, setShow] = useState("infinity");
  const [showInf, setShowInf] = useState(true);
  console.log(showInf, show, scrollY.get());

  return (
    <div className="h-[300vh]" ref={container}>
      <div className="sticky top-0 m-auto h-auto">
        {showInf && (
          <GlassInfinity isVisible={show == "infinity"} scrollY={scrollY} />
        )}
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
