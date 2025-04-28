import React, { useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Lamp = ({ setAmbientIntensity, ...props }) => {
  const { scene } = useGLTF("/models/lamp.glb");
  const [isOn, setIsOn] = useState(false);
  const [lampIntensity, setLampIntensity] = useState(0);

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

  useFrame((_, delta) => {
    if (isOn) {
      // lamp turning ON
      setAmbientIntensity((prev) => Math.min(prev + delta * 0.5, 0.5));
      setLampIntensity((prev) => Math.min(prev + delta * 4, 3));
    } else {
      // lamp turning OFF 
      setAmbientIntensity((prev) => Math.max(prev - delta * 0.5, 0));
      setLampIntensity((prev) => Math.max(prev - delta * 4, 0));
    }
  });

  return (
    <group {...props} onClick={toggleLamp} position={[0.9, 0.25, 0]} scale={[0.15, 0.15, 0.15]}>
      <primitive object={scene} />
      <pointLight
        position={[0, 0.5, 0]}
        intensity={lampIntensity}
        distance={5}
        decay={2}
        color={"#FFC847"}
      />
    </group>
  );
};

export default Lamp;
