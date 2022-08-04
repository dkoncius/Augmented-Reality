"use strict";

var buttons = document.querySelectorAll("button")
var sections = document.querySelectorAll("section")

function showTab(event, id){
  for(var i = 0; i < buttons.length; i++){
    buttons[i].classList.remove("selected")
    sections[i].classList.remove("sectionAnimation")
  }

  document.getElementById(id).classList.add("sectionAnimation")
  event.currentTarget.classList.add("selected")
}

document.getElementById("section1").classList.add("sectionAnimation")

