const container = document.querySelector("#banner .dots");
container.innerHTML = slides
  .map((_, i) => `<div class="dot${i === 0 ? ' dot_selected' : ''}" data-index="${i}"></div>`)
  .join('');

function switchSelectedDot(actualImage) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => {
    dot.classList.toggle("dot_selected", parseInt(dot.dataset.index) === actualImage);
  });
}