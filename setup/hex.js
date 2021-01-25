const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    let hexColor = "#";
    for(var i = 1;i <= 6;i++){
        randomNumber = getRandom();
        hexColor = hexColor + hex[randomNumber];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
function getRandom(){
    var n =  Math.random();
    n = Math.floor(n*hex.length);
    return n;
}