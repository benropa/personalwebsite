let slideIndex = 0;

function moveSlider(n) {
  const sliderContainer = document.querySelector('.slider-container');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth;
  
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = cards.length - 1;
  } else if (slideIndex >= cards.length) {
    slideIndex = 0;
  }
  
  sliderContainer.style.transform = `translateX(${-slideIndex * cardWidth}px)`;
}
