// create variable that randomly picks a letter character, remember varchar
// create variables for other aspects of games

let letter = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = letter[Math.floor(Math.random() * letter.length)];
var letterGuess = document.querySelector(".guesses");

var guessPro = document.querySelector(".guessPro");
var guesses = document.querySelector("guesses");
let guessesCount = 0;

// console.log(letter.length);

// for (var i = 0; i < letter.length; i++) {
//   if (letterGuess === computerGuess) {
//     winPro;
//     i++;
//   }
// }

function checkGuess() {
  let letterGuess = letter(guesses.value);
  if (guessesCount === 0) {
      guessPro.textContent = 'Guessed so far: ';
  }
  guessPro.textContent += guesses + ' ';
}
