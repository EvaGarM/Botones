// BOTON HACE QUE SALGA EL MODAL

const buttonToOpenModal = document.querySelector(".solid-button");
const buttonToCloseModal = document.querySelector("#modal .outline-button");
const modalSection = document.querySelector("#modal");

buttonToOpenModal.addEventListener("click", (event) => {
  modalSection.classList.toggle("modal-hidden");
});

buttonToCloseModal.addEventListener("click", (event) => {
  modalSection.classList.toggle("modal-hidden");
});
