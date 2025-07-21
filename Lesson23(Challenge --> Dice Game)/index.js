// first basic approach of doing this
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Match Tie";
}


// var dice_1 = Math.floor(Math.random() * 6) + 1;

// var dice_2 = Math.floor(Math.random() * 6) + 1;


// if(dice_1 == 1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(dice_1 == 2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// else if(dice_1 == 3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// else if(dice_1 == 4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// else if(dice_1 == 5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }



// if (dice_2 == 1) {
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// } 
// else if (dice_2 == 2) {
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// } 
// else if (dice_2 == 3) {
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// } 
// else if (dice_2 == 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// } 
// else if (dice_2 == 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// } 
// else {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }



// if(dice_1>dice_2){
//     document.querySelector("h1").innerHTML = "Player 1 wins";
// }
// else if(dice_2>dice_1){
//     document.querySelector("h1").innerHTML = "Player 2 wins";
// }
// else{
//     document.querySelector("h1").innerHTML = "Match Tie";
// }



// How good programmer approach this question


