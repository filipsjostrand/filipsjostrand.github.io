let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

let isScrolling;
let opacity = 0;

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      navbar.style.top = "0";
      navbar.style.opacity = 0;
    } else {
      // Scrolling down — hide navbar
      navbar.style.top = "-100px"; // adjust based on navbar height
    }
  
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    // Scrolling has stopped!
    // Call showNavbar function:
    showNavbar(); 
  }, 300); // adjust delay as needed (300ms is typical)
  prevScrollPos = currentScrollPos;
});

function showNavbar() {
  const navbar = document.getElementById("navbar");

    const fadeIn = setInterval(() => {
    navbar.style.top = "0"; //fade it in...
    if (opacity < 1) {
      opacity += 0.1; // adjust step size for speed
      navbar.style.opacity = opacity;
    } else {
      clearInterval(fadeIn); // stop the interval when done
    }
  }, 30); // adjust timing for smoothness (lower = smoother)
}
