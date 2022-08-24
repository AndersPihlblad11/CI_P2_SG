let buttonColors= ["red", "blue", "green", "yellow"];

let gamePattern= [];
let userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function() {
 
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
  
  });

  function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);
        
        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();  
        
    playSound(randomChosenColor);   
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

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }

