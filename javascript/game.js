$(document).ready(function () {
var wins = 0;
var losses = 0;
var wordBank = ["red", "yellow", "blue", "grey"];
var guesses = 10;
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
var strLength = computerChoice.length;
var array = [];
var wordArray = computerChoice.split("");
var userChoice = "";
console.log(wordArray[0]);
for(var i= 0; i < computerChoice.length; i++){

    array.push("_");
    console.log(array);
}


$("#word-box").append(array.join(" "));

document.onkeyup = function(_event){
    userChoice = _event.key;
    for(var i = 0; i < wordArray.length; i++ ){
        var letters = wordArray[i];
        if(userChoice === letters){
            console.log(wordArray);
            console.log(wordArray.indexOf(userChoice));
            array[wordArray.indexOf(userChoice)] = letters;
            console.log(array);
            $("#word-box").text(array);
        }
    }
}


function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    $("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};


});