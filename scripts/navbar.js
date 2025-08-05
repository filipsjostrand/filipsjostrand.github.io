const navbar = document.getElementById("navbar");
//const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;

//todosNav.addEventListener('click', function () {
  //prevScrollPos = 563;
  //currentScrollPos = Math.expm1(prevScrollPos);
//})
  
weekNav.addEventListener('click', function () {
  prevScrollPos = 563;
  currentScrollPos = Math.expm1(prevScrollPos);
})

planNav.addEventListener('click', function () {
  prevScrollPos = 1595;
  currentScrollPos = Math.expm1(prevScrollPos);
})

timerNav.addEventListener('click', function () {
  prevScrollPos = 1595;
  currentScrollPos = Math.expm1(prevScrollPos);
})

aboutNav.addEventListener('click', function () {
  prevScrollPos = 3203;
  currentScrollPos = Math.expm1(prevScrollPos);
})
  


  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }  
  else {
    console.log("scroll down - std ... hide navbar (2)")
    navbar.style.top = "-59px"; // - hide scrollbar
  } 
  
  prevScrollPos = currentScrollPos;
});
