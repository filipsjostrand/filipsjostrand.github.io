const navbar = document.getElementById("navbar");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let prevScrollPos = window.pageYOffset;

//var navbarClicked = false;

var myFlag = false;

// Trigger some behavior
function activateFlag() {
  myFlag = true;
  console.log("Flag set to TRUE");

  // Automatically reset after 2 seconds (2000 ms)
  setTimeout(() => {
    myFlag = false;
    //navbarClicked = false;
    console.log("Flag reset to FALSE after timeout");
  }, 2000);
}

weekNav.addEventListener('click', function () {
  //navbarClicked = true;
  navbar.style.top = "0";
  activateFlag();
})

planNav.addEventListener('click', function () {
  //navbarClicked = true;
  navbar.style.top = "0";
  activateFlag();
})

timerNav.addEventListener('click', function () {
  //navbarClicked = true;
  navbar.style.top = "0";
  activateFlag();
})

aboutNav.addEventListener('click', function () {
  navbarClicked = true;
  navbar.style.top = "0";
  activateFlag();
})

window.addEventListener("scroll", function () {
  
  const currentScrollPos = window.pageYOffset;

  if (myFlag === false && prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }  
  else if (myFlag === false && prevScrollPos < currentScrollPos) {
    console.log("scroll down - std ... hide navbar (2)")
    navbar.style.top = "-59px"; // - hide scrollbar
  } 
  else if (myFlag === true && prevScrollPos > currentScrollPos || myFlag === true && prevScrollPos < currentScrollPos) {
    console.log("myFlag === true (i scroll) -> navbar.style.top = '0' ... show navbar (4)")
    navbar.style.top = "0";
  }
  
  prevScrollPos = currentScrollPos;
});
