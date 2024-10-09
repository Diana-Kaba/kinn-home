"use strict";

const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");

burgerBtn.addEventListener("click", function() { this.classList.add("active"); } );
closeBtn.addEventListener("click", function() { burgerBtn.classList.toggle("active") });
