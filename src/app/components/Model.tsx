import React, { useEffect, useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Model = ({ isVisible }: { isVisible: boolean }) => {
  const { nodes } = useGLTF("/medias/infinity.glb");
  const state = useThree();
  const infinity = useRef(null);
  const { setFrameloop } = state;

  useFrame(() => {
    (infinity.current as any).rotation.x += 0.02;
  });

  useEffect(() => {
    isVisible ? setFrameloop("always") : setFrameloop("never");
  }, [isVisible, setFrameloop]);

  const materialProps = {
    thickness: 1.0,
    roughness: 0.0,
    transmission: 1.0,
    ior: 1.2,
    chromaticAberration: 0.03,
    backside: true,
  };

  return (
    <group scale={state.viewport.width / 5}>
      <Text
        font={"/fonts/NeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.8}
        color="#c0b3a3"
        anchorX="center"
        anchorY="middle"
      >
        Possibilities
      </Text>
      <mesh ref={infinity} {...nodes.infinity}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
