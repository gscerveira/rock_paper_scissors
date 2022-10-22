let options = ["Rock", "Paper", "Scissors"];

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let computerChoice = options[getRndInteger(0, 2)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    let result;
    if (computerChoice === playerChoice) {
        result = `Yes! I was thinking of ${playerChoice}!`;
    }
    else {
        result = `No! I was thinking of ${computerChoice}!`;
    }
    
    roundResult.textContent = result;
}

const roundResult = document.createElement('div');
document.querySelector("body").appendChild(roundResult);


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound(getComputerChoice(), "Rock"));
btnPaper.addEventListener('click', playRound(getComputerChoice(), "Paper"));
btnScissors.addEventListener('click', playRound(getComputerChoice(), "Scissors"));

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