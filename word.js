const inquirer = require('inquirer');
const Letter = require('./letter.js');
const letterInWord = new Letter();
let guessedLetters = [];
const allUserChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letterInWord.randomWord();

function Word() {
  this.guess = function(guess) {
    if (guessedLetters.indexOf(guess) < 0 && allUserChoices.indexOf(guess) >= 0) {
      letterInWord.userGuess(guess);
      guessedLetters.push(guess);
    }
  }

}

const gameWord = new Word();

function runGame() {
  if (letterInWord.chances > 0) {
    inquirer.prompt([
      {
        type: "input",
        message: "Guess a Letter",
        name: "userGuess"
      }
    ]).then(function (answers) {
      gameWord.guess(answers.userGuess);
      if (letterInWord.underscore.join("") === letterInWord.wordToGuess) {
        inquirer.prompt([
          {
            type: "input",
            message: "Nice!. Would you like to play again? y/n ",
            name: "play"
          }
        ]).then(function(answers) {
          if (answers.play === "y") {
            letterInWord.newWord();
            letterInWord.randomWord();
            letterInWord.chances = 10;
            guessedLetters = [];
            runGame();
          }
          else {
            console.log("Great game! Come back anytime for a rematch");
          }
        });
      }
      else {
        runGame();
      }

    });
  }
  else {
    inquirer.prompt([
      {
        type: "input",
        message: "Sorry you lost. Would you like to play again? y/n ",
        name: "play"
      }
    ]).then(function(answers) {
      if (answers.play === "y") {
        letterInWord.newWord();
        letterInWord.randomWord();
        letterInWord.chances = 10;
        guessedLetters = [];
        runGame();
      }
      else  {
        console.log("Better luck next time!");
      }
    })
  }
}

runGame();
