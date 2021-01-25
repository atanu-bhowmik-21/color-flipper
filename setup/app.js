const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById('btn');
var color  = document.querySelector(".color");

btn.addEventListener("click",function(){
    var randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandom(){
    var n =  Math.random();
    n = Math.round(n*colors.length);
    return n;
}

// console.log(getRandom());