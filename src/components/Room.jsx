import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const TableTop = () => (
    <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[4, 0.05, 1.5]} /> 
        <meshStandardMaterial color="#8B4513" /> 
    </mesh>
);

const TableLeg = ({ position }) => (
    <mesh position={position}>
        <boxGeometry args={[1, 1, 1.3]} />
        <meshStandardMaterial color="#8B4513" />
    </mesh>
);

const Laptop = () => (
    <>
        {/* Laptop Base */}
        <mesh position={[-0.3, -0.1, 0.05]}>
            <boxGeometry args={[0.8, 0.05, 0.5]} />
            <meshStandardMaterial color="#C0C0C0" /> 
        </mesh>

        {/* Laptop Screen */}
        <mesh position={[-0.3, 0.15, -0.3]} rotation={[-2, 0, 0]}>
            <boxGeometry args={[0.8, 0.01, 0.5]} />
            <meshStandardMaterial color="#C0C0C0" />
        </mesh>
    </>
);

const PictureFrame = () => (
    <>
        {/* Picture frame */}
        <mesh position={[-1.5, 0, -0.4]}>
            <boxGeometry args={[0.4, 0.5, 0.05]}  />
            <meshStandardMaterial color="#FFFFE0" /> 
        </mesh>

        {/* Picture */}
        <mesh position={[-1.5, 0.01, -0.37]}>
            <planeGeometry args={[0.35, 0.45]} />
            <meshStandardMaterial color="#000000" />
        </mesh>
    </>
);

const Book = () => (
    <>
    {/* Book */}
    <mesh position={[1.3, 0, 0.25]}>
        <boxGeometry args={[0.4, 0.05, 0.6]}  />
        <meshStandardMaterial color="#FFD700" /> 
    </mesh>
    
    {/* Pencil */}
    
    </>
);

const Mug = () => (
    <>
    {/* Cup */}
    <mesh position={[0.6, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial color="#FFDBBB" /> 
    </mesh>
    
    {/* Handle */}
    <mesh position={[0.7, 0, 0]}>
     
    </mesh>
    
    {/* Coffee     */}
    <mesh position={[0.6, 0.1, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.01, 32]} />
        <meshStandardMaterial color="#6F4827" /> 
    </mesh>
    </>
);

const Room = () => {
    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <OrbitControls enableZoom enablePan enableRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Table Top */}
            <TableTop />

            {/* Table Legs */}
            <TableLeg position={[-1.5, -0.725, 0]} />
            <TableLeg position={[1.5, -0.725, 0]} />

            {/* Items on the table */}
            <PictureFrame />
            <Laptop />
            <Mug />
            <Book />
        </Canvas>
    );
};

export default Room;
