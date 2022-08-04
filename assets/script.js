"use strict";

let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let sectionOne = document.getElementById("section1");
let sectionTwo = document.getElementById("section2");
let sectionThree = document.getElementById("section3");
let sectionAll = document.querySelectorAll("section");

for (let x of sectionAll) {
  x.classList.remove("display");
}
//-----------------------------B1-------------------------------------------
buttonOne.addEventListener("click", function () {
  for (let x of sectionAll) {
    x.classList.remove("display");
  }
  sectionOne.classList.add("display");
  sectionOne.style.transition = "0.3s";
});

//-----------------------------B2-------------------------------------------
buttonTwo.addEventListener("click", function () {
  for (let x of sectionAll) {
    x.classList.remove("display");
  }
  sectionTwo.classList.add("display");
});

//-----------------------------B3-------------------------------------------
buttonThree.addEventListener("click", function () {
  for (let x of sectionAll) {
    x.classList.remove("display");
  }
  sectionThree.classList.add("display");
});
