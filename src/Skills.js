import React from "react";

function Skills() {
   const skills = [
    "React.js",
    "Tailwind",
    "JavaScript",
    "CSS",
    "HTML",
    "Framer-Motion",
    "Responsive UI",
    "Node",
    "Express",
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
    <>
        <div id="skills">
          <h2 className="subHeading font-bold text-9xl lowercase">Skillset</h2>
       
             {skillRows.map((row) => (
                 <ul className="flex flex-row justify-between">
                 {row.map((skill) => (
                     <li className="py-2 px-3">
                       {skill}
                     </li>
                   ))}
                 </ul>
             ))}
       </div>          
    </>
  );
}

export default Skills;
