var random_number1=Math.floor(Math.random()*6)+1;
var random_number2=Math.floor(Math.random()*6)+1;
var s1="images/dice"+random_number1+".png";
var s2="images/dice"+random_number2+".png";
document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);
if(random_number1>random_number2)
    {
        document.querySelector("h1").innerHTML="⛳Player 1 wins";
    }
else if(random_number1<random_number2)   
    {
        document.querySelector("h1").innerHTML="Player 2 wins⛳";
    }
else
{
    document.querySelector("h1").innerHTML="DRAW";
}