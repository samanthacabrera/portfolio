import React from "react";
import * as THREE from "three";

const Mug = ({ onClick }) => {
    return (
        <mesh position={[0.6, 0.15, -0.1]} onClick={onClick}>
            <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
            <meshStandardMaterial color="#FFDBBB" />
            <mesh position={[0.14, 0, 0]}>
                <torusGeometry args={[0.075, 0.02, 16, 100]} />
                <meshStandardMaterial color="#FFDBBB" />
            </mesh>
            <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.13, 32]} rotation={[0, Math.PI, 0]} />
                <meshStandardMaterial color="#6F4E37" />
            </mesh>
        </mesh>
    );
};

export default Mug;
