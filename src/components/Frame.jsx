import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import About from "../pages/homepage/About";

const Frame = ({ onClick }) => {
    const frameTexture = useLoader(TextureLoader, "/cat.png");

    return (
        <mesh position={[-1.3, 0.4, -0.2]} rotation={[-Math.PI / 12, 0, 0]} onClick={onClick}>
            {/* Border */}
            <boxGeometry args={[0.5, 0.7, 0.05]} />
            <meshStandardMaterial color="#FFFFE0" />

            {/* Image */}
            <mesh position={[0, 0, 0.03]}>
                <boxGeometry args={[0.45, 0.6, 0.01]} />
                <meshStandardMaterial map={frameTexture} />
            </mesh>

            {/* Stand */}
            <mesh position={[0, -0.15, -0.1]} rotation={[Math.PI / 8, 0, 0]}>
                <boxGeometry args={[0.1, 0.5, 0.02]} />
                <meshStandardMaterial color="#FFFFE0" />
            </mesh>
        </mesh>
    );
};

export default Frame;
