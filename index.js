var randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;

var randomNum2 = Math.random() * 6;
randomNum2 = Math.floor(randomNum2) + 1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNum2+".png");

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if(randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else if (randomNum1 = randomNum2) {
    document.querySelector("h1").innerHTML = "Draw!";
}