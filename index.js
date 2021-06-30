
var randomno1= Math.floor(Math.random()*6)+1;
var randomImg = "dice"+randomno1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg);

var randomno2= Math.floor(Math.random()*6)+1;
var randomImg2 = "dice"+randomno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="🐱‍💻 PLAYER 1 WINS!"

}
else if(randomno1<randomno2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS! 🐱‍💻"
  document.querySelector("h1").font
}
else{
  document.querySelector("h1").innerHTML="‍DRAW !! 💻"
}
