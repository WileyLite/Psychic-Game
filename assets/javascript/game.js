// declare variables
var guesses = []

var guessesLeft = 9;

var wins = 0;

//use math.random method with stringfcc method to put random number

var shangsGuess =
    String.fromCharCode(Math.round(Math.random() * 26) + 97
    );

console.log(shangsGuess);

//function to take user key input and make lowercase

document.onkeydown = function (event) {

    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    //document.getElementById('guess').innerHTML = keypress

    addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to guesses string

function addLetter(usersKeypress) {

    var repeatGuess = guesses.some(function (item) {

        return item === usersKeypress
    })

    //alert player if the above code is true

    if (repeatGuess) {
        alert(usersKeypress + " Fool! GUESS AGAIN");

        //if not a repeat guess, check if its in word

    } else {
        guesses.push(usersKeypress);

        console.log(guesses);

        //show user key in game

        showGuesses();

        guessSame(usersKeypress);
    }
}

//function to show letters guessed

function showGuesses() {
    var showInBrows = guesses.join(',');
    document.getElementById('playersGuesss').innerHTML = showInBrows;
    console.log("showGuesses")
}

function guessSame(character) {
    console.log(character)
    console.log(shangsGuess)

    if (character === shangsGuess) {
        alert('Flawless Victory')
        wins = wins + 1;
        showWins()


    } else if (guessesLeft === 0) {
        alert('HAHA FOOL!!!! Your Soul is miine!');
        resetVariable();


    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

function showWins() {
    document.getElementById('numWin').innerHTML = wins;
}

// function to show guesses

function showGuessesRemaining() {
    document.getElementById('numGuesses').innerHTML = guessesLeft;

}

function startgame() {
    showGuessesRemaining();
    showWins();
}

startgame();