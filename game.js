//starting variables
var isStarted = false;
var level = 0;
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

//gets a keypress and plays the sequence
$(document).keypress(function (){
    if(!isStarted){
        $("#level-title").text("Level " + level);
        nextSequence();
        isStarted = true;
    }
});

//get color chosen by CLICK
$(".btn").click(function () {
       var chosenColor = $(this).attr("id");

       //add user click to array
       userClickedPattern.push(chosenColor);

        //add class for click styles
        animatePress(chosenColor);
       //play sound for user click
       playSound(chosenColor);

       var currLevel = userClickedPattern.length -1;
       //checkInput
       checkAnswer(currLevel);
});

//check user input
function checkAnswer(currLevel){
    //we only check the last index becuase up until now the pattern has been correctPattern
    if(userClickedPattern[currLevel] === gamePattern[currLevel]){
        console.log("correct");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
         console.log("incorrect");
         //play wrong sound
         playSound("wrong");

         //change title
         $("#level-title").text("Game Over Press Any Key To Restart");

         //add wrong style to body
         $("body").addClass("game-over");

         //remove gameover style
         setTimeout(function (){
             $("body").removeClass("game-over");
         }, 200);

        startover();
    }

}

//game sequence randomly generated
function nextSequence(){
    //reset uesr clicked
    userClickedPattern = [];

    // increase level count
    level++;

    //change heading
    $("#level-title").text("Level " + level);

    //generate a random number
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];

    //add random color to game pattern array
    gamePattern.push(randomChosenColor);

    //fade button
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //play sound for random chosen color
    playSound(randomChosenColor);
};

//start over function
function startover(){
    isStarted = false;
    level = 0;
    gamePattern = [];
}

//play the sound the user clicks
function playSound(name){
    //play sounds
    audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

};

//add shadow on press
function animatePress(currentColor){
    //add shadow to button
    $("#" + currentColor).addClass("pressed");

    //remove shadow
    setTimeout(function (){
        $("#" + currentColor).removeClass("pressed");
    }, 10);

}
