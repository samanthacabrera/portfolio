import React, { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
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

const Desk = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <>
        <Canvas
            style={{ height: "60vh", width: "100vw" , userSelect: "none" }}
            camera={{ position: [0, 0.8, 2],  rotation: [0, Math.PI / 6, 0] }}
        >
            <OrbitControls enableZoom={false} enablePan enableRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Desk */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4, 0.05, 1.5]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Desk Leg */}
            <mesh position={[-1.5, -0.5, 0]}>
                <boxGeometry args={[1, 1, 1.3]} />
                <meshStandardMaterial color="#8B4513" />
                <mesh position={[0, 0.25, 0.65]} rotation={[ Math.PI/2, 0, 0 ]}>
                    <torusGeometry args={[0.09, 0.02, 32, 100]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0, -0.25, 0.65]} rotation={[ Math.PI/2, 0, 0 ]}>
                    <torusGeometry args={[0.09, 0.02, 32, 100]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </mesh>
            {/* Desk Leg */}
            <mesh position={[1.5, -0.5, 0]}>
                <boxGeometry args={[1, 1, 1.3]} />
                <meshStandardMaterial color="#8B4513" />
                <mesh position={[0, 0.25, 0.65]} rotation={[ Math.PI/2, 0, 0 ]}>
                    <torusGeometry args={[0.09, 0.02, 32, 100]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0, -0.25, 0.65]} rotation={[ Math.PI/2, 0, 0 ]}>
                    <torusGeometry args={[0.09, 0.02, 32, 100]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </mesh>

            {/* Clickable Desk Items */}
            <Frame onClick={() => handleModalOpen(<About />)} />
            <Laptop onClick={() => handleModalOpen(<ProjectList />)} />
            <Mug onClick={()=> handleModalOpen(<Services/>)} />
            <Notebook onClick={() => handleModalOpen(<ArticleList />)} />
            <Lamp />
            
        </Canvas>
        
        <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
    </>
    );
};

export default Desk;
