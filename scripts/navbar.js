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

navbar.addEventListener('click', () => {
  // Show navbar instantly
  navbar.style.top = "0";

  // Update state to reflect this is a button-triggered reveal
  isNavbarRolledUp = false;
  isNavbarClicked = true;
  lastScroll = "button";

  console.log("Navbar clicked — forced to show");

  // Optionally reset the 'clicked' state after some time to allow scroll behavior again
  setTimeout(() => {
    isNavbarClicked = false;
    console.log("Navbar clicked state reset");
  }, 500); // tweak this delay as needed
});


// Scroll listener
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  const scrollingUp = currentScrollPos < prevScrollPos;
  const scrollingDown = currentScrollPos > prevScrollPos;

  if (isNavbarClicked) {
    // If clicked recently, ignore scroll behavior
    return;
  }

  if (scrollingDown) {
    hideNavbar("manual");
  } else if (scrollingUp) {
    hideNavbar("manual");
  }

  prevScrollPos = currentScrollPos;
});
