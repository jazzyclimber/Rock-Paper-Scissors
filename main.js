
//Set global Constants
const options = ["rock", "paper", "scissors"]
let round = 1;
let playerScore = 0;
let computerScore = 0;

//Computer's Random Choice
function computerPlay() {
  randNum = Math.floor(Math.random() * 3);
  return options[randNum];
}

//One round of thg game
function playRound(playerSelection, computerSelection) {

  // playerSelection = prompt('Rock, paper, or scissors?');
  computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    alert("It's a tie\! No points awarded\.");
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
  playerSelection === "paper" && computerSelection === "rock" ||
  playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    $("#player-score").empty().append('Player Score \= ' + playerScore);
    alert("You Win\! One point for player\.");
  } else {
    computerScore++;
    $("#computer-score").empty().append('Computer Score \= ' + computerScore);
    alert("You Lose\! One point for computer\.");
  }

  round++

  $("#round").empty().append("Round\: " + round);
  if (playerScore === 3 || computerScore === 3 ) {
    if (playerScore === 3) {
      alert("Congratulations\! You have defeated the computer\!");
    }
    else {
      alert("Oh no\! You have been defeated by the computer\.");
    }
  } else {
    return
  }
}

//Initiates one play round on click of button
function play(e) {
  let playerSelection = e.target.attributes[2].value;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

//Sets an event listener for click of button so play() can be called. 
var buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', play));
