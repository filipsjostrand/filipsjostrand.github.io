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

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
  } 
    else if (navbarClicked === true) {
      navbar.style.top = "0";
      prevScrollPos = currentScrollPos;
      navbarClicked = false;
    }
  else if (prevScrollPos < currentScrollPos) {
    navbar.style.top = "-59px"; //scrolling down - hide scrollbar
  }

  prevScrollPos = currentScrollPos;
});

