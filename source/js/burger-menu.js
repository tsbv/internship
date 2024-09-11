const navEl = document.querySelector('.nav');
const navToggleEl = document.querySelector('.header__toggle');
const toggleBurgerHandler = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  navToggleEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    overlay.style.display = navEl.classList.contains('nav--open') ? 'block' : 'none';
    if (navEl.classList.contains('nav--open')) {
      document.body.appendChild(overlay);
    } else {
      overlay.remove();
    }
  });
};

export { toggleBurgerHandler };
