import React from "react";

const Notebook = ({ onClick }) => {
  return (
    <mesh position={[1.2, 0.05, 0]} onClick={onClick}>
      <boxGeometry args={[0.4, 0.05, 0.6]} />
      <meshStandardMaterial color="#99ccff" />
    </mesh>
  );
};

export default Notebook;
