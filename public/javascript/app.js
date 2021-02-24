const qs = (element) => {
  return document.querySelector(element);
};

window.addEventListener("load", () => {
  let navbar = qs(".navbar");
  let navbarList = qs(".navbar-list");
  let burger = qs(".burger");
  let logo = qs(".logo");
  let emailAdress = qs(".email-adress");

  let buttonRight = qs(".button-right");

  // Navbar Toggle
  burger.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  // Fixed Button Slide Effect
  buttonRight.addEventListener("click", () => {
    buttonRight.classList.toggle("button-active");
  });

  // Modal Form
  emailAdress.addEventListener("click", () => {
    modalForm.classList.toggle("hidden");
  });

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    // Button Right visible from tablet to desktop
    if (window.innerWidth >= 1024) {
      buttonRight.classList.toggle(
        "button-show",
        window.scrollY > 735 && window.scrollY < 7775
      );
    }

    if (window.innerWidth < 1024) {
      buttonRight.classList.toggle(
        "button-show",
        window.scrollY > 772 && window.scrollY < 12375
      );
    }
  });
});
