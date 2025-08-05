const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");
//const navbarHideText = document.getElementById("hide-nav-text");

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hideText = document.getElementById("hide-nav-text");
  var isNavActive = true;

  if (navbar && hideText) {
      hideText.addEventListener("click", function () {
          isNavActive = !isNavActive;
          if (isNavActive === true) {
          if (hideText.innerText === "❌ Navbar") {
              navbar.style.top = "-59px"; // hides navbar
              hideText.style.fontSize = "16px";
              //hideText.style.display = "none"; // hides the text
          } else if (isNavActive === false) {
              navbar.style.top = "0"; // hides navbar
              hideText.innerText = "☰";
              hideText.style.fontSize = "20px";
          }
          }
      });

    }
});

var navClicked = false;

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;

todosNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    //navClicked = !navClicked;
  if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("A")
})
weekNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("B")
})
planNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("C")
})
timerNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("D")
})
aboutNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
   if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("E")
})
  

  if (prevScrollPos > currentScrollPos && navClicked === false) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }
  else if (prevScrollPos > currentScrollPos && navClicked === true) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (2)")
    //navClicked = false;
  }
  else if (prevScrollPos < currentScrollPos && navClicked === true) {
    console.log("scroll down - std ... show navbar (3)")
    navbar.style.top = "0"; //scrolling up - show scrollbar
    //navClicked = false;
    //navClicked = !navClicked;
  }
  else if (prevScrollPos < currentScrollPos && navClicked === false) {
    console.log("scroll down - std ... hide navbar (4)")
    navbar.style.top = "-59px"; // - hide scrollbar
    //navClicked = !navClicked;
  } 
  //else if (prevScrollPos === currentScrollPos) {
    //navbar.style.top = "0"; //scrolling up - show scrollbar
    //navClicked = false;
    //console.log("scroll up - std ... show navbar (5)")
  //} 

  //navClicked = false;
  prevScrollPos = currentScrollPos;
});
