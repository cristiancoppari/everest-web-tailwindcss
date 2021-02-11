const qs = (element) => {
  return document.querySelector(element);
};

window.addEventListener("load", () => {
  let navbar = qs(".navbar");
  let navbarList = qs(".navbar-list");
  let burger = qs(".burger");
  let logo = qs(".logo");

  // Navbar Toggle
  burger.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("fixed-top", window.scrollY > 50);
    navbar.classList.toggle("shadow-2xl", window.scrollY > 50);

    if (window.scrollY > 50) {
      logo.src = "./images/icons/logo-gold.svg";
    } else {
      logo.src = "./images/icons/logo-white.svg";
    }
  });
});
