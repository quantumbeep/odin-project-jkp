let playerScore = 0;
let comScore = 0;
let round = 0;

const computerPlay = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const cleanInput = (playerInput) => {
  let x = playerInput.toLowerCase();
  if (x === 'rock' || x === 'paper' || x === 'scissors') {
    return x;
  } else {
    return null;
  }
};

const playRound = (playerSelection) => {
  round++;
  let computerSelection = computerPlay();

  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    console.log(
      `Round ${round} is a tie! Current score: Player ${playerScore} - Com ${comScore}`
    );
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    console.log(
      `player wins Round ${round} Current score: Player ${playerScore} - Com ${comScore}`
    );
  } else {
    comScore++;
    console.log(
      `player loses Round ${round} Current score: Player ${playerScore} - Com ${comScore}`
    );
  }

  if (playerScore === 5) {
    console.log(`you win! ${playerScore} to ${comScore}`);
  } else if (comScore === 5) {
    console.log(`you loser! ${playerScore} to ${comScore}`);
  } else {
    return;
  }
};

const game = () => {};
