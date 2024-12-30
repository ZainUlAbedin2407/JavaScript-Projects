// Initially declare variables
let player1Name;
let player2Name;
let currentScorePlayer1 = 0;
let finalScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let finalScorePlayer2 = 0;
let currentPlayer = 1;

// DOM elements
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const currentScoreOfPlayer1 = document.getElementById("currentScoreOfPlayer1");
const currentScoreOfPlayer2 = document.getElementById("currentScoreOfPlayer2");
const finalScoreOfPlayer1 = document.getElementById("finalScoreOfPlayer1");
const finalScoreOfPlayer2 = document.getElementById("finalScoreOfPlayer2");
const newGame = document.getElementById("new-game");
const rollDice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

// Function to get player names and set them
function getPlayerNames() {
    player1Name = prompt("Player 1 Name");
    player2Name = prompt("Player 2 Name");
    
    // Set default names if user cancels prompt or enters empty string
    player1Name = player1Name || "Player 1";
    player2Name = player2Name || "Player 2";
    
    // Update the display with player names
    player1.innerHTML = player1Name;
    player2.innerHTML = player2Name;
}

// Function to restart game
function restartGame() {
    // Reset all scores
    currentScorePlayer1 = 0;
    finalScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    finalScorePlayer2 = 0;
    currentPlayer = 1;
    
    // Reset score displays
    currentScoreOfPlayer1.textContent = "0";
    finalScoreOfPlayer1.textContent = "0";
    currentScoreOfPlayer2.textContent = "0";
    finalScoreOfPlayer2.textContent = "0";
    
    // Reset visuals
    dice.style.visibility = "hidden";
    box1.style.backgroundColor = "#af6e8e";
    box2.style.backgroundColor = "transparent";
    
    // Get new player names
    getPlayerNames();
}

// Initialize the game when the page loads
getPlayerNames();

function rollingDice() {
  let randomImage = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute("src", `${randomImage}-removebg-preview.png`);
  dice.style.visibility = "visible";

  if (randomImage === 1) {
    if (currentPlayer === 1) {
      currentScorePlayer1 = 0;
      currentScoreOfPlayer1.textContent = "0";
      currentPlayer = 2;
      box1.style.backgroundColor = "transparent";
      box2.style.backgroundColor = "#af6e8e";
    } else {
      currentScorePlayer2 = 0;
      currentScoreOfPlayer2.textContent = "0";
      currentPlayer = 1;
      box2.style.backgroundColor = "transparent";
      box1.style.backgroundColor = "#af6e8e";
    }
  } else {
    if (currentPlayer === 1) {
      currentScorePlayer1 += randomImage;
      currentScoreOfPlayer1.textContent = currentScorePlayer1;
      box1.style.backgroundColor = "#af6e8e";
      box2.style.backgroundColor = "transparent";
      // Check if Player 1 has won by rolling
      if (currentScorePlayer1 + finalScorePlayer1 >= 100) {
        alert(player1Name + " Wins!");
        restartGame();
      }
    } else {
      currentScorePlayer2 += randomImage;
      currentScoreOfPlayer2.textContent = currentScorePlayer2;
      box2.style.backgroundColor = "#af6e8e";
      box1.style.backgroundColor = "transparent";
      // Check if Player 2 has won by rolling
      if (currentScorePlayer2 + finalScorePlayer2 >= 100) {
        alert(player2Name + " Wins!");
        restartGame();
      }
    }
  }
}

function holdPoints() {
  if (currentPlayer === 1) {
    finalScorePlayer1 += currentScorePlayer1;
    finalScoreOfPlayer1.textContent = finalScorePlayer1;
    currentScorePlayer1 = 0;
    currentScoreOfPlayer1.textContent = "0";
    currentPlayer = 2;
    box1.style.backgroundColor = "transparent";
    box2.style.backgroundColor = "#af6e8e";
  } else {
    finalScorePlayer2 += currentScorePlayer2;
    finalScoreOfPlayer2.textContent = finalScorePlayer2;
    currentScorePlayer2 = 0;
    currentScoreOfPlayer2.textContent = "0";
    currentPlayer = 1;
    box2.style.backgroundColor = "transparent";
    box1.style.backgroundColor = "#af6e8e";
  }

  if (finalScorePlayer1 >= 100) {
    alert(player1Name + " wins!");
    restartGame();
  } else if (finalScorePlayer2 >= 100) {
    alert(player2Name + " wins!");
    restartGame();
  }
}
