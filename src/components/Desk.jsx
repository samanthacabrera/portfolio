import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line } from "@react-three/drei"; 
import Modal from "../utils/Modal";
import About from "../pages/homepage/About";
import ProjectList from "../pages/homepage/ProjectList";
import Services from "../pages/homepage/Services";
import ArticleList from "../pages/homepage/ArticleList";
import Frame from "./Frame";
import Laptop from "./Laptop";
import Mug from "./Mug";
import Notebook from "./Notebook";
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
        { component: <Frame onClick={() => handleModalOpen(<About />)} />, position: [-1.3, 0.5, -0.3], label: "About", color: "#65a30d" },    // lime-600
        { component: <Laptop onClick={() => handleModalOpen(<ProjectList />)} />, position: [-0.3, 0.28, -0.45], label: "Work", color: "#0891b2" }, // cyan-600
        { component: <Mug onClick={() => handleModalOpen(<Services />)} />, position: [0.6, 0, -0.1], label: "Services", color: "#ea580c" },    // orange-600
        { component: <Notebook onClick={() => handleModalOpen(<ArticleList />)} />, position: [1.2, -0.2, -0.2], label: "Articles", color: "#eab308" }, // yellow-500
        { component: <Lamp setAmbientIntensity={setAmbientIntensity} />, position: [1.7, 0.5, -0.4], label: "Click me", color: "#db2777" },   // pink-600
    ];

    return (
    <>
      <Canvas
        style={{
            height: "60vh",
            width: "100vw",
            userSelect: "none",
        }}
        camera={{ position: [0, 0.8, 2] }}
      >
        <OrbitControls enableZoom={false} enablePan enableRotate />
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Desk */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 0.05, 1.5]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Desk Legs */}
        <mesh position={[-1.5, -0.5, 0]}>
          <boxGeometry args={[1, 1, 1.3]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[1.5, -0.5, 0]}>
          <boxGeometry args={[1, 1, 1.3]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Desk Handles */}
        <mesh position={[-1.5, -0.25, 0.7]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="#4b3621" />
        </mesh>
        <mesh position={[-1.5, -0.65, 0.7]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="#4b3621" />
        </mesh>
        <mesh position={[1.5, -0.25, 0.7]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="#4b3621" />
        </mesh>
        <mesh position={[1.5, -0.65, 0.7]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="#4b3621" />
        </mesh>

        {/* Clickable Desk Items */}
        {items.map((item, index) => (
          <React.Fragment key={index}>

             <Hoverable position={item.position} onClick={item.onClick} shouldScale={item.component.type !== Lamp}>
              {item.component}
            </Hoverable>

            <Line
              points={[
                new THREE.Vector3(item.position[0], item.position[1] + 0.2, item.position[2]), // Start point (object position)
                new THREE.Vector3(item.position[0], item.position[1] + 0.6, item.position[2]), // End point (label position)
              ]}
              color={item.color} 
              lineWidth={1}
            />

            {/* Label */}
            <Text
              position={[item.position[0], item.position[1] + 0.6, item.position[2]]} 
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
