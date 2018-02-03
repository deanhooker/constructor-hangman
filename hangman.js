//declare global variables
const inquirer = require('inquirer');
const Word = require('./Word.js');

//hangman words array
let moviesArray = ['moonlight', 'spotlight', 'birdman', 'argo', 'juno', 'chicago', 'aliens', 'rocky', 'jaws', 'gladiator', 'shrek', 'avatar', 'up', 'inception', 'lincoln', 'interstellar', 'zootopia', 'room', 'cinderella', 'moana', 'superbad', 'fargo', 'aladdin'];

let currentWord;
let guessesLeft;
let lettersLeft;
let wrongGuesses;
let blanksArray = [];
let correctArray = [];

//set up new game
function newWord() {
    //reset game variants
    guessesLeft = 10;
    lettersLeft = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    wrongGuesses = [];
    blanksArray = [];
    correctArray = [];

    //set up word
    let selectedWord = moviesArray[Math.floor(Math.random() * moviesArray.length)];
    currentWord = new Word(selectedWord).lettersArray;

    //create array of blanks
    for (i = 0; i < currentWord.length; i++) {
        blanksArray.push(currentWord[i].blank)
    }

    //create array of letters
    for (i = 0; i < currentWord.length; i++) {
        correctArray.push(currentWord[i].correct)
    }
}

//function checking if user guess is correct and pushing it to the display array if so
function checkGuess(guess) {

    let found = false; //use bool to check if a letter was found
    for (i = 0; i < correctArray.length; i++) {

        if (guess === correctArray[i]) {

            blanksArray[i] = guess;
            found = true;
        }
    }
    //return bool checking if letter is found
    if (found) {
        return found;
    }
}

//function asking for user input then running check guess function
function guessFunction() {
    if (blanksArray.includes("_")) {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: blanksArray.join(' ') + "\n"
            }
        ]).then(function (user) {
            if (lettersLeft.indexOf(user.guess != -1)) {
                lettersLeft.splice(lettersLeft.indexOf(user.guess), 1);
                checkGuess(user.guess);
                guessFunction();
            }
        })
    }
    else {
        console.log("You got it!! \nThe answer was " + blanksArray.join(''));
        hangman();
    }
}    

//game function
function hangman() {

    newWord();

    guessFunction();
};

//lets play!
inquirer.prompt([
    {
        type: "list",
        name: "playGame",
        message: "Movie Hangman!! Would you like to play?",
        choices: ["Yes", "No"]
    }
]).then(function (user) {
    if (user.playGame === "Yes") {
        hangman();
    }
});
