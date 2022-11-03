let options = ["Rock", "Paper", "Scissors"];

const gameStart = document.querySelector(".gameStart");
const gamePlay = document.querySelector(".gamePlay");
const playerWin = document.querySelector(".playerWin");
const playerLoss = document.querySelector(".playerLoss");

addEventListener('load', () => {gameStart.classList.toggle("hidden")});

const startBtn = document.querySelector('#startBtn');

startBtn.addEventListener('click', () => (startGame()));

const roundResult = document.createElement('div');
document.querySelector(".optButtons").after(roundResult);


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => playRound(getComputerChoice(), "Rock"));
btnPaper.addEventListener('click', () => playRound(getComputerChoice(), "Paper"));
btnScissors.addEventListener('click', () => playRound(getComputerChoice(), "Scissors"));

const winModal = document.querySelector("#winModal");

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let computerChoice = options[getRndInteger(0, 2)];
    return computerChoice;
}

/*function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}*/

function startGame() {
    gameStart.classList.toggle("hidden");
    gamePlay.classList.toggle("hidden");
}

let chancesLeft = 10;
let rightGuesses = 0;
document.querySelector("#rightGuesses").textContent = `Right Guesses: ${rightGuesses}`;
document.querySelector("#chancesLeft").textContent = `Chances Left: ${chancesLeft}`;

function playRound(computerChoice, playerChoice) {
    let result;
    if (computerChoice === playerChoice) {
        result = `Yes! I was thinking of ${playerChoice}!`;
        rightGuesses++;
        document.querySelector("#rightGuesses").textContent = `Right Guesses: ${rightGuesses}`;
    }
    else {
        result = `No! I was thinking of ${computerChoice}!`;
        chancesLeft--;
        document.querySelector("#chancesLeft").textContent = `Chances Left: ${chancesLeft}`;
    }
    
    roundResult.textContent = result;
    endGame(rightGuesses, chancesLeft);
}

function endGame(rightGuesses, chancesLeft) {
    if (rightGuesses === 5) {
        // Go to win form (to insert wish)
    }
    else if (chancesLeft === 0) {
        // Append text "You lost, no wish for you!"
    }
}

/*function game () {
    let pointsCounter = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getComputerChoice(), getPlayerChoice());
        if (result.includes("won")) {
            pointsCounter += 1;
        }
        else if (result.includes("lost")) {
            pointsCounter -= 1;
        }
        console.log(result)
    }

    if (pointsCounter > 0) {
        console.log("Player wins!");
    }
    else if (pointsCounter < 0) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a draw!");
    }
}*/