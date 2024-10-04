import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Skills() {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "CSS",
    "HTML",
    "Postman",
    "Git",
    "SQL",
    "Python",
    "Flask",
    "Cloudflare",
    "Vite"
  ];

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
    <FadeInSection>
    <div className="container space-y-10 text-center sm:text-left">
      <h2 className="sub-heading">Skillset</h2>

      <p>Below is  a comprehensive list of tools I use daily in my projects: </p>

      {skillRows.map((row) => (
        <ul className="flex flex-row justify-between">
          {row.map((skill) => (
            <li className="hover:text-slate-200 hover:scale-105 transition duration-500">
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
    </FadeInSection>
  );
}

export default Skills;
