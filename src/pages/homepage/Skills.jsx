import React from "react";
import FadeInSection from "/Users/samanthacabrera/webDev/portfolio/src/utils/FadeIn.jsx";

function Skills() {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "CSS",
    "HTML",
    "Node",
    "JSON",
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
    <div className="container space-y-10 ">
      <h2 className="sub-heading">Skillset</h2>

      <p>With a strong foundation in both front-end and back-end development, I leverage a diverse set of tools and technologies to build efficient, scalable, and user-friendly web applications. Below is  a comprehensive list of tools I use daily in my projects: </p>

      {skillRows.map((row) => (
        <ul className="flex flex-row justify-between text-base md:text-xl">
          {row.map((skill) => (
            <li>
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
