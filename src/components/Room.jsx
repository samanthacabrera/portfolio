import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useNavigate } from "react-router-dom";

const ClickableMesh = ({ onClick, geometries, position, rotation }) => {
    return (
        <mesh
            position={position}
            rotation={rotation}
            onClick={onClick}
            onPointerOver={(e) => (e.stopPropagation(), (e.target.cursor = "pointer"))}
            onPointerOut={(e) => (e.stopPropagation(), (e.target.cursor = "default"))}
        >
            {geometries.map((geometry, index) => (
                <React.Fragment key={index}>{geometry}</React.Fragment>
            ))}
        </mesh>
    );
};

const Room = () => {
    const navigate = useNavigate();

    const frameTexture = useLoader(TextureLoader, "/cat.png");

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

            {/* Frame */}
            <mesh
                position={[-1.5, 0, -0.4]}
                onClick={() => navigate("/about")}
            >
                {/* Border */}
                <boxGeometry args={[0.5, 1.3, 0.05]} />
                <meshStandardMaterial color="#FFFFE0" />

                {/* Image */}
                <mesh position={[0, 0.33, 0.03]}>
                    <boxGeometry args={[0.45, 0.6, 0.01]} />
                    <meshStandardMaterial map={frameTexture} />
                </mesh>
            </mesh>

            {/* Laptop */}
            <ClickableMesh
                onClick={() => navigate("/work")}
                position={[-0.3, 0.05, 0]}
                geometries={[
                    <boxGeometry key="laptop" args={[0.8, 0.05, 0.5]} />,
                    <meshStandardMaterial key="laptopMaterial" color="#C0C0C0" />,
                ]}
            />
            {/* Mug */}
            <ClickableMesh
                onClick={() => navigate("/services")}
                position={[0.6, 0.15, -0.1]}
                geometries={[
                    <cylinderGeometry key="mug" args={[0.15, 0.15, 0.3, 32]} />,
                    <meshStandardMaterial key="mugMaterial" color="#FFDBBB" />,
                    <mesh key="handle" position={[0.2, 0, 0]}>
                        <torusGeometry args={[0.1, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#FFDBBB" />
                    </mesh>,
                ]}
            />
            {/* Notebook */}
            <ClickableMesh
                onClick={() => navigate("/articles")}
                position={[1.3, 0.05, 0]}
                geometries={[
                    <boxGeometry key="notebook" args={[0.4, 0.05, 0.6]} />,
                    <meshStandardMaterial key="notebookMaterial" color="#99ccff" />,
                ]}
            />
        </Canvas>
    );
};

export default Room;
