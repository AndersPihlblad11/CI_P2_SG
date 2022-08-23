let buttonColors= ["red", "blue", "green", "yellow"]
let gamePattern= [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
}