  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  let isScrolling = false;

  function checkIsScrolling(isScrolling) {
    if (isScrolling === false) {
      navbar.style.top = "0";
    } else if (isScrolling === true) {
      navbar.style.top = "-100px";
    }
  }

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    console.log("isScrolling = true")
    isScrolling = true
    
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up or no scroll — show navbar
      navbar.style.top = "0";
    } else if (prevScrollPos < currentScrollPos){
      // Scrolling down — hide navbar
      navbar.style.top = "-100px"; // adjust based on navbar height
    } else if (prevScrollPos === currentScrollPos){
      navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
  });
