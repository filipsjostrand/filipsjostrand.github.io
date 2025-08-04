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
var lastScroll = "none";

function showNavbar(isNavbarRolledUp, isNavbarClicked, isScrolling, lastScroll) {
  // After 1st manual scroll (navbar rolled up)
  if (isNavbarRolledUp === true && isNavbarClicked === false && isScrolling === true && lastScroll === "none") {
    console.log("showNavbar 1st manual (1)")
    navbar.style.top = "-45px";
    isNavbarRolledUp = true;
    isScrolling = true;
    lastScroll = "manual";
  }
  // After 1st button scroll (navbar rolled down)
  else if (isNavbarRolledUp === false && isNavbarClicked === true && isScrolling === false && lastScroll === "none") {
    console.log("showNavbar 1st button (2)")
    navbar.style.top = "0"; //show navbar
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "button";
  } 
  // Button scroll - after manual scroll (navbar rolled up)
  else if (isNavbarRolledUp === true && isNavbarClicked === true && isScrolling === false && lastScroll === "manual") {
    console.log("showNavbar++ button - after manual (3)")
    navbar.style.top = "0"; //show navbar
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "button";
  }
  // Manual scroll - after button scroll (navbar rolled down)
  else if (isNavbarRolledUp === false && isNavbarClicked === true && isScrolling === false && lastScroll === "button") {
    console.log("showNavbar++ button - after button (4)")
    navbar.style.top = "-45px"; //show navbar
    isNavbarRolledUp = true;
    isScrolling = true;
    lastScroll = "manual";
  } 
  // Manual scroll, After button scroll (navbar roll up)  
  //else if (isNavbarRolledUp === false && isNavbarClicked === true && isScrolling === false) {
  //console.log("showNavbar starts")
  //navbar.style.top = "-45px"; //hide navbar
  //isNavbarRolledUp = true;
  //isScrolling = true;
  //} 

  console.log("isNavbarRolledUp, isNavbarClicked, isScrolling, lastScroll" = + isNavbarRolledUp + ", " + isNavbarClicked + ", " + isScrolling + ", " + lastScroll)
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
  // Button scroll (start) -> scroll (show nav)
  if (isNavbarClicked === true && lastScroll === "none" && prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "none";
  } 
  else if (isNavbarClicked === true && lastScroll === "none" && prevScrollPos < currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "none";
  }
    // Button scroll after manual scroll
  else if (isNavbarClicked === true && lastScroll === "manual" && prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "manual";
  } 
  else if (isNavbarClicked === true && lastScroll === "manual" && prevScrollPos < currentScrollPos) {
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    isScrolling = false;
    lastScroll = "manual";
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
  // Manual scroll (start) -> scroll (show nav)
    else if (isNavbarClicked === false && lastScroll === "none"  && prevScrollPos > currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
      isNavbarRolledUp = true;
      isScrolling = true;
      lastScroll = "none";
    } else if (isNavbarClicked === false && lastScroll === "none" && prevScrollPos < currentScrollPos) {
      // Scrolling down — hide navbar
      navbar.style.top = "-45px"; // adjust based on navbar height
      isNavbarRolledUp = true;
      isScrolling = true;
      lastScroll = "none";
    }
    // Manual scroll after button scroll
    else if (isNavbarClicked === true && lastScroll === "button"  && prevScrollPos > currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
      isNavbarRolledUp = false;
      isScrolling = false;
      lastScroll = "button";
    }
    else if (isNavbarClicked === true && lastScroll === "button"  && prevScrollPos < currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
      isNavbarRolledUp = false;
      isScrolling = false;
      lastScroll = "button";
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
      showNavbar(isNavbarRolledUp, isNavbarClicked, isScrolling, lastScroll) 
    }, 300); // change this delay to suit your needs
});




