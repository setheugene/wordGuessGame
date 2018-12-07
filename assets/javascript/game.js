

var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesRemaining = 10;
var wins = 0;
var guessedLetters = [];
var currentLetter = [];
var hasWon= false;

var letter = {func: computerLetters[Math.floor(Math.random() * computerLetters.length)]}
console.log(letter);

window.onload = function() {
  

  document.getElementById("currentLetter-text").style.cssText= "display: none";

  document.getElementById("wins-text").innerText = wins;

  var guessesRemainingText = document.getElementById("number-text");

  document.onkeyup = function(event) {
    var userInput = event.key;



     if (userInput === letter.func && event.keyCode !== 32) {
      var blankText = document.getElementById("blank-text").innerText = letter.func;
      document.getElementById("currentLetter-text").style.cssText= "display: block";
      document.getElementById("blank-text").style.backgroundColor= "green";
      var blankText = document.getElementById("blank-text").innerText = userInput;
      hasWon = true;
      console.log(wins);
      wins++;
      winsText.textContent = "wins: " + wins;
      
    }


    else if (event.keyCode === 32) {
      document.getElementById("blank-text").style.cssText= "display: reset";
      document.getElementById("currentLetter-text").style.cssText= "display: none";
      document.getElementById("blank-text").style.backgroundColor= "reset";
      var blankText = document.getElementById("blank-text").innerText = "";
      var guessedLetters = document.getElementById("lettersGuessed-text").innerText = "";
      hasWon = false;
      letter = {func: computerLetters[Math.floor(Math.random() * computerLetters.length)]}
    console.log(letter);
    guessesRemaining = 10;
    wins = "wins " + 0;
    }



    else if (userInput !== letter.func && event.keyCode !== 32) {
      document.getElementById("blank-text").style.cssText= "display: reset";
      document.getElementById("currentLetter-text").style.cssText= "display: none";
      var blankText = document.getElementById("lettersGuessed-text").innerText += userInput + ",";
      if (guessesRemaining === 0) {
        alert ("You Lose, Press 'Space' to Reset.");
      }
      guessesRemainingText.textContent = guessesRemaining;
      guessesRemaining --;

    }

    
  
    console.log(userInput);
    console.log(hasWon);
    console.log(letter);
  }

  
  var winsText = document.getElementById("wins-text");
  var blankText = document.getElementById("blank-text");
  
  var userInput = document.getElementById("lettersGuessed-text");


blankText.textContent = currentLetter;

userInput.textcontent = userInput;

;
}
