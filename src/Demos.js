import React, { useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function Demos() {
  // ROUTING
  const location = useLocation();
  const history = useHistory();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleNavClick = (route) => {
    setAnimationTriggered(true);
    setTimeout(() => {
      history.push(route);
      setAnimationTriggered(false);
    }, 500);
  };

  // PARALLAX
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const content = contentRef.current;
      if (content) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (clientX - centerX) / 5;
        const offsetY = (clientY - centerY) / 5;

        content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // DESCRIPTIONS
  const demo1Desc = "The development process of creating an emoji tic-tac-toe game involved several key stages, from conceptualization to implementation and testing. Let's delve into each stage to gain insight into the journey of bringing this game to life. \n The initial phase revolved around conceptualizing the game mechanics and visual design.Tic - tac - toe is a classic game known for its simplicity, making it an ideal candidate for adaptation with emojis.The decision to use cat and dog emojis as symbols ('X' and 'O') added a playful element to the game.\n The foundation of the game was laid with the creation of the HTML structure. Div elements were used to represent the game board and individual cells, providing a grid layout for players to interact with.The inclusion of a restart button allowed for easy resetting of the game state.\n The core functionality of the game was implemented using JavaScript.Event listeners were strategically added to each cell, enabling players to click and make their moves.When a cell is clicked, the handleCellClick function is invoked with the index of the clicked cell as an argument.In the handleCellClick function, the game logic checks if the clicked cell is empty(!cells[index].innerText) and if a winner has not already been determined(!winner).If both conditions are met, the current player's symbol (either a cat or a dog emoji) is displayed in the clicked cell using cells[index].innerText = currentPlayer.\n After a player makes a move, the game logic checks for winning conditions by iterating through an array of winning combinations (winningConditions). For each winning combination, the code compares the symbols in the corresponding cells to determine if they match. If a winning combination is found, the game declares a winner by highlighting the winning cells and updating the winner variable.\n If no winner is found after a players move, the game switches to the next player by toggling the currentPlayer variable between cat and dog emojis (currentPlayer = currentPlayer === '🐱' ? '🐶' : '🐱'). This ensures that players take turns making moves until a winner is determined or the game ends in a draw.\n The game provides a restart button that allows players to reset the game board and start a new game. When the restart button is clicked, the restartGame function is invoked, which clears the symbols from all cells, removes any highlighting from winning cells, resets the currentPlayer variable to the cat emoji, and resets the winner variable to false.\n Aesthetic considerations were addressed through CSS styling, enhancing the visual appeal and user experience of the game.Styling adjustments were made to center the game board, define cell dimensions, and ensure responsive design across different screen sizes and devices.\n I tested various scenarios were explored to ensure smooth gameplay, including testing for winning combinations, draw scenarios (still working on this), and responsive behavior."
                      
  return (
    <>
      {location.pathname === "/" && (
        <motion.div
          id="demos"
          animate={animationTriggered ? { x: -1000 } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span onClick={() => handleNavClick("/demos")} className="text-xl" style={{ cursor: "pointer" }}>
            &larr; Demos
          </span>
        </motion.div>
      )}

      {location.pathname === "/demos" && (
        <>
          <div>
            <motion.div
              initial={{ x: 1500 }}
              animate={animationTriggered === false ? { x: 0 } : { x: 1500 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero">
                <div className="content" ref={contentRef}>
                  <h1>Explore my</h1>
                  <h2>demos</h2>
                </div>
              </div>
              <div className="demos">
                <iframe
                  height="500"
                  scrolling="no"
                  title="Emoji Tic-Tac-Toe"
                  src="https://codepen.io/samanthacabrera/embed/ZEZxZqM?default-tab=html%2Cresult"
                  frameBorder="no"
                  loading="lazy"
                  allowTransparency="true"
                  allowFullScreen="true"
                >
                  See the Pen <a href="https://codepen.io/samanthacabrera/pen/ZEZxZqM">Untitled</a> by Sam Cabrera (
                  <a href="https://codepen.io/samanthacabrera">@samanthacabrera</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
                <p className="py-8">{demo1Desc}</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

export default Demos;









