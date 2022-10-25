//starting variables 
var isStarted = false;
var level = 0;
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

//get color chosen by CLICK
$(".btn").click(function () {
       var chosenColor = $(this).attr("id");
       
       //add class for click styles
       animatePress(chosenColor);
       
       //add user click to array 
       userClickedPattern.push(chosenColor);
       
       //play sound for user click
       playSound(chosenColor);
       
       var currLevel = userClickedPattern.length;
       //checkInput
       checkAnswer(currLevel); 
});

//game sequence randomly generated
function nextSequence(){
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

//gets a keypress and plays the sequence
$(document).keydown(function (e){
    if(!isStarted){
        $("#level-title").text("Level " + level); 
        nextSequence();
        isStarted = true;
        
    } 
});

//check user input
function checkAnswer(currLevel){
    var index = currLevel - 1;
    var correctPattern = true;
    for(var i = 0; i < gamePattern.length; i++){
        if(userClickedPattern[index] === gamePattern[index]){
            console.log("correct");
        } 
        else{
             console.log("incorrect"); 
             correctPattern = false;
        } 
    }
}