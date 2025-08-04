 let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  let isScrolling;

  window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    // Hide navbar immediately
    navbar.style.top = "-100px";

    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(showNavbar, 4000);
    prevScrollPos = currentScrollPos;
  });

  function showNavbar() {
    let opacity = 0;

    navbar.style.top = "0";
    navbar.style.opacity = "0"; // Reset opacity for each show

    function fade() {
      opacity += 0.01;
      if (opacity <= 1) {
        navbar.style.opacity = opacity;
        requestAnimationFrame(fade);
      }
    }

    fade();
  }
