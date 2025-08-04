  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      navbar.style.top = "0";
    } else if (prevScrollPos < currentScrollPos){
      // Scrolling down — hide navbar
      navbar.style.top = "-59px"; // adjust based on navbar height
    }

    prevScrollPos = currentScrollPos;

    if (window.scrollY === 663 || window.scrollY === 1495 || window.scrollY === 3103 || window.scrollY === 4507) {
      navbar.style.top = "0";
    }
  });
