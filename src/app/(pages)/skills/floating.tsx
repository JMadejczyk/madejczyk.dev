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
  let hide = true;
  hoveredSkill.skillName == "" ? null : (hide = false);

  useEffect(() => {
    const animateSequence = () => {
      controls.start({
        y: mousePosition.y ? mousePosition.y + window.scrollY - 100 : 0,
        x: mousePosition.x
          ? mousePosition.x > 100
            ? mousePosition.x - 100
            : 0
          : 0,
        transition: {
          type: "tween",
          ease: "backOut",
          duration: 0.7,
        },
      });
      controls.start({
        scale: hide ? 0 : 1,
        transition: {
          type: "tween",
          ease: "backOut",
          duration: 0.9,
          delay: 0.05,
        },
      });
      controls.start({
        borderRadius: hide ? "5rem" : "1rem",
        transition: { ease: "easeOut", duration: 0.6 },
      });
    };

    animateSequence();
    return () => {
      controls.stop();
    };
  }, [mousePosition, hide, controls]);

  return (
    <motion.div
      className={`pointer-events-none opacity-85 absolute w-[200px] h-[200px] bg-black  border-2
         border-textWhite text-textWhite 
         flex flex-col justify-center items-center
         `}
      animate={controls}
      //   transition={{ type: "tween", ease: "backOut", duration: 0.7 }}

      initial={{ scale: 0 }}
    >
      <p className="text-center  text-lg text-textRed font-semibold">
        {hoveredSkill.skillName}
      </p>
      <p className="text-center m-2 mt-1 ">{hoveredSkill.skillDescription}</p>
    </motion.div>
  );
};
export default Floating;
