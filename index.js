let buttonColors= ["red", "blue", "green", "yellow"];

let gamePattern= [];
var userClickedPattern = [];

var started = false;
var level = 0;


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
}