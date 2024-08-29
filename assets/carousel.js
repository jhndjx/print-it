let currentIndex = 0;

function updateIndex(direction) {
  const maxIndex = slides.length - 1;
  currentIndex = (currentIndex + (direction === 'left' ? -1 : 1) + slides.length) % slides.length;
  updateCarousel();
}


function updateCarousel() {
  const banner = document.getElementById("the_banner");
  const bannerTagline = document.querySelector("#banner .arrow p");
  
  const { image, tagLine } = slides[currentIndex];
  banner.src = `./assets/images/slideshow/${image}`;
  bannerTagline.innerHTML = tagLine;
  
  switchSelectedDot(currentIndex);
}

document.querySelectorAll('.arrow_left, .arrow_right').forEach(arrow => {
  arrow.addEventListener('click', event => {
    const isLeftArrow = event.target.classList.contains('arrow_left');
    updateIndex(isLeftArrow ? 'left' : 'right');
  });
});

updateCarousel();
