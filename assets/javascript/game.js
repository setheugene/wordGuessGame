window.onload = function () {

//computer picks random word
    var computerWords = ["cat", "dog", "dolphin", "bear", "shark"];
    var word = computerWords[Math.floor(Math.random() * computerWords.length)];
console.log(word);


var blank = "";

wordArray = word.length
//wordLetters =

//wordArray is equal to word letters
var wordArray = function () {for (var i = 0; i < word.length; i++) {
    blank[i] = "_";

}
console.log(blank);


var remainingLetters = word.length;

console.log (remainingLetters);

//player needs to see score
var wins = 0;
//player needs to see empty spaces filling in and guesses left and guessed

var guessesRemaining = 10;




//record guess
document.onkeyup = function(event) {

    var userInput = event.key;

//if guess is correct update blank var
if (userInput === wordArray) {
    //word fills in blank var
}

else if (userInput !== wordArray) {
    //take away guesses remaining
guessesRemaining --;
    //update guessed letters
}
}

console.log (userInput);

//win alert



//change text accordingly
var winsText = document.getElementById("wins-text");
var blankText = document.getElementById("blank-text");
var guessesRemainingText = document.getElementById("number-text");
var userInput = document.getElementById("lettersGuessed-text");

winsText.textContent = "wins: " + wins;
blankText.textContent = wordArray;
guessesRemainingText.textContent = guessesRemaining;
userInput.textcontent = userInput;
}}
