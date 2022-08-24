let buttonColors= ["red", "blue", "green", "yellow"];

let gamePattern= [];
let userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function() {
 
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColour);
  
  });

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        audio.play();  
        
    playSound(randomChosenColour);   
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function animatePress(currentColor) { 
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    }