import React, { useState, useRef  } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei"; 
import Laptop from "./Laptop";
import Lamp from "./Lamp";
import LaptopScreen from "./LaptopScreen";

const Hoverable = ({ children, onClick, shouldScale = true }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && shouldScale) {
      groupRef.current.scale.lerp(
        hovered ? new THREE.Vector3(1.05, 1.05, 1.05)
                : new THREE.Vector3(1,    1,    1),
        0.1
      );
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={e => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={e => { e.stopPropagation(); setHovered(false); }}
      onPointerDown={e => { e.stopPropagation(); onClick(); }}
    >
      {children}
    </group>
  );
};

const Desk = ({is3DView}) => {
    const [screenOpen, setScreenOpen] = useState(false);

    // data for each desk item
    const items = [
      {
        component: <Laptop />,
        position: [0, 0.28, -0.25],
        onClick: () => setScreenOpen(true),
      },
    ];

    return (
    <>
      <Canvas
        style={{
            height: "80vh",
            width: "100vw",
            userSelect: "none",
        }}
        camera={{ position: [0, 0.6, 1.3] }}
      >
        <OrbitControls enableZoom={false} enablePan enableRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Desk */}
        <group position={[0, -0.3, 0]}>
          {/* Desk Surface */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.5, 0.05, 1.3]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Desk Legs */}
          <mesh position={[-1, -0.5, 0]}>
            <boxGeometry args={[0.5, 1, 1.3]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[1, -0.5, 0]}>
            <boxGeometry args={[0.5, 1, 1.3]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Desk Handles */}
          <mesh position={[-1, -0.25, 0.7]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshStandardMaterial color="#4b3621" />
          </mesh>
          <mesh position={[-1, -0.65, 0.7]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshStandardMaterial color="#4b3621" />
          </mesh>
          <mesh position={[1, -0.25, 0.7]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshStandardMaterial color="#4b3621" />
          </mesh>
          <mesh position={[1, -0.65, 0.7]}>
            <boxGeometry args={[0.3, 0.05, 0.05]} />
            <meshStandardMaterial color="#4b3621" />
          </mesh>
        </group>


        {/* Clickable Desk Items */}
        {items.map((item, index) => (
          <React.Fragment key={index}>

          <Hoverable position={item.position} onClick={item.onClick} shouldScale={item.component.type !== Lamp}>
            {item.component}
          </Hoverable>

          </React.Fragment>
        ))}
      </Canvas>
      {screenOpen && <LaptopScreen onClose={() => setScreenOpen(false)} is3DView={is3DView} />}
    </>
  );
};

export default Desk;
