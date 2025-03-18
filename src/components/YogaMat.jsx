import React, { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import Modal from "./Modal";
import Articles from "../pages/homepage/Articles";

const YogaMat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [showYogaOnly] = useState(true); 

    const blockOneContent = (
        <div className="group m-8 space-y-8">
            <h1 className="text-center text-lg md:text-xl my-8">Deepen Your Practice with Learn Yoga Online</h1>

                <p>
                    I’ve poured so much time, energy, and <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500">passion</span> into developing this resource for all yoga practitioners. I’m so <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-200">proud</span> to share everything I’ve learned, and to offer this as a platform for those seeking to <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">enhance</span> their yoga journey. The content and resources you’ll find here are the result of hours of practice, reflection, and a true passion for <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-400">helping</span> others grow in their practice.
                </p>
                <p>
                    I encourage you to <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500">explore</span> all the content available on this platform. From guided tutorials to yoga philosophy lessons, there’s so much to explore.
                </p>
                <p>
                    If you’re ready to take the next step and <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-700">deepen</span> your practice, visit{" "}
                    <a href="https://learnyoga.online" className="underline text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-700">learnyoga.online</a>
                </p>
        </div>
    );

    const blockTwoContent = (
        <div className="group m-8 space-y-8">
            <h1 className="text-center text-lg md:text-xl my-8">Shop Sustainably with Yarnsara</h1>
            <p>
            Each item you’ll find on this platform is the result of hours of  <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500">hard work</span>, attention to detail, and a deep  <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-200">commitment</span> to the environment. I’m proud to offer these accessories, knowing that they are made with  <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">upcycled</span> materials, care, and respect for the planet.
            </p>
            <p>
                I encourage you to explore our full collection at{" "}
                <a href="https://yarnsara-samanthacabreras-projects.vercel.app/" className="underline text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500">yarnsara.com</a>. 
                By choosing to shop with Yarnsara, you’re making a  <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-700">mindful</span> choice for both your yoga practice and the  <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-700">planet</span>. 
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

    const handleSingingBowlClick = () => {
        const content = <Articles showYogaOnly={showYogaOnly} />;
        handleModalOpen(content);
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
                onClick={() => {
                    handleSingingBowlClick();
                    handleModalOpen(<Articles showYogaOnly={showYogaOnly} />);
                }}
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
