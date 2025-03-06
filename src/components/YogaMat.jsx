import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import Modal from "./Modal";

const YogaMat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const blockOneContent = (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl text-center">Check out Learn Yoga Online</h1>
            <p>
                I’ve poured so much time, energy, and passion into developing this resource for all yoga practitioners. I’m so proud to share everything I’ve learned, and to offer this as a platform for those seeking to enhance their yoga journey. The content and resources you’ll find here are the result of hours of practice, reflection, and a true passion for helping others grow in their practice.
            </p>
            <p>
                I encourage you to explore all the content available on this platform. From guided tutorials to yoga philosophy lessons, there’s so much to explore.
            </p>
            <p>
                If you’re ready to take the next step and deepen your practice, visit{" "}
                <a href="https://learnyoga.online" className="underline">learnyoga.online</a>
            </p>
        </div>
    );

    const blockTwoContent = (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl text-center">Shop Sustainably with Yarnsara</h1>
            <p>
                Creating sustainable, hand-crocheted yoga accessories has been a journey that I’ve put my heart and soul into. It’s not just about crafting beautiful products; it’s about supporting a vision of a more eco-conscious world. Each item you’ll find on this platform is the result of hours of hard work, attention to detail, and a deep commitment to the environment. I’m proud to offer these accessories, knowing that they are made with upcycled materials, care, and respect for the planet.
            </p>
            <p>
                I encourage you to explore our full collection at{" "}
                <a href="https://yarnsara-samanthacabreras-projects.vercel.app/" className="underline">yarnsara.com</a>. 
                By choosing to shop with Yarnsara, you’re making a mindful choice for both your yoga practice and the planet. 
            </p>
        </div>
    );

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
                <planeGeometry args={[2, 4.8]} />
                <meshStandardMaterial color="#A8B89F"/>
            </mesh>

            {/* Yoga Blocks */}
            <mesh
                onClick={() => handleModalOpen(blockOneContent)}
                position={[-1.5, 0.12, -2]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[0.6, 0.4, 0.3]} />
                <meshStandardMaterial color="#C19A6B" />
            </mesh>
            <mesh
                onClick={() => handleModalOpen(blockTwoContent)}
                position={[1.5, 0.12, -2]}
                rotation={[-Math.PI / 2, 0, 0]}>
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
