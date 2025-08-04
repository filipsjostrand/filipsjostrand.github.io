const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");
const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

// Helper: check if element is near top of view
function isElementNearTop(element, offset = 50) {
  const elementTop = element.getBoundingClientRect().top;
  return elementTop >= 0 && elementTop <= offset;
}

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  // Basic scroll direction behavior
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; // scroll up — show navbar
  } else {
    navbar.style.top = "-59px"; // scroll down — hide navbar
  }
  prevScrollPos = currentScrollPos;

  // Section-specific reveal logic
  if (
    isElementNearTop(weekNav) ||
    isElementNearTop(planNav) ||
    isElementNearTop(timerNav) ||
    isElementNearTop(aboutNav)
  ) {
    navbar.style.top = "0"; // make navbar visible when a section hits top
  }
});
