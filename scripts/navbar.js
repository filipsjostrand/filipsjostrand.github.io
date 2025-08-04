let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

let isScrolling;
// let opacity = 0;

window.addEventListener('scroll', function () {
  let opacity = 0;
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
  console.log("showNavbar starts")
  const navbar = document.getElementById("navbar");

    const fadeIn = setInterval(() => {
        console.log("fadeIn starts")
    navbar.style.top = "0"; //fade it in...
    if (opacity < 1) {
      opacity += 0.05; // adjust step size for speed
      navbar.style.opacity = opacity;
      console.log("navbar.style.opacity = " + navbar.style.opacity)
    } else {
      clearInterval(fadeIn); // stop the interval when done
      console.log("fadeIn done")
    }
  }, 50); // adjust timing for smoothness (lower = smoother)
}
