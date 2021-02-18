/* const qs = (element) => {
  return document.querySelector(element);
}; */

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".image");
  const lightBoxes = document.querySelectorAll(".lightbox");

  const closeLightBox = document.querySelectorAll(".lightbox-close");

  images.forEach((image, i) => {
    image.addEventListener("click", (e) => {
      lightBoxes[i].classList.add("lightbox-active");
    });
    closeLightBox[i].addEventListener("click", () => {
      lightBoxes[i].classList.remove("lightbox-active");
    });
  });
  /* // Modal Form
  emailAdress.addEventListener("click", () => {
    modalForm.classList.toggle("hidden");
  });

  // Closing the Modal
  closeModal.addEventListener("click", () => {
    modalForm.classList.remove("hidden");
  });

  // Opening the lightbox
  parking.addEventListener("click", (e) => {
    lightBox.classList.remove("hidden");
  });

  // Closing the Lightbox
  closeLightBox.addEventListener("click", () => {
    lightBox.classList.add("hidden");
  }); */
});
