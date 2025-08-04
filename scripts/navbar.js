const navbar = document.getElementById("navbar");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let prevScrollPos = window.pageYOffset;

var navbarClicked = false;

weekNav.addEventListener('click', function () {
  navbarClicked = true;
  navbar.style.top = "0";
})

planNav.addEventListener('click', function () {
  navbarClicked = true;
  navbar.style.top = "0";
})

timerNav.addEventListener('click', function () {
  navbarClicked = true;
  navbar.style.top = "0";
})

aboutNav.addEventListener('click', function () {
  navbarClicked = true;
  navbar.style.top = "0";
})

window.addEventListener("scroll", function () {
  
  const currentScrollPos = window.pageYOffset;

  if (navbarClicked === false && prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up ... show navbar (1)")
  } 
  else if (navbarClicked === true && prevScrollPos > currentScrollPos || navbarClicked === true && prevScrollPos < currentScrollPos) {
    console.log("navbarClicked === true (i scroll) -> navbar.style.top = '0' ... show navbar (2)")
  navbar.style.top = "0";
  }  else  {
    console.log("else ... hide navbar (3)")
    navbar.style.top = "-59px"; // - hide scrollbar
  }
  navbarClicked = false;
  prevScrollPos = currentScrollPos;
});

