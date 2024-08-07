import React from "react";

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
    <div className="container space-y-10 md:space-y-20">
      <h2 className="subHeading text-center lowercase md:text-9xl text-7xl">Skillset</h2>

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
  );
}

export default Skills;
