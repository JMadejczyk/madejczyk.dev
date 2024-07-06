import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Model = () => {
  const { nodes } = useGLTF("/medias/infinity.glb");
  const { viewport } = useThree();
  const infinity = useRef(null);

  useFrame(() => {
    (infinity.current as any).rotation.x += 0.02;
  });

  const materialProps = {
    thickness: 1.0,
    roughness: 0.0,
    transmission: 1.0,
    ior: 1.2,
    chromaticAberration: 0.03,
    backside: true,
  };

  return (
    <group scale={viewport.width / 5}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
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
