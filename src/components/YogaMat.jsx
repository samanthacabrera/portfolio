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

        </Canvas>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
        </>
    );
};

export default YogaMat;
