import useMousePosition from "../../lib/useMousePosition";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Floating = ({
  hoveredSkill,
}: {
  hoveredSkill: { skillName: string; skillDescription: string };
}) => {
  const mousePosition = useMousePosition();
  const controls = useAnimation();
  //   console.log(mousePosition.x, mousePosition.y);
  //   iconHovered ? console.log("hovered") : console.log("not hovered");
  let small = true;
  hoveredSkill.skillName == "" ? null : (small = false);

  useEffect(() => {
    const animateSequence = () => {
      controls.start({
        y: mousePosition.y ? mousePosition.y + window.scrollY - 100 : 0,
        x: mousePosition.x
          ? mousePosition.x > 100
            ? mousePosition.x - 100
            : 0
          : 0,
        // scale: small ? 0.3 : 1,
        transition: {
          type: "tween",
          ease: "backOut",
          duration: 0.7,
        },
      });
      controls.start({
        scale: small ? 0.15 : 1,
        transition: {
          type: "tween",
          ease: "backOut",
          duration: 0.8,
          delay: 0.05,
        },
      });
      controls.start({
        borderRadius: small ? "5rem" : "1rem",
        transition: { ease: "easeOut", duration: 0.6 },
      });
    };

    animateSequence();
    return () => {
      controls.stop();
    };
  }, [mousePosition, small, controls]);

  return (
    <motion.div
      className={`pointer-events-none opacity-85 absolute w-[200px] h-[200px] bg-black  border-2
         border-textWhite text-textWhite 
         
         `}
      animate={controls}
      //   transition={{ type: "tween", ease: "backOut", duration: 0.7 }}
    >
      <p className="text-center mt-4 text-lg text-textRed font-semibold">
        {hoveredSkill.skillName}
      </p>
      <p className="text-center mt-2">{hoveredSkill.skillDescription}</p>
    </motion.div>
  );
};
export default Floating;
