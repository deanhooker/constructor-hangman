//declare variables
const inquirer = require('inquirer');
const NewWord = require('./NewWord.js');

let moviesArray = ['moonlight', 'spotlight', 'birdman', 'argo', 'juno', 'chicago', 'aliens', 'rocky', 'jaws', 'gladiator', 'shrek', 'avatar', 'up', 'inception', 'lincoln', 'interstellar', 'zootopia', 'room', 'cinderella', 'moana', 'superbad', 'fargo', 'aladdin'];
let guessesLeft; //will be set to 10

//choose word for user to guess
let moonlight = new NewWord("moonlight");

console.log(moonlight.lettersArray[0].blank);

// generate underscores

// prompt user guess

// if guess is correct replace underscore with letter
// if wrong no. of guesses remaining --

// prompt next user guess until all letters guessed
// display word and congratulatory message
// next word

// or

// if guesses remaining = 0 prompt user if they would like to end game