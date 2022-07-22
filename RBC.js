let randomMove = ["rock", "paper", "scissor"];


function computerChoice() {
    // Return rock, paper, or scissors
    let randomChoice = randomMove[Math.floor(Math.random() * randomMove.length)];
    return randomChoice.toString();
}

function playerChoice(){
    let choice = prompt("Rock, Paper, or Scissors? ")
    if (choice === ''){
        alert("choice must not be empty");
        playerChoice();
    }
    if (choice === 'rock') {
        return 'rock';
    }else if(choice === 'paper') {
        return 'paper';
    }else {
        return 'scissors';
    };
};

let win = 0;
let loss = 0;
let tie = 0;


function gameRound(playerSelection, computerSelection){
    //determines the winner - Rock beats scissors, scissors beats paper, paper beats rock
    if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper') {
        win++;
        alert("Player wins!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'rock') {
        loss++;
        alert("Player loses!");
    } else {
        tie++;
        alert("It's a tie~!");
    }


}
function gamePlay() {
    for (let i=0; i<=5; i++) {
        gameRound(playerChoice(), computerChoice());

    }
    console.log(win,loss,tie);

};

gamePlay();