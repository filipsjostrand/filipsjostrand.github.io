const navbar = document.getElementById("navbar");

const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let isNavTemporarilyLocked = false;
let scrollTimeout;
let prevScrollPos = window.pageYOffset;

function showNavbar() {
  if (navbar) {
    navbar.style.top = "0";
  }
}

// Prevent scroll from hiding navbar temporarily
function temporarilyLockNavbar() {
  isNavTemporarilyLocked = true;
  showNavbar(); // ensure it's visible

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isNavTemporarilyLocked = false;
  }, 1500); // lock for 1.5 seconds
}

// Generalized nav click handler
function setupNavClick(element, name) {
  element.addEventListener("click", function () {
    console.log(`${name} clicked`);
    element.scrollIntoView({ behavior: "smooth" });
    temporarilyLockNavbar(); // prevent scroll from hiding it right after
  });
}

// Setup each nav click
setupNavClick(todosNav, "Todos");
setupNavClick(weekNav, "Week");
setupNavClick(planNav, "Plan");
setupNavClick(timerNav, "Timer");
setupNavClick(aboutNav, "About");

// Scroll behavior
window.addEventListener("scroll", function () {
  if (isNavTemporarilyLocked) return;

  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    showNavbar(); // scrolling up
  } else {
    navbar.style.top = "-59px"; // scrolling down
  }

  prevScrollPos = currentScrollPos;
});
