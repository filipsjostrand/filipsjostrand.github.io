const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

let anchorClicked = false;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function () {
    anchorClicked = true;
    navbar.style.top = "0";

    setTimeout(() => {
      anchorClicked = false;
    }, 300); // adjust delay as needed
  });
});

window.addEventListener("scroll", function () {
  if (anchorClicked) return; // ⛔ skip scroll logic briefly

  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else if (prevScrollPos < currentScrollPos) {
    navbar.style.top = "-59px";
  }

  prevScrollPos = currentScrollPos;
});

