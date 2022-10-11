const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = [];

function nextSequence() {
    // Returns a random integer from 0 to 9:
    randomNumber = Math.floor(Math.random() * 4);
}

randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);