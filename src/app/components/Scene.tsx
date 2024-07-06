"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

const Scene = (props: { isVisible: boolean }) => {
  return (
    <Canvas
      style={{ background: "#000000" }}
      className={`${
        props.isVisible ? "" : setTimeout(() => "hidden", 250)
      } h-auto`}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
};
export default Scene;
