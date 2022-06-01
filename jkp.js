let playerScore = 0;
let comScore = 0;
let round = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});
const createScoreBanner = () => {
  const top = document.querySelector('#top');
  const content = document.createElement('div');
  content.setAttribute('style', 'color:magenta; background:black;');
  content.classList.add('content');
  content.textContent = `${playerScore} to ${comScore}`;
  top.appendChild(content);
};

const resetGame = () => {
  playerScore = 0;
  comScore = 0;
  round = 0;
};
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

// const cleanInput = (playerInput) => {
//   let x = playerInput.toLowerCase();
//   if (x === 'rock' || x === 'paper' || x === 'scissors') {
//     return x;
//   } else {
//     return null;
//   }
// };

const playRound = (playerSelection) => {
  createScoreBanner();
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
    createScoreBanner();
    resetGame();
  } else if (comScore === 5) {
    createScoreBanner();
    resetGame();
  } else {
    return;
  }
};

const game = () => {};
