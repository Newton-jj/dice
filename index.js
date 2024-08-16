// Generate random numbers between 1 and 6 for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create file names for the random dice images
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Select the <img> elements for both players
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// Set the src attribute for both <img> elements to the random dice images
img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);

// Optionally, update the <h1> text to show which player won or if it's a draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}

