const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = [];

function nextSequence() {
    // Returns a random integer from 0 to 9:
    randomNumber = Math.floor(Math.random() * 4);
}

// randomChosenColour = buttonColours[randomNumber];
// gamePattern.push(randomChosenColour);

$(":button");

function playGreen() {
    userChosenColour = document.querySelector("div.green").getAttribute("ID");;
    console.log(userChosenColour);
    $("#green").fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/green.mp3');
    audio.play();
}
function playRed() {
    userChosenColour = document.querySelector("div.red").getAttribute("ID");;
    console.log(userChosenColour);
    $("#red").fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/red.mp3');
    audio.play();
}
function playYellow() {
    userChosenColour = document.querySelector("div.yellow").getAttribute("ID");;
    console.log(userChosenColour);
    $("#yellow").fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
}
function playBlue() {
    userChosenColour = document.querySelector("div.blue").getAttribute("ID");;
    console.log(userChosenColour);
    $("#blue").fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
}