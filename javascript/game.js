var wins = 0;
var losses = 0;
var maxGuesses = 9;
var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var emptyAlert = "ready to play";
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
        alert("game done");
        alert(wins + " " + losses);
    }
}

function Hangman() {
    this.wordList = [
        "magenta",
        "lol"
    ]

    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = [];
    this.wrongGuess = 0;
    this.visibleLetters = [];
    this.gameover = false;
    this.alertLines = emptyAlert;
    for (var i = 0; i < this.word.length; i++) {
        this.visibleLetters[i] = (false);
    };
    console.log(this.wrongGuess);
}

Hangman.prototype.checkGuess = function(char) {
    this.guessedLetters.push(char);
    alert(this.word);
    var isInWord = false;
    for (var i = 0; i < this.word.length; i ++) {
        if (this.word.charAt(i) === char) {
            isInWord = true;
            this.visibleLetters[i] = true;
            console.log(this.visibleLetters);
        }
    }
    if (!isInWord) {
        this.wrongGuess++;
        console.log(this.wrongGuess);
    }
    if (this.wrongGuess >= maxGuesses) {
        losses++;
        this.gameover = true;
        console.log("you lost");
    }
    if (!this.visibleLetters.includes(false)) {
        wins++;
        this.gameover = true;
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
            wordHolder = wordHolder + "_";
        }
        wordHolder += " ";
    }  
    console.log(wordHolder);
};
