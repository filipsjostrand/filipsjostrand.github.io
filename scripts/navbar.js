const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

// 🎯 Show navbar when any anchor link is clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function () {
    navbar.style.top = "0";
  });
});

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up — show navbar
    navbar.style.top = "0";
  } else if (prevScrollPos < currentScrollPos) {
    // Scrolling down — hide navbar
    navbar.style.top = "-59px"; // adjust based on navbar height
  }

  prevScrollPos = currentScrollPos;
});
