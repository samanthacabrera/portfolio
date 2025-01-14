import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const ClickableMesh = ({ onClick, geometry, material, position, rotation }) => {
    return (
        <mesh
            position={position}
            rotation={rotation}
            onClick={onClick}
            onPointerOver={(e) => (e.stopPropagation(), (e.target.cursor = "pointer"))}
            onPointerOut={(e) => (e.stopPropagation(), (e.target.cursor = "default"))}
        >
            {geometry}
            {material}
        </mesh>
    );
};

const Room = () => {
    const navigate = useNavigate();

    return (
        <Canvas style={{ height: "80vh", width: "80vw" }}>
            <OrbitControls enableZoom enablePan enableRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Table */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4, 0.05, 1.5]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[-1.5, -0.5, 0]}>
                <boxGeometry args={[1, 1, 1.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[1.5, -0.5, 0]}>
                <boxGeometry args={[1, 1, 1.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Frame  */}
            <ClickableMesh
                onClick={() => navigate("/about")}
                position={[-1.5, 0, -0.4]}
                geometry={<boxGeometry args={[0.4, 1.3, 0.05]} />}
                material={<meshStandardMaterial color="#FFFFE0" />}
            />
            {/* Laptop  */}
            <ClickableMesh
                onClick={() => navigate("/work")}
                position={[-0.3, 0.05, 0]}
                geometry={<boxGeometry args={[0.8, 0.05, 0.5]} />}
                material={<meshStandardMaterial color="#C0C0C0" />}
            />
            {/* Mug */}
            <ClickableMesh
                onClick={() => navigate("/services")}
                position={[0.6, 0.15, -0.1]}
                geometry={<cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />}
                material={<meshStandardMaterial color="#FFDBBB" />}
            />
            {/* Notebook */}
            <ClickableMesh
                onClick={() => navigate("/articles")}
                position={[1.3, 0.05, 0]}
                geometry={<boxGeometry args={[0.4, 0.05, 0.6]} />}
                material={<meshStandardMaterial color="#FFD700" />}
            />
        </Canvas>
    );
};

export default Room;
