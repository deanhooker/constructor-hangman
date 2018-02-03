//declare variables
const inquirer = require('inquirer');
const Word = require('./Word.js');

let moviesArray = ['moonlight', 'spotlight', 'birdman', 'argo', 'juno', 'chicago', 'aliens', 'rocky', 'jaws', 'gladiator', 'shrek', 'avatar', 'up', 'inception', 'lincoln', 'interstellar', 'zootopia', 'room', 'cinderella', 'moana', 'superbad', 'fargo', 'aladdin'];

let currentWord;
let guessesLeft;
let lettersLeft;
let wrongGuesses;
let blanksArray = [];
let correctArray = [];

function newWord() {
    //set game variants
    guessesLeft = 10;
    lettersLeft = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    wrongGuesses = [];

    //set up word
    let selectedWord = moviesArray[Math.floor(Math.random() * moviesArray.length)];
    currentWord = new Word(selectedWord).lettersArray;

    for (i = 0; i < currentWord.length; i++) {
        blanksArray.push(currentWord[i].blank)
    }

    for (i = 0; i < currentWord.length; i++) {
        correctArray.push(currentWord[i].correct)
    }
}

function hangman() {

    newWord();
    console.log(blanksArray);
    console.log(correctArray);

    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: blanksArray.join(' ') + "\n"
        }
    ]).then(function (user) {
        if (lettersLeft.indexOf(user.guess != -1)) {
            lettersLeft.splice(lettersLeft.indexOf(user.guess), 1);
            console.log(lettersLeft);
        }
    })

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
