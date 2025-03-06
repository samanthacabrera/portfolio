import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import Modal from "./Modal";



const ClickableMesh = ({ onClick, geometries, position, rotation }) => {
    return (
        <mesh
            position={position}
            rotation={rotation}
            onClick={onClick}
        >
            {geometries.map((geometry, index) => (
                <React.Fragment key={index}>{geometry}</React.Fragment>
            ))}
        </mesh>
    );
};

const YogaMat = () => {
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
            style={{ height: "80vh", width: "100vw" , userSelect: "none" }}
            camera={{ position: [0, 1, 4],  rotation: [0, Math.PI / 6, 0] }}
        >
            <OrbitControls enableZoom={false} enablePan enableRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Mat */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2, 5]} />
                <meshStandardMaterial color="#A8B89F"/>
            </mesh>

            {/* Yoga Blocks */}
            <mesh position={[-1.5, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[0.6, 0.4, 0.3]} />
                <meshStandardMaterial color="#C19A6B" />
            </mesh>
            <mesh position={[1.5, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[0.6, 0.4, 0.3]} />
                <meshStandardMaterial color="#C19A6B" />
            </mesh>
            
            {/* Singing Bowl */}
            <mesh
                position={[0, 0.1, -3]}
                rotation={[0, 0, 0]}
            >
                <cylinderGeometry args={[0.4, 0.2, 0.2, 32, 1]} />
                <meshStandardMaterial color="#FFB800" />
            </mesh>
        
            {/* Singing Bowl Stick */}
            <mesh position={[0.5, 0.1, -3]} rotation={[0, 0, Math.PI / 6]}>
                <cylinderGeometry args={[0.05, 0.04, 0.6, 16]} />
                <meshStandardMaterial color="#7C482F" />
            </mesh>
        </Canvas>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
        </>
    );
};

export default YogaMat;
