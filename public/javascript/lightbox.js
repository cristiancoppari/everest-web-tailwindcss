window.addEventListener("load", () => {
  /****** Lightboxes ******/
  const images = document.querySelectorAll(".image");
  const lightBoxes = document.querySelectorAll(".lightbox");

  const closeLightBox = document.querySelectorAll(".lightbox-close");

  /****** Modal Form ******/
  const modalForm = document.querySelector(".modal-form");
  const emailAdress = document.querySelector(".email-adress");
  const closeModal = document.querySelector(".modal-close");

  emailAdress.addEventListener("click", () => {
    modalForm.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    modalForm.classList.add("hidden");
  });

  /******* Video 1 *******/
  /* const playIcon = document.querySelector(".icon-play");
  const videoPopUp = document.querySelector(".modal-video");
  const closeVideo = document.querySelector(".video-close");

  playIcon.addEventListener("click", () => {
    videoPopUp.classList.remove("hidden");
  });

  closeVideo.addEventListener("click", () => {
    videoPopUp.classList.add("hidden");
  }); */

  /******* Location *******/
  /* const viewLocation = document.querySelector(".button-view-location");
  const locationPopUp = document.querySelector(".location-modal");
  const closeLocation = document.querySelector(".location-close");

  viewLocation.addEventListener("click", () => {
    locationPopUp.classList.remove("hidden");
  });

  closeLocation.addEventListener("click", () => {
    locationPopUp.classList.add("hidden");
  }); */
});
