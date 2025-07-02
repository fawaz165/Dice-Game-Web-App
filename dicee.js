var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

var img1="./images/dice"+a+".png";
var img2="./images/dice"+b+".png";

document.querySelector(".dice .img1").setAttribute("src",img1);
document.querySelector(".dice .img2").setAttribute("src",img2);

if(a>b){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(b>a){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}