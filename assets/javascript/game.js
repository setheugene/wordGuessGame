window.onload = function () {

//computer picks random word
    var computerWords = ["cat", "dog", "dolphin", "bear", "shark"];
    var word = computerWords[Math.floor(Math.random() * computerWords.length)];

//loop for filling in answer
var blank = [];
for (var i = 0; i < word.length; i++) {
blank[i] = "_";
}

var remainingLetters = word.length;

// console.log (remainingLetters);

//player needs to see score
var wins = 0;
//player needs to see empty spaces filling in and guesses left and guessed
var blank = word;
var guessesRemaining = 10;
var userInput = [];

//record guess
document.onkeyup = function(event) {
    var userInput = event.key;


//if guess is correct update blank var
if (userInput === word) {
    //word fills in blank var
}

else if (userInput !== word) {
    //take away guesses remaining
guessesRemaining --;
    //update guessed letters
}
}

//win alert
console.log (userInput);


//change text accordingly
var winsText = document.getElementById("wins-text");
var blankText = document.getElementById("blank-text");
var guessesRemainingText = document.getElementById("number-text")
var userInput = document.getElementById("lettersGuessed-text")

winsText.textContent = "wins: " + wins;
blankText.textContent = blank;
guessesRemainingText.textContent = guessesRemaining;
userInput.textcontent = userInput;}
