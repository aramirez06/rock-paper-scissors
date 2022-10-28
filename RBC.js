let randomMove = ["rock", "paper", "scissor"];


function computerChoice() {
    // Return rock, paper, or scissors
    let randomChoice = randomMove[Math.floor(Math.random() * randomMove.length)];
    return randomChoice.toString();
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === "rock"){
            gameRound("rock", computerChoice());
           
        } else if (button.id === "paper") {
            gameRound("paper", computerChoice());
            
        } else if (button.id === "scissor") {
            gameRound("scissor", computerChoice());
            
        }
    });
});

let win = 0;
let loss = 0;
let tie = 0;


function gameRound(playerSelection, computerSelection){
    //determines the winner - Rock beats scissors, scissors beats paper, paper beats rock
    if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper') {
        win++;
        gamePlay();
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'rock') {
        loss++;
        gamePlay();
    } else {
        tie++;
        gamePlay();
    }


}

const container = document.querySelector('#scores');
const wins = document.createElement('div');
const loses = document.createElement('div');
const ties = document.createElement('div');

wins.classList.add('wins');
loses.classList.add('loses');
ties.classList.add('ties');

container.appendChild(wins);
container.appendChild(loses);
container.appendChild(ties);
function gamePlay() {
    wins.textContent = 'Wins: ' + win;
    loses.textContent = 'Loses: ' + loss;
    ties.textContent = 'Ties: ' + tie;
    if (win === 5) {
        gameOver();
        alert("You are the winner!");
    } else if (loss === 5) {
        gameOver();
        alert("You are the loser!");
    } else if (tie === 5) {
        gameOver();
        alert("Tie game!");
    }
}

function gameOver() {
    win = 0;
    loss = 0;
    tie = 0;
}



