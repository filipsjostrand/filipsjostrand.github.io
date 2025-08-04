let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

let isScrolling;

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;

  // Scrolling — hide navbar
  navbar.style.top = "-100px"; // adjust based on navbar height
  
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    // Scrolling has stopped!
    // Call showNavbar function:
    showNavbar(); 
  }, 300); // adjust delay as needed (300ms is typical)
  prevScrollPos = currentScrollPos;
});

function showNavbar() {
  console.log("showNavbar starts")
  const navbar = document.getElementById("navbar");
  
  navbar.style.top = "0"; //fade it in...
}
