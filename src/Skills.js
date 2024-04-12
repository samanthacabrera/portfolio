import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Skills() {
  const skills = [
    "React.js",
    "Tailwind",
    "JavaScript",
    "Framer-Motion",
    "HTML",
    "CSS",
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

  const skillRows = chunkSkills(skills, 5);

  const animationControls = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      await animationControls.start({
        y: [10, 0, 10],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      });
    };

    loopAnimation();

    return () => {
      animationControls.stop();
    };
  }, [animationControls]);

  return (
    <div id="skills" className="mx-40">
      <h2 className="text-lg mb-16">Skillset</h2>
      <motion.div
        className="relative overflow-hidden"
      >
        {skillRows.map((row, rowIndex) => (
          <AnimatePresence key={rowIndex}>
            <ul className="flex flex-row justify-between">
              {row.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 20 }}
                  animate={animationControls}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                  className="py-2 px-3 m-10"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
