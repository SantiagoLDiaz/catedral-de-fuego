// src/scripts/countdown.js
export function initCountdowns() {
  const updateCountdowns = () => {
    const timers = document.querySelectorAll('.countdown-timer');
    const now = new Date().getTime();

    timers.forEach((timer) => {
      const targetStr = timer.getAttribute('data-target');
      if (!targetStr) return;

      const targetDate = new Date(targetStr).getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Manipulación segura del DOM sin innerHTML
        timer.replaceChildren();
        const statusSpan = document.createElement('span');
        statusSpan.className = 'text-xs font-bold text-[#FF9100] uppercase tracking-wider';
        statusSpan.textContent = '¡Evento en desarrollo o finalizado!';
        timer.appendChild(statusSpan);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dElem = timer.querySelector('.days');
      const hElem = timer.querySelector('.hours');
      const mElem = timer.querySelector('.minutes');
      const sElem = timer.querySelector('.seconds');

      if (dElem) dElem.textContent = String(days).padStart(2, '0');
      if (hElem) hElem.textContent = String(hours).padStart(2, '0');
      if (mElem) mElem.textContent = String(minutes).padStart(2, '0');
      if (sElem) sElem.textContent = String(seconds).padStart(2, '0');
    });
  };

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
}