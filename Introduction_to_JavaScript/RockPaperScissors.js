const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput==='rock'|| userInput==='paper'|| userInput==='scissors') {
    return userInput;
  } else {
    console.log('error');
  }
};
// console.log(getUserChoice('Paper'));
// console.log(getUserChoice('fork'));
const getComputerChoice = () => {
  number=Math.floor(Math.random()*3);
  let choice = '';
  switch (number){
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }
  return choice;
}
// console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  };
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer win.';
    } else {
      return 'You win.';
    }
  };
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer win.';
    } else {
      return 'You win.';
    }
  };
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer win.';
    } else {
      return 'You win.';
    }
  };
}
  
// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'


const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();