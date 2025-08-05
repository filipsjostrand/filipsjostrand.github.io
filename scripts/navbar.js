//const navbar = document.getElementById("navbar");

const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

function showNavbar() {
  const navbar = document.getElementById("navbar");

    if (navbar) {
    navbar.style.top = "0";
}

todosNav.addEventListener('click', function () {
  console.log("top-todos div was clicked!");
    // Add your click logic here
  todosNav.scrollIntoView({
    behavior: "smooth" // adds a smooth animation
  });
  //navbar.style.top = "0"; 
  showNavbar();
  // Add your click logic here
});

weekNav.addEventListener('click', function () {
  console.log("week div was clicked!");
  // Add your click logic here
  weekNav.scrollIntoView({
    behavior: "smooth" // adds a smooth animation
  });
  //navbar.style.top = "0";
  showNavbar();
});
planNav.addEventListener('click', function () {
  console.log("plan div was clicked!");
  // Add your click logic here
    planNav.scrollIntoView({
    behavior: "smooth" // adds a smooth animation
  });
  //navbar.style.top = "0";
  showNavbar();
});
timerNav.addEventListener('click', function () {
  console.log("timer div was clicked!");
  // Add your click logic here
    timerNav.scrollIntoView({
    behavior: "smooth" // adds a smooth animation
  });
  //navbar.style.top = "0";
  showNavbar();
});
aboutNav.addEventListener('click', function () {
  console.log("about div was clicked!");
  // Add your click logic here
    aboutNav.scrollIntoView({
    behavior: "smooth" // adds a smooth animation
  });
  //navbar.style.top = "0";
  showNavbar();
});

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
  }
  else {
    navbar.style.top = "-59px"; // - hide scrollbar
  } 

  prevScrollPos = currentScrollPos;
});
