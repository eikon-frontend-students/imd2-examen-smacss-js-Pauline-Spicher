// title
var LittleSesame = document.querySelector(".LittleSesame");
function title() {
  LittleSesame.classList.add("is-yellow");
}
LittleSesame.addEventListener("click", title);
// 01

var box01 = document.querySelector(".box.one");
function one() {
  box01.classList.add("is-pink");
}
box01.addEventListener("click", one);

// 02

var box02 = document.querySelector(".box.two");
function two() {
  box02.classList.add("is-green");
}
box02.addEventListener("click", two);

// 03

var box03 = document.querySelector(".box.three");
function three() {
  box03.classList.add("is-blue");
}
box03.addEventListener("click", three);
