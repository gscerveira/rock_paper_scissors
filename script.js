let options = ["Rock", "Paper", "Scissors"];

/*make buttons for player selection, afterwards create a new "step", where the player selects an opponent, this selection
    will play the round*/

let winStatements = [`${options[0]} beats ${options[2]}.`, `${options[1]} beats ${options[0]}.`,
`${options[2]} beats ${options[1]}.`];

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
    let playerWin = `${playerChoice} beats ${computerChoice}.`
    let computerWin = `${computerChoice} beats ${playerChoice}.`

    if (winStatements.includes(playerWin)) {
        let result = "You won! " + playerWin;
        return result;
    }

    else if (winStatements.includes(computerWin)) {
        let result = "You lost! " + computerWin;
        return result;
    }

    else if (computerChoice === playerChoice) {
        let result = "Stalemate!";
        return result;
    }

    else {
        let result = "Unsupported input."
        return result;
    }
}

function game () {
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
}

game();