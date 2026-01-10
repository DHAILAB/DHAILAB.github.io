// Project Carousel JavaScript
let currentIndex = 0;
let autoPlayInterval;

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initCarousel();
});

function initCarousel() {
  const carousel = document.querySelector('.project-carousel');
  const slides = document.querySelectorAll('.project-slide');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!carousel || slides.length === 0) return;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Start auto-play
  startAutoPlay();

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
}

function moveCarousel(direction) {
  const carousel = document.querySelector('.project-carousel');
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!carousel || slides.length === 0) return;

  // Calculate slides per view based on screen width
  const slidesPerView = getSlidesPerView();
  const maxIndex = Math.max(0, slides.length - slidesPerView);

  currentIndex += direction;

  // Loop around
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  } else if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  updateCarousel(carousel, dots);

  // Reset auto-play timer
  stopAutoPlay();
  startAutoPlay();
}

function goToSlide(index) {
  const carousel = document.querySelector('.project-carousel');
  const dots = document.querySelectorAll('.carousel-dot');

  currentIndex = index;
  updateCarousel(carousel, dots);

  // Reset auto-play timer
  stopAutoPlay();
  startAutoPlay();
}

function updateCarousel(carousel, dots) {
  const slides = document.querySelectorAll('.project-slide');
  if (slides.length === 0) return;

  // Calculate slide width including gap
  const slideWidth = slides[0].offsetWidth;
  const gap = 32; // 2rem = 32px
  const offset = -(currentIndex * (slideWidth + gap));

  carousel.style.transform = `translateX(${offset}px)`;

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function getSlidesPerView() {
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 992) return 2;
  return 3;
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
}

// Handle window resize
window.addEventListener('resize', () => {
  const carousel = document.querySelector('.project-carousel');
  const dots = document.querySelectorAll('.carousel-dot');
  if (carousel && dots.length > 0) {
    updateCarousel(carousel, dots);
  }
});

// Expose moveCarousel to global scope for onclick handlers
window.moveCarousel = moveCarousel;
