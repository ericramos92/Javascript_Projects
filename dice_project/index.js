//RANDOM NUMBER
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
//new src direction
var dicenumber = "dice" + randomNumber1 + ".png";
srcdirection = "images/"+dicenumber;
//get random img with DOM for dice 1
const imagedice1 = document.querySelector(".img1");
imagedice1.setAttribute("src",srcdirection);

//new src direction
var dicenumber2 = "dice" + randomNumber2 + ".png";
srcdirection2 = "images/"+dicenumber2;
//get random img with DOM for dice 1
const imagedice2 = document.querySelector(".img2");
imagedice2.setAttribute("src",srcdirection2);

if(randomNumber1 > randomNumber2)
{
  var win = document.querySelector("h1");
  win.innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1)
{
  var win = document.querySelector("h1");
  win.innerHTML = "Player 2 Wins!🚩";
}
else
{
  var win = document.querySelector("h1");
  win.innerHTML = "Draw!";
}
