import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei"; 
import Modal from "../utils/Modal";
import About from "../pages/About";
import ProjectList from "../pages/ProjectList";
import Frame from "./Frame";
import Laptop from "./Laptop";
import Lamp from "./Lamp";

const Hoverable = ({ children, onClick, shouldScale = true }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current && shouldScale) {
      meshRef.current.scale.lerp(hovered ? new THREE.Vector3(1.05, 1.05, 1.05) : new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <mesh ref={meshRef} scale={[1, 1, 1]}>
        {children}
      </mesh>
    </group>
  );
};

const Desk = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [ambientIntensity, setAmbientIntensity] = useState(0);

    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    // data for each desk item
    const items = [
        { component: <Frame onClick={() => handleModalOpen(<About />)} />, position: [-0.9, 0.4, -0.25], label: "About", color: "#65a30d" },    // lime-600
        { component: <Laptop onClick={() => handleModalOpen(<ProjectList />)} />, position: [0, 0.28, -0.25], label: "Work", color: "#0891b2" }, // cyan-600
        { component: <Lamp setAmbientIntensity={setAmbientIntensity} />, position: [0.9, 0.4, -0.25], label: "Click me", color: "#db2777" },   // pink-600
    ];

    return (
    <>
      <Canvas
        style={{
            height: "100vh",
            width: "100vw",
            userSelect: "none",
        }}
        camera={{ position: [0, 0.6, 1.3] }}
      >
        <OrbitControls enableZoom={false} enablePan enableRotate />
        <ambientLight intensity={ambientIntensity} />
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

            {/* Label */}
            <Text
              position={[item.position[0], 0.6, item.position[2] ]}
              fontSize={0.1}
              color={item.color}
              anchorX="center"
              anchorY="bottom"
            >
              {item.label}
            </Text>
          </React.Fragment>
        ))}
      </Canvas>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
    </>
  );
};

export default Desk;
