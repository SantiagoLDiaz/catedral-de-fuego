export function initCarousel() {
  const container = document.getElementById('carousel-container');
  const track = document.getElementById('carousel-track');
  const slides = track ? Array.from(track.children) : [];
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const dotsContainer = document.getElementById('dots-container');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let intervalId = null;
  let pauseTimeoutId = null;
  const PAUSE_DURATION = 10000;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (dotsContainer) {
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, idx) => {
        dot.className = idx === currentIndex 
          ? 'w-6 h-2.5 rounded-full bg-[#FF9100] transition-all duration-300' 
          : 'w-2.5 h-2.5 rounded-full bg-white/30 transition-all duration-300';
      });
    }
  };

  const goToSlide = (index) => {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateCarousel();
  };

  const nextSlide = () => goToSlide(currentIndex + 1);

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(nextSlide, 5000);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const pauseTemporarily = (ms = PAUSE_DURATION) => {
    stopTimer();
    if (pauseTimeoutId) clearTimeout(pauseTimeoutId);
    
    pauseTimeoutId = setTimeout(() => {
      startTimer();
    }, ms);
  };

  if (dotsContainer) {
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[#FF9100] w-6' : 'bg-white/30'}`;
      dot.setAttribute('aria-label', `Ir a anuncio ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        pauseTemporarily();
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => { 
      goToSlide(currentIndex - 1); 
      pauseTemporarily(); 
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => { 
      nextSlide(); 
      pauseTemporarily(); 
    });
  }

  if (container) {
    container.addEventListener('mouseenter', stopTimer);
    container.addEventListener('mouseleave', () => {
      if (!pauseTimeoutId) startTimer();
    });
    container.addEventListener('touchstart', stopTimer, { passive: true });
    container.addEventListener('touchend', () => {
      pauseTemporarily();
    }, { passive: true });
  }

  startTimer();
}