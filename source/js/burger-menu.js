const navEl = document.querySelector('.nav');
const navToggleEl = document.querySelector('.header__toggle');
const toggleBurgerHandler = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  navToggleEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--opened');
    navToggleEl.classList.toggle('header__toggle--opened');
    const isOpen = navEl.classList.contains('nav--opened');
    if (isOpen) {
      overlay.style.display = 'block';
      document.body.appendChild(overlay);
    } else {
      overlay.remove();
    }
  });
};

export { toggleBurgerHandler };
