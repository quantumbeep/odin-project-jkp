// const rock = 0;
// const paper = 1;
// const scissors = 2;
const numOfChoices = 3;
let playerScore = 0;
let comScore = 0;
let playerInput = 'rock'; //hardcode input temporarily for testing

const computerPlay = (numOfChoices) => {
  const num = Math.floor(Math.random() * numOfChoices);
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
    return 'bad input';
  }
};

const computerSelection = computerPlay(numOfChoices);
const playerSelection = cleanInput(playerInput);

const playRound = (playerSelection, computerSelection) => {
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    playerScore++;
    comScore++;
    console.log('tie!');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    console.log(`player wins this round and has ${playerScore} points`);
  } else {
    comScore++;
    console.log(`player loses this round and has ${playerScore} points`);
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    cleanInput(playerInput);
    computerPlay(numOfChoices);
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > comScore) {
    return `you win! ${playerScore} to ${comScore}`;
  } else {
    return `you loser! ${playerScore} to ${comScore}`;
  }
};
