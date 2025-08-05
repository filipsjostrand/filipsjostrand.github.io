const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

var navClicked = false;

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;

todosNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  navClicked = true;
})
weekNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  navClicked = true;
})
planNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  navClicked = true;
})
timerNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  navClicked = true;
})
aboutNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  navClicked = true;
})
  

  if (prevScrollPos > currentScrollPos && navClicked = false) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }
    else if (prevScrollPos > currentScrollPos && navClicked = true) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (2)")
  }
  else if (prevScrollPos < currentScrollPos && navClicked = true; {
    console.log("scroll down - std ... show navbar (3)")
    navbar.style.top = "0"; //scrolling up - show scrollbar
    prevScrollPos = currentScrollPos;
    navClicked = false;
  }
    else if (prevScrollPos < currentScrollPos && navClicked = false) {
    console.log("scroll down - std ... hide navbar (4)")
    navbar.style.top = "-59px"; // - hide scrollbar
  } 
    else if (prevScrollPos === currentScrollPos && navClicked = false) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (5)")
  } 
  
  prevScrollPos = currentScrollPos;
});
