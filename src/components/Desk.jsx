import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import { TextureLoader } from "three";
import Modal from "./Modal";
import About from "../pages/homepage/About";
import ProjectsList from "../pages/homepage/ProjectsList";
import Services from "../pages/homepage/Services";
import Articles from "../pages/homepage/Articles";


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

const Desk = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const frameTexture = useLoader(TextureLoader, "/cat.png");

    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

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
         document.body.classList.toggle("light-mode");
        setIsOn(prev => !prev);
    };

    return (
        <group {...props} onClick={toggleLamp}>
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

    return (
        <>
        <Canvas
            style={{ height: "80vh", width: "100vw" , userSelect: "none" }}
            camera={{ position: [0, 1, 4],  rotation: [0, Math.PI / 6, 0] }}
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

            {/* Frame */}
            <mesh
                position={[-1.5, 0, -0.4]}
                onClick={() => handleModalOpen(<About />)}
            >
                {/* Border */}
                <boxGeometry args={[0.5, 1.3, 0.05]} />
                <meshStandardMaterial color="#FFFFE0" />

                {/* Image */}
                <mesh position={[0, 0.33, 0.03]}>
                    <boxGeometry args={[0.45, 0.6, 0.01]} />
                    <meshStandardMaterial map={frameTexture} />
                </mesh>

                {/* Stand */}
                <mesh position={[0, 0.25, -0.1]} rotation={[Math.PI / 8, 0, 0]}>
                    <boxGeometry args={[0.1, 0.5, 0.02]} />
                    <meshStandardMaterial color="#FFFFE0" />
                </mesh>
            </mesh>

            {/* Laptop */}
            <ClickableMesh
                onClick={() => handleModalOpen(<ProjectsList />)}  
                position={[-0.3, 0.05, 0]}
                geometries={[
                    // Base
                    <boxGeometry key="base" args={[0.8, 0.05, 0.5]} />,
                    <meshStandardMaterial key="baseMaterial" color="#C0C0C0" />,
                    // Top 
                    <mesh key="top" position={[0, 0.2, -0.35]} rotation={[Math.PI / 3, 0, 0]}>
                        <boxGeometry args={[0.8, 0.02, 0.5]} />
                        <meshStandardMaterial color="#C0C0C0" />
                    </mesh>,
                    // Screen
                    <mesh key="screen" position={[0, 0.2, -0.34]} rotation={[Math.PI / 3, 0, 0]}>
                        <boxGeometry args={[0.75, 0.02, 0.45]} />
                        <meshStandardMaterial color="#000" />
                    </mesh>,
                    // Keybord
                    ...Array.from({ length: 4 }, (_, row) =>
                        Array.from({ length: 10 }, (_, col) => (
                            <mesh
                                key={`key-${row}-${col}`}
                                position={[-0.31 + col * 0.07, 0.03, -0.15 + row * 0.07]}
                            >
                                <boxGeometry args={[0.06, 0.02, 0.06]} />
                                <meshStandardMaterial color="#333" />
                            </mesh>
                        ))
                    ),
                    // Mouse
                    <mesh key="mouse" position={[0, 0.03, 0.175]}>
                        <boxGeometry args={[0.3, 0.01, 0.12]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>,

                ]}
            />
            {/* Mug */}
            <ClickableMesh
                onClick={() => handleModalOpen(<Services/>)}  
                position={[0.6, 0.15, -0.1]}
                geometries={[
                    <cylinderGeometry key="mug" args={[0.15, 0.15, 0.3, 32]} />,
                    <meshStandardMaterial key="mugMaterial" color="#FFDBBB" />,
                    <mesh key="handle" position={[0.14, 0, 0]}>
                        <torusGeometry args={[0.075, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#FFDBBB" />
                    </mesh>,
                    <mesh key="coffee" position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[0.13, 32]} rotation={[0, Math.PI, 0]}/>
                        <meshStandardMaterial color="#6F4E37" />
                    </mesh>,
                ]}
            />
            {/* Notebook */}
            <ClickableMesh
                onClick={() => handleModalOpen(<Articles />)}  
                position={[1.2, 0.05, 0]}
                geometries={[
                    <boxGeometry key="notebook" args={[0.4, 0.05, 0.6]} />,
                    <meshStandardMaterial key="notebookMaterial" color="#99ccff" />,
                ]}
            />
            
            {/* Lamp  */}
            <Lamp 
                onClick={() => document.body.classList.toggle('light-mode')} 
                position={[1.7, 0.25, -0.4]} 
                scale={[0.2, 0.2, 0.2]} />
        </Canvas>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} content={modalContent} />
    </>
    );
};

export default Desk;
