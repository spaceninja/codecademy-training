const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid User Choice!');
  }
}

const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'error';
      break;
  }
}

const determineWinner = (player1, player2) => {
  if(player1 === player2) {
    return 'Tie!';
  } else if(player1 === 'rock') {
    if(player2 === 'paper') {
      return 'Player 2 Wins!';
    } else {
      return 'Player 1 Wins!';
    }
  } else if(player1 === 'paper') {
    if(player2 === 'scissors') {
      return 'Player 2 Wins!';
    } else {
      return 'Player 1 Wins!';
    }
  } else if(player1 === 'scissors') {
    if(player2 === 'rock') {
      return 'Player 2 Wins!';
    } else {
      return 'Player 1 Wins!';
    }
  } else if(player1 === 'bomb') {
    return 'Player 1 Wins!';
  } else {
    return 'Invalid User Choice!';
  }
}

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  userChoice = getUserChoice(userChoice);
  console.log(`Human Player 1 chose ${userChoice}.`);
  console.log(`Computer Player 2 chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('BOMB');
