const wordChoices = ['dog', 'cat', 'fish', 'snake', 'mouse', 'owl'];

let wins = 0;
let losses = 0;

//uninitiated variable
let underscore;

//constructor
function Letter() {

  this.chances = 10;
  this.wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];
  this.underscore = underscore;

  // using new keyword
  this.newWord = function() {
    this.wordToGuess = wordChoices[Math.floor(Math.random() * (wordChoices.length))];
  };

  this.randomWord = function () {
    //converts to _
    this.underscore = Array.from('_'.repeat(this.wordToGuess.length));
    console.log(this.underscore.join(' '));
  };

  this.userGuess = function (guess) {
    const splitWord = this.wordToGuess.split("");

    if (splitWord.includes(guess) === true) {
      for (let i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === guess) {
          ////array.splice(index, howmany, item1, ....., itemX)
          this.underscore.splice(i, 1, guess);

        }
      }
      console.log(this.underscore.join(' '));
    }
    else {
      this.chances--;
      console.log(`Guesses Left: ${this.chances}`);
      if (this.chances === 0) {
        losses++;
        console.log(`Losses: ${losses}`);
      }
    }

    if (this.underscore.join("") === this.wordToGuess) {
      wins++;
      console.log(`Wins: ${wins}`);
    }
  }
}


module.exports = Letter;
