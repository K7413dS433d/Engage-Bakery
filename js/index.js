// nav style
let nav = document.getElementsByClassName("nav");
let navIcon = document.querySelector(".nav .ins-nav .icon");
let navList = document.querySelectorAll(".nav .ins-nav ul li a");

window.addEventListener("scroll", function () {
  if (scrollY > 15) {
    nav[0].style.backgroundColor = "white";
    navIcon.src = "./images/bakery-color.png";
    for (let i = 0; i < navList.length; i++) {
      navList[i].style.color = "black";
      nav[0].style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Add box shadow
    }
  } else {
    nav[0].style.backgroundColor = "transparent";
    navIcon.src = "./images/bakery-light-1.png";
    for (let i = 0; i < navList.length; i++) {
      navList[i].style.color = "white";
    }
    nav[0].style.boxShadow = "none";
  }
});
