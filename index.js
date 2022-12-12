let randomNumber1 = Math.floor(6 * Math.random()) + 1; //getting random number

let randomDiceImageSource = "images/dice" + randomNumber1 + ".png"; //getting random image

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImageSource);

let randomNumber2 = Math.floor(6 * Math.random()) + 1; //getting random number

let randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png"; //getting random image

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  


