let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let isScrolling;
let isNavbarRolledUp = false;

  navbar.addEventListener('click', function() {
    window.removeEventListener("scroll", scrollHandler);
    navbar.style.top = "0";
    console.log("show navbar");
    setTimeout(() => {
      window.addEventListener("scroll", scrollHandler);
      console.log("Scroll listener re-enabled");
    }, 10); // change this delay to suit your needs
  });

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;

  // Scrolling — hide navbar
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — hide navbar
      navbar.style.top = "-45px";
    } else {
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
});

function showNavbar() {
  console.log("showNavbar starts")
  navbar.style.top = "0"; //fade it in...
}


