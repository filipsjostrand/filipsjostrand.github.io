let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let isScrolling = true;
let isNavbarRolledUp = false;
let isNavbarClicked = false;

function showNavbar(isNavbarRolledUp, isNavbarClicked, isScrolling) {
  if (isNavbarRolledUp === true && isNavbarClicked === false && isScrolling === true) {
    navbar.style.top = "-45px";
      isNavbarRolledUp = true;
      isScrolling = true;
  }
  else if (isNavbarRolledUp === true && isNavbarClicked === true && isScrolling === false) {
  console.log("showNavbar starts")
  navbar.style.top = "0"; //show navbar
  isNavbarRolledUp = false;
  isScrolling = false;
  } 
}
  //else if (isNavbarRolledUp === false) {
    //navbar.style.top = "0";
  //}

  navbar.addEventListener('click', function() {
    //isScrolling = false
    isNavbarRolledUp = false;
    isNavbarClicked = true;

    console.log("navbar clicked, isNavbarClicked = " + isNavbarClicked);

    //showNavbar(isNavbarRolledUp);
    
    //setTimeout(() => {
      //showNavbar(isNavbarRolledUp);
    //}, 500); // change this delay to suit your needs
    
    //console.log("show navbar");
    //setTimeout(() => {
      //navbar.style.top = "0";
    //}, 10); // change this delay to suit your needs
  });

window.addEventListener('scroll', function () {
  //isScrolling = true;

const currentScrollPos = window.pageYOffset;
  
//if (isScrolling === false && isNavbarClicked === true) {
  // Navbar button pressed  -> scroll (show nav)
  if (isNavbarClicked === true && prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
  } 
  else if (isNavbarClicked === true && prevScrollPos < currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
  } 
  // !Navbar button pressed  -> scroll (!show nav)
  //else { 
    //isNavbarClicked === false;
         //}
  
  //if (isScrolling === true && isNavbarClicked === true) {
    //navbar.style.top = "0";
  //}
  
      //console.log("scrolling start");
  //if (isNavbarRolledUp === 
  //let scrollStartValue = window.scrollY;
  //const currentScrollPos = window.pageYOffset;
  // Scrolling — hide navbar
    else if (isNavbarClicked === false && prevScrollPos > currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
      isNavbarRolledUp = true;
      isScrolling = true;
    } else if (isNavbarClicked === false && prevScrollPos < currentScrollPos) {
      // Scrolling down — hide navbar
      navbar.style.top = "-45px"; // adjust based on navbar height
      isNavbarRolledUp = true;
      isScrolling = true;
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
    
  setTimeout(() => {
    console.log("navbar clicked set to false - setTimeout");
      //isNavbarClicked = false;
      //isNavbarRolledUp = false;
      showNavbar(isNavbarRolledUp, isNavbarClicked, isScrolling) 
    }, 300); // change this delay to suit your needs
});




