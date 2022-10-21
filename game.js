var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    $("#" + randomChosenColor).fadeOut(100).fadeIn();

    //play sounds
    switch(randomChosenColor){
        case "red":
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
            break;
        case "blue":
            var blueAudio= new Audio("sounds/blue.mp3");
            blueAudio.play();
            break;
        case "green":
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
            break;  
        case "yellow":
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
            break;   
    }
    
    gamePattern.push(randomChosenColor);    
};

$(document).keydown(function (e){
    console.log(e.key);
    nextSequence()
});
