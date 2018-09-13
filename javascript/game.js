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
    }
}

function Hangman() {
    this.wordList = [
        "Magenta"
    ]

    this.word = this.wordList =[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = [];
    this.wrongGuess = 0;
    this.visibleLetters = [];
    this.gameOver = false;
    this.alertLines = emptyAlert;
    for (var i = 0; i < this.word.length; i++) {
        this.visibleLetters[i] = (false);
    };
}

Hangman.prototype.checkGuess = function(char) {
    this.guessedLetters.push(char);
    alert(this.guessedLetters);
}   
