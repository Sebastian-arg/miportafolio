const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const certificateImages = document.querySelectorAll(".certificate-image");
const closeButton = document.querySelector(".close-button");

certificateImages.forEach(image => {
  image.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
});

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
