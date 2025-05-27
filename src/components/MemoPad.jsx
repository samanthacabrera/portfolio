import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MemoPad = (props) => {
  const groupRef = useRef();

  // Optional subtle floating animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Memo Pad */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.02, 0.15]} />
        <meshStandardMaterial color="#f9e79f" /> 
      </mesh>

      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 0.01 + i * 0.003, -0.005 * i]}
          rotation={[0, 0, 0.01 * i]}
        >
          <boxGeometry args={[0.19, 0.005, 0.14]} />
          <meshStandardMaterial
            color="#f9e79f"
          />
        </mesh>
      ))}

      {/* Cup */}
        <group position={[0.25, 0.04, 0]}>
        {/* Outer wall */}
        <mesh>
            <cylinderGeometry args={[0.07, 0.07, 0.12, 32, 1, true]} />
            <meshStandardMaterial color="#d7dbdd" side={THREE.DoubleSide} />
        </mesh>
        
        {/* Inner wall - optional for visual depth */}
        <mesh scale={[0.95, 1, 0.95]}>
            <cylinderGeometry args={[0.065, 0.065, 0.12, 32, 1, true]} />
            <meshStandardMaterial color="#ffffff" side={THREE.BackSide} transparent opacity={0.5} />
        </mesh>

        <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.001, 0.07, 32]} />
        <meshStandardMaterial color="#d7dbdd" side={THREE.DoubleSide} />
        </mesh>
        </group>


       {/* Black Pen */}
       <group position={[0.25, 0.15, -0.015]} rotation={[Math.PI / 20, 0.1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.008, 0.008, 0.15]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.075, 0]}>
          <coneGeometry args={[0.008, 0.03, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>

      {/* Blue Pen */}
      <group position={[0.24, 0.14, 0.015]} rotation={[Math.PI / 20, -0.1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.008, 0.008, 0.15]} />
          <meshStandardMaterial color="#1f618d" />
        </mesh>
        <mesh position={[0, 0.075, 0]}>
          <coneGeometry args={[0.008, 0.03, 16]} />
          <meshStandardMaterial color="#154360" />
        </mesh>
      </group>

      {/* Yellow Pencils */}
      {[[-0.01, 0], [0.01, 0], [0, 0.01]].map(([x, z], i) => (
        <group
          key={i}
          position={[0.26 + x, 0.15, z]}
          rotation={[Math.PI / 20 + 0.1 * i, 0, Math.PI + 0.1 * i]}
        >
          {/* Body */}
          <mesh>
            <cylinderGeometry args={[0.005, 0.005, 0.14]} />
            <meshStandardMaterial color="#f4d03f" />
          </mesh>
          {/* Eraser */}
          <mesh position={[0, -0.07, 0]}>
            <cylinderGeometry args={[0.0055, 0.0055, 0.01]} />
            <meshStandardMaterial color="#c0392b" />
          </mesh>
          {/* Ferrule */}
          <mesh position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.0058, 0.0058, 0.005]} />
            <meshStandardMaterial color="#bdc3c7" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default MemoPad;
