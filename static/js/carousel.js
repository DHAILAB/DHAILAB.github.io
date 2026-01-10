// Project Carousel JavaScript - Manual Control Only (One Slide at a Time)
let currentIndex = 0;

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initCarousel();
});

function initCarousel() {
  const carousel = document.querySelector('.project-carousel');
  const slides = document.querySelectorAll('.project-slide');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!carousel || slides.length === 0) return;

  // Create dots - one for each slide
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dot.setAttribute('aria-label', `Go to project ${index + 1}`);
    dotsContainer.appendChild(dot);
  });

  // Initial update
  updateCarousel();
}

function moveCarousel(direction) {
  const slides = document.querySelectorAll('.project-slide');
  if (slides.length === 0) return;

  const totalSlides = slides.length;

  // Update index
  currentIndex += direction;

  // Loop around
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateCarousel();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.project-slide');
  if (slides.length === 0) return;

  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.querySelector('.project-carousel');
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!carousel || slides.length === 0) return;

  // Each slide takes 100% width, so offset is simply currentIndex * 100%
  const offset = -(currentIndex * 100);
  carousel.style.transform = `translateX(${offset}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateCarousel();
  }, 150);
});

// Keyboard navigation (Arrow keys)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveCarousel(-1);
  } else if (e.key === 'ArrowRight') {
    moveCarousel(1);
  }
});

// Expose moveCarousel to global scope for onclick handlers
window.moveCarousel = moveCarousel;
