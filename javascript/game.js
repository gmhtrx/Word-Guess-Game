var wins = 0;
var losses = 0;
var maxGuesses = 9;
var wordBox = document.getElementById("word-box");
var wordGuessed = document.getElementById("word-guessed");
var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var emptyAlert = "ready to play";



function Hangman() {
    this.wordList = [
        "magenta",
        "yellow",
        "red",
        "blue"
    ]

    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = [];
    this.wrongGuess = 0;
    document.getElementById("word-guessed").innerHTML = this.wrongGuess;
    this.visibleLetters = [];
    this.gameover = false;
    for (var i = 0; i < this.word.length; i++) {
        this.visibleLetters[i] = (false);
    };
}

var game = new Hangman();

document.onkeyup = function (event) {
    var userGuess = event.key;

    if(!game.gameover) {
        if(validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
            game.checkGuess(userGuess);
        }
    } else {
        game = new Hangman();
        game.updatePageData();

    }
}



Hangman.prototype.checkGuess = function(char) {
    this.guessedLetters.push(char);
    var isInWord = false;
    for (var i = 0; i < this.word.length; i ++) {
        if (this.word.charAt(i) === char) {
            isInWord = true;
            this.visibleLetters[i] = true;
        }
    }
    if (!isInWord) {
        this.wrongGuess++;
        document.getElementById("word-guessed").innerHTML = this.wrongGuess;
    }
    if (this.wrongGuess >= maxGuesses) {
        losses++;
        this.gameover = true;
        document.getElementById("loss").innerHTML = losses;
        console.log("you lost");
    }
    if (!this.visibleLetters.includes(false)) {
        wins++;
        this.gameover = true;
        document.getElementById("win").innerHTML = wins;
        console.log("you won");
    }

    game.updatePageData();
};

Hangman.prototype.updatePageData = function() {
    var wordHolder = "";
    for (var i = 0; i < this.visibleLetters.length; i++) {
        if (this.visibleLetters[i] || this.gameover) {
            wordHolder = wordHolder + this.word.charAt(i);
        }
        else {
            wordHolder +=  "_";
        }
        wordHolder += " ";
    }

    wordBox.textContent = wordHolder;
    if(this.gameover){

    }
};

game.updatePageData();
