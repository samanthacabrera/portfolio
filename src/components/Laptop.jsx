import React from "react";

const Laptop = () => {


    return (
        <mesh position={[0, -0.25, 0]} >
            {/* Base */}
            <boxGeometry args={[0.8, 0.05, 0.5]} />
            <meshStandardMaterial color="#C0C0C0" />
            {/* Top */}
            <mesh position={[0, 0.2, -0.35]} rotation={[Math.PI / 3, 0, 0]}>
                <boxGeometry args={[0.8, 0.02, 0.5]} />
                <meshStandardMaterial color="#C0C0C0" />
            </mesh>
            {/* Screen */}
            <mesh position={[0, 0.2, -0.34]} rotation={[Math.PI / 3, 0, 0]}>
                <boxGeometry args={[0.75, 0.02, 0.45]} />
                <meshStandardMaterial color="#000" />
            </mesh>
            {/* Keyboard */}
            {Array.from({ length: 4 }, (_, row) =>
                Array.from({ length: 10 }, (_, col) => (
                    <mesh
                        key={`key-${row}-${col}`}
                        position={[-0.31 + col * 0.07, 0.03, -0.15 + row * 0.07]}
                    >
                        <boxGeometry args={[0.06, 0.02, 0.06]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                ))
            )}
            {/* Mouse */}
            <mesh position={[0, 0.03, 0.175]}>
                <boxGeometry args={[0.3, 0.01, 0.12]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </mesh>
    );
};

export default Laptop;
