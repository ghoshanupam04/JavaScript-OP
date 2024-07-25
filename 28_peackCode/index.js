const random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let Prevguess = [];
let numofGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (eve) {
    eve.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number.');
  } else if (guess < 1) {
    alert('please enter a valid number more than 1.');
  } else if (guess > 100) {
    alart('please enter a valid number less than 100.');
  } else if (guess > 1) {
    alert('please enter a valid number.');
  } else {
    Prevguess.push(guess);
    if (numofGuess == 11) {
      guessDisplay(guess);
      displaymsg(`game over, random number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displaymsg(`Your gussed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displaymsg('Your Guss number is too low');
  } else if (guess > randomNumber) {
    displaymsg(`Your Guess umber is too high`);
  }
}

function guessDisplay(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numofGuess++;
  remaining.innerHTML = `${11 - numofGuess}`;
}

function displaymsg(message) {
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgame = document.querySelector('#newGame');
  newgame.addEventListener('click', function (eve) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    Prevguess = [];
    numofGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numofGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
