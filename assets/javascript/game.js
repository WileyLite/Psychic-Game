// create variable that randomly picks a letter character, remember varchar
// create variables for other aspects of games

let letter = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = letter[Math.floor(Math.random() * letter.length)];
var letterGuess = document.querySelector(".guesses");

var guessPro = 9;
var guesses = document.querySelector("guesses");
let guessesCount = 0;

// console.log(letter.length);

// for (var i = 0; i < letter.length; i++) {
//   if (letterGuess === computerGuess) {
//     winPro;
//     i++;
//   }
// }
//I searched through mdn to find the answers to some issues I was having
function checkGuess() {
  let letterGuess = letter(guesses.value);
  if (guessesCount === 0) {
      guessPro.textContent = 'Guessed so far: ';
  }
  guessPro.textContent += guesses + ' ';

  if (letterGuess === computerGuess) {
      guesses.textContent = 'You Rock My Guy!';
      setGameOver();
  } else if (guessesCount === 9) {
      guesses.textContent = "!!!You Aren't a Psychic my Guy!!!"
      setGameOver();
  } else {
      guesses.textContent = "Wrong!";
      if(letterGuess != computerGuess) {
        guessPro--;

      }
  }
  guessesCount++;
  guesses.value = '';
  guesses.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guesses.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessesCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guesses.disabled = false;
    guessSubmit.disabled = false;
    guesses.value = '';
    //focus allow user to not have to navigate to letter input text field when page is loaded/refreshed
    guessField.focus();

    computerGuess = letter[Math.floor(Math.random() * letter.length)];
}