import React from "react";

function Skills() {
  const skills = [
    "React.js",
    "Tailwind",
    "JavaScript",
    "CSS",
    "HTML",
    "Node",
    "JSON",
    "Postman",
    "Git",
    "SQL",
    "Python",
    "Flask"
  ];

  // Function to chunk the skills array into subarrays of size 5
  const chunkSkills = (arr, size) => {
    return arr.reduce((chunks, element, i) => {
      if (i % size === 0) {
        chunks.push([element]);
      } else {
        chunks[chunks.length - 1].push(element);
      }
      return chunks;
    }, []);
  };

  const skillRows = chunkSkills(skills, 2);

  return (
    <div className="text-center space-y-20 md:p-40 p-12">
      <h2 className="subHeading lowercase md:text-9xl text-7xl">Skillset</h2>

      {skillRows.map((row) => (
        <ul className="flex flex-row justify-between">
          {row.map((skill) => (
            <li>
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Skills;
