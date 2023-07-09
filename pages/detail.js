document.getElementById("openModal").addEventListener("click", openModal);

function openModal() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  // Set the source of the image to the desired image URL
  modalImage.src = "/pages/img/MH_HarbiyeAcikHava.gif";

  modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", closeModal);

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
