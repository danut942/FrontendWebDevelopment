// player1Name = document.getElementsByClassName("player1")[0].innerText;
// player2Name = document.getElementsByClassName("player2")[0].innerText;

// if (player1Name == "Player 1" || player2Name == "Player 2"){
// var player1 = prompt("Enter player 1");
// document.getElementsByClassName("player1")[0].innerText = player1;

// var player2 = prompt("Enter player 2");
// document.getElementsByClassName("player2")[0].innerText = player2;
// }

var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}