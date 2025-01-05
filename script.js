function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * (3)))];
}

function getHumanChoice() {
    let userChoice = prompt("rock, paper, or scissors?");
    return userChoice;
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
    return humanWin;
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    for (let index = 0; index < 5; index++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        humanWin = playRound(computerChoice, humanChoice);
        if (humanWin === true) {
            console.log(`${humanChoice} beats ${computerChoice}, you win!`);
            humanScore++;
        }
        else if (humanWin === false) {
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
            computerScore++;
        }
        else { console.log(`${humanChoice} ties ${computerChoice}, draw!`); }
        console.log(`HUMAN SCORE: ${humanScore}\nCOMPUTER SCORE: ${computerScore}`);
    }
    if (humanScore != computerScore) { console.log("The winner is: " + (humanScore > computerScore ? "Human!" : "Computer!")); }
    else { console.log("It's a tie! No winner"); }
}

playGame();
