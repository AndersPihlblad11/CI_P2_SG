let buttonColors= ["red", "blue", "green", "yellow"];

let gamePattern= [];

let userClickedPattern = [];

$(".btn").click(function() {

  
  });

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}