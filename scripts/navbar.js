  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      navbar.style.top = "0";
    } else {
      // Scrolling down — hide navbar
      navbar.style.top = "-45px"; // adjust based on navbar height
    }

    prevScrollPos = currentScrollPos;
  });
