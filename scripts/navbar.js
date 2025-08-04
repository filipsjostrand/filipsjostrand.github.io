const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-59px";
  }

  prevScrollPos = currentScrollPos; // nu uppdateras globalt värde korrekt
}

window.addEventListener("scroll", handleScroll);

// 🎯 Show navbar when any anchor link is clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function () {
    window.removeEventListener("scroll", handleScroll);
    navbar.style.top = "0";
    window.addEventListener("scroll", handleScroll);
  });
});
