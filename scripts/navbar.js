const navbar = document.getElementById("navbar");

const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

function showNavbar() {
  if (navbar) {
    navbar.style.top = "0";
  }
}

function handleNavClick(section, name) {
  section.addEventListener("click", function () {
    console.log(`${name} div was clicked!`);
    showNavbar(); // Ensure navbar is visible
    section.scrollIntoView({ behavior: "smooth" });
  });
}

// Apply handlers
handleNavClick(todosNav, "top-todos");
handleNavClick(weekNav, "week");
handleNavClick(planNav, "plan");
handleNavClick(timerNav, "timer");
handleNavClick(aboutNav, "about");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.style.top = "0";
  } else {
    // Scrolling down
    navbar.style.top = "-59px";
  }

  prevScrollPos = currentScrollPos;
});
