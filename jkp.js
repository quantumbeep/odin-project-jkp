let playerScore = 0;
let comScore = 0;

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

const playRound = (playerSelection, computerSelection, i) => {
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    console.log(
      `Round ${
        i + 1
      } is a tie! Current score: Player ${playerScore} - Com ${comScore}`
    );
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    console.log(
      `player wins Round ${
        i + 1
      } Current score: Player ${playerScore} - Com ${comScore}`
    );
  } else {
    comScore++;
    console.log(
      `player loses Round ${
        i + 1
      } Current score: Player ${playerScore} - Com ${comScore}`
    );
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt(
      'type your choice of rock, paper, or scissors. just like in real life, if your choice is not clear, you lose.'
    );
    let playerSelection = cleanInput(playerInput);
    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection, i);
  }
  if (playerScore > comScore) {
    return `you win! ${playerScore} to ${comScore}`;
  } else {
    return `you loser! ${playerScore} to ${comScore}`;
  }
};
