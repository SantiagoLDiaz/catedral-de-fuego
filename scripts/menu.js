export function initMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon?.classList.toggle('hidden');
      closeIcon?.classList.toggle('hidden');
    });
  }

  const mediosToggle = document.getElementById('medios-toggle');
  const mediosSubmenu = document.getElementById('medios-submenu');
  const mediosArrow = document.getElementById('medios-arrow');
  if (mediosToggle && mediosSubmenu) {
    mediosToggle.addEventListener('click', () => {
      mediosSubmenu.classList.toggle('hidden');
      mediosArrow?.classList.toggle('rotate-180');
    });
  }

  const redesToggle = document.getElementById('redes-toggle');
  const redesSubmenu = document.getElementById('redes-submenu');
  const redesArrow = document.getElementById('redes-arrow');
  if (redesToggle && redesSubmenu) {
    redesToggle.addEventListener('click', () => {
      redesSubmenu.classList.toggle('hidden');
      redesArrow?.classList.toggle('rotate-180');
    });
  }
}