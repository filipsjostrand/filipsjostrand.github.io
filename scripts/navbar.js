const navbar = document.getElementById("navbar");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let prevScrollPos = window.pageYOffset;


weekNav.addEventListener('click', function () {
  prevScrollPos = 563;
})

planNav.addEventListener('click', function () {
  prevScrollPos = 1595;
})

timerNav.addEventListener('click', function () {
  prevScrollPos = 1595;
})

aboutNav.addEventListener('click', function () {
  prevScrollPos = 3203;
})

window.addEventListener("scroll", function () {
  
  const currentScrollPos = window.pageYOffset;

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
