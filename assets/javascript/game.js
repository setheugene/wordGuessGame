var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesRemaining = 10;
var guessedLetters = [];
var currentLetter = [];
var wins = 0;
var hasWon= false;
var letter = {func: computerLetters[Math.floor(Math.random() * computerLetters.length)]}
console.log(letter);

window.onload = function() {

  document.getElementById("currentLetter-text").style.cssText= "display: none";

  document.getElementById("wins-text").innerText = wins;

  //computer picks random word

 

  //record guess
  document.onkeyup = function(event) {
    var userInput = event.key;



     if (userInput === letter.func && event.keyCode !== 32) {
      var blankText = document.getElementById("blank-text").innerText = letter.func;
      document.getElementById("currentLetter-text").style.cssText= "display: block";
      document.getElementById("blank-text").style.backgroundColor= "green";
      hasWon = true;
      //add one
      wins++;
      
    }


    else if (event.keyCode === 32) {
      document.getElementById("blank-text").style.cssText= "display: reset";
      document.getElementById("currentLetter-text").style.cssText= "display: none";
      document.getElementById("blank-text").style.backgroundColor= "reset";
      var blankText = document.getElementById("blank-text").innerText = "";
      var guessedLetters = document.getElementById("lettersGuessed-text").innerText = "";
      hasWon = false;

    }



    else if (userInput !== letter.func) {
      document.getElementById("blank-text").style.cssText= "display: reset";
      document.getElementById("currentLetter-text").style.cssText= "display: none";
      document.getElementById("blank-text").style.backgroundColor= "reset";
      var blankText = document.getElementById("blank-text").innerText = "";
      //remove one
      guessesRemaining--;
      //append?
      // userInput.append(guessedLetters);
      // document.getElementById("lettersGuessed-text").append(guessedLetters);
    }

    
  
    console.log(userInput);
    console.log(hasWon);
    console.log(letter);
  }




  //win alert

  //change text accordingly
  
  var winsText = document.getElementById("wins-text");
  var blankText = document.getElementById("blank-text");
  var guessesRemainingText = document.getElementById("number-text");
  var userInput = document.getElementById("lettersGuessed-text");

winsText.textContent = "wins: " + wins;
blankText.textContent = currentLetter;
guessesRemainingText.textContent = guessesRemaining;
userInput.textcontent = userInput;

;
}

function done() {
  if (hasWon === true) {
    wins++;
  }
}