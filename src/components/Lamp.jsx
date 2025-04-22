import React, { useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Lamp = (props) => {
  const { scene } = useGLTF("/models/lamp.glb");
  const [isOn, setIsOn] = useState(true);

  scene.traverse((child) => {
    if (child.isMesh && child.name.toLowerCase().includes("shade")) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#FFC847",
        emissive: isOn ? "#FFC847" : "#000000",
        emissiveIntensity: isOn ? 3 : 0,
        transparent: true,
        opacity: 0.97,
      });
    }
  });

  const toggleLamp = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <group {...props} onClick={toggleLamp} position={[1.7, 0.25, -0.4]} scale={[0.2, 0.2, 0.2]}>
      <primitive object={scene} />
      <pointLight
        position={[0, 0.5, 0]}
        intensity={isOn ? 3 : 0}
        distance={3}
        decay={2}
        color={"#FFC847"}
      />
    </group>
  );
};

export default Lamp;


