import React from "react";

const Trash = () => {
  const trashItems = [
    "chakra_flow_draft.txt",
    "crochet_poncho_pattern.txt",
  ];

  return (
    <div className="flex flex-col text-white space-y-4">

      <ul className="space-y-2 text-black">
        {trashItems.map((item, index) => (
          <li key={index}>📄 {item}</li>
        ))}
      </ul>

    </div>
  );
};

export default Trash;
