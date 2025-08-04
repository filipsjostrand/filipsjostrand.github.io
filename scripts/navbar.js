let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

let isNavbarRolledUp = false;
let isNavbarClicked = false;
let lastScroll = "none";

// Show navbar function — updates state directly
function showNavbar(source = "manual") {
  navbar.style.top = "0";
  isNavbarRolledUp = false;
  isNavbarClicked = source === "button";
  lastScroll = source;
  console.log(`Navbar shown via ${source}`);
}

// Hide navbar function
function hideNavbar(source = "manual") {
  navbar.style.top = "-45px";
  isNavbarRolledUp = true;
  isNavbarClicked = false;
  lastScroll = source;
  console.log(`Navbar hidden via ${source}`);
}

let isScrollLocked = false;

navbar.addEventListener("click", () => {
  navbar.style.top = "0";
  isNavbarRolledUp = false;
  isNavbarClicked = true;
  lastScroll = "button";
  isScrollLocked = true; // block scroll action temporarily

  console.log("Navbar clicked — showing and locking scroll behavior");

  // Unlock after a delay
  setTimeout(() => {
    isScrollLocked = false;
    isNavbarClicked = false;
    console.log("Scroll behavior re-enabled");
  }, 1000); // increase if needed for smoother UX
});



// Scroll listener
window.addEventListener("scroll", () => {
  if (isScrollLocked) {
    // Don't do anything while locked
    return;
  }

  const currentScrollPos = window.pageYOffset;
  const scrollingDown = currentScrollPos > prevScrollPos;

  if (scrollingDown) {
    navbar.style.top = "-45px";
    isNavbarRolledUp = true;
    lastScroll = "manual";
  } else {
    // optional: show on scroll up
    navbar.style.top = "0";
    isNavbarRolledUp = false;
    lastScroll = "manual";
  }

  prevScrollPos = currentScrollPos;
});
