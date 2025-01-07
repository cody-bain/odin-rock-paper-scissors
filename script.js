const playerButtons = document.querySelectorAll("button");
const humanScoreboard = document.querySelector("#human-score");
const computerScoreboard = document.querySelector("#computer-score");
const matchupText = document.querySelector("#matchup");
let humanScore = 0;
let computerScore = 0;

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        humanWin = playRound(getComputerChoice(), button.id);
        tallyScore(humanWin,);

    });
});

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * (3)))];
}

function playRound(computerChoice, humanChoice) {
    let humanWin;
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice == 'rock') { }
            else if (computerChoice == 'paper') { humanWin = false; }
            else if (computerChoice == 'scissors') { humanWin = true; }
            break;
        case "paper":
            if (computerChoice == 'rock') { humanWin = true; }
            else if (computerChoice == 'paper') { }
            else if (computerChoice == 'scissors') { humanWin = false; }
            break;
        case "scissors":
            if (computerChoice == 'rock') { humanWin = false; }
            else if (computerChoice == 'paper') { humanWin = true; }
            else if (computerChoice == 'scissors') { }
            break;
    }

    matchupText.textContent = `Human throws ${humanChoice}! Computer throws ${computerChoice}!`;

    return humanWin;
}

function tallyScore(humanWin) {
    if (humanWin === true) {
        humanScore++;
    }
    else if (humanWin === false) {
        computerScore++;
    }
    console.log(`HUMAN SCORE: ${humanScore}\nCOMPUTER SCORE: ${computerScore}`);

    humanScoreboard.textContent = `Human Score: ${humanScore}`;
    computerScoreboard.textContent = `Computer Score: ${computerScore}`;
}