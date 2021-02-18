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

  // Closing the Modal
  /* closeModal.addEventListener("click", () => {
    modalForm.classList.remove("hidden");
  }); */

  // Opening the lightbox
  /* parking.addEventListener("click", (e) => {
    lightBox.classList.remove("hidden");
  }); */

  // Closing the Lightbox
  /* closeLightBox.addEventListener("click", () => {
    lightBox.classList.add("hidden");
  }); */

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    // Fixed Navbar
    navbar.classList.toggle("fixed-top", window.scrollY > 50);

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

    if (window.scrollY > 50) {
      logo.src = "/public/images/icons/logo-gold.svg";
    } else {
      logo.src = "/public/images/icons/logo-white.svg";
    }

    // console.log(window.scrollY);
  });
});
