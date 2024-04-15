import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./App.css";

function Demos() {
  // ROUTING
  const location = useLocation();
  const history = useHistory();

  const handleNavClick = (route) => {
    setTimeout(() => {
      history.push(route);
    }, 500);
  };

  return (
    <>
      {location.pathname === "/" && (
        <span
          onClick={() => handleNavClick("/demos")}
          className="text-xl"
          style={{ cursor: "pointer" }}
        >
          Demos
        </span>
      )}

       {location.pathname === "/" && (
        <>
          <div>      
            <div className="demos flex flex-col px-48">
              <h2 className="demo-title text-2xl text-center mt-10 py-20">Emoji Tic-Tac-Toe</h2>
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
              <div classname="demo-skills">
                <p> Tools I used: Javascript | HTML | CSS </p>
              </div>
              <div className="demo-desc py-10 space-y-5">
                <p>Tic - tac - toe is a classic game known for its simplicity, making it an ideal candidate for adding a playful element to the game. </p>
                <p>The core functionality of the game was implemented using JavaScript. Event listeners were strategically added to each cell, enabling players to click and make their moves. </p>
                <p>When a cell is clicked, the handleCellClick function is invoked with the index of the clicked cell as an argument. In the handleCellClick function, the game logic checks if the clicked cell is empty (!cells[index].innerText) and if a winner has not already been determined (!winner).If both conditions are met, the current player's emoji is displayed in the clicked cell using cells[index].innerText = currentPlayer. </p>
                <p>After a player makes a move, the game logic checks for winning conditions by iterating through an array of winning combinations (winningConditions). If no winner is found after a players move, the game switches to the next player by alternating the currentPlayer variable between cat and dog emojis (currentPlayer = currentPlayer === '🐱' ? '🐶' : '🐱'). </p>
                <p>The game provides a restart button that allows players to reset the game board and start a new game. When the restart button is clicked, the restartGame function is invoked, which clears the symbols from all cells and resets the winner variable to false.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Demos;

