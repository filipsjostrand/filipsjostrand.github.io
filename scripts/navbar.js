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
  }, 1000); // adjust delay as needed (300ms is typical)
  prevScrollPos = currentScrollPos;
});

function showNavbar() {
  const navbar = document.getElementById("navbar");
  let opacity = 0; // reset each time
  navbar.style.top = "0";
  navbar.style.opacity = "0";

  const fadeIn = setInterval(() => {
    opacity += 0.02; // smoother fade
    navbar.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeIn);
    }
  }, 20); // adjust speed as needed
}
