const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;

todosNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  console.log("prevScrollPos > currentScrollPos (nav) = " + prevScrollPos > currentScrollPos)
})
weekNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  console.log("prevScrollPos > currentScrollPos (nav) = " + prevScrollPos > currentScrollPos)
})
planNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  console.log("prevScrollPos > currentScrollPos (nav) = " + prevScrollPos > currentScrollPos)
})
timerNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  console.log("prevScrollPos > currentScrollPos (nav) = " + prevScrollPos > currentScrollPos)
})
aboutNav.addEventListener('click', function () {
  prevScrollPos = 3400;
  console.log("prevScrollPos > currentScrollPos (nav) = " + prevScrollPos > currentScrollPos)
})
  

  if (prevScrollPos > currentScrollPos) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }
  else {
    console.log("scroll down - std ... hide navbar (2)")
    navbar.style.top = "-59px"; // - hide scrollbar
  } 
  
  prevScrollPos = currentScrollPos;
});
