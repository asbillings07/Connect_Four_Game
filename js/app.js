// creates a new game
const game = new Game();

const startGame = document.getElementById("begin-game");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.setAttribute("id", "reset-game");
startGame.after(resetButton);
resetButton.style.display = "none";

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

startGame.addEventListener("click", () => {
  game.startGame();
  startGame.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener("keydown", e => {
  game.handleKeydown(e);
});

resetButton.addEventListener("click", () => {
  game.resetGame();
});
