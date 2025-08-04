let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let isScrolling = false;
let isNavbarRolledUp = false;
let isNavbarClicked = false;

function showNavbar(isNavbarRolledUp) {
  if (isNavbarRolledUp === true) {
  console.log("showNavbar starts")
  navbar.style.top = "0"; //fade it in...
  isNavbarRolledUp = false;
  }
}

  navbar.addEventListener('click', function() {
    isNavbarClicked = true;

    setTimeout(() => {
      isNavbarClicked = false;
    }, 300); // change this delay to suit your needs
    
    //console.log("show navbar");
    //setTimeout(() => {
      //navbar.style.top = "0";
    //}, 10); // change this delay to suit your needs
  });

window.addEventListener('scroll', function () {
  isScrolling = true;

  if (isScrolling === true && isNavbarClicked === true) {
    navbar.style.top = "0";
  }
  
      console.log("scrolling start");
  //if (isNavbarRolledUp === 
  //let scrollStartValue = window.scrollY;
  const currentScrollPos = window.pageYOffset;
  // Scrolling — hide navbar
    if (isNavbarClicked === false && prevScrollPos > currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
    } else if (isNavbarClicked === false && prevScrollPos < currentScrollPos) {
      // Scrolling down — hide navbar
      navbar.style.top = "-45px"; // adjust based on navbar height
    }
  
  //window.clearTimeout(isScrolling);

  //isScrolling = setTimeout(function () {
    // Scrolling has stopped!
    // Call showNavbar function:
    //showNavbar(); 
  //}, 10); // adjust delay as needed (300ms is typical)
  
  prevScrollPos = currentScrollPos;
  //isNavbarRolledUp = true;
  //let scrollEndValue = window.scrollY;
  //if (scrollStartValue = scrollEndValue) {
    //showNavbar(isNavbarRolledUp)
  }
});




