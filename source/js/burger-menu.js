const navEl = document.querySelector('.nav');
const navToggleEl = document.querySelector('.header__toggle');
const toggleBurgerHandler = () => {
  navToggleEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
  });
};

export { toggleBurgerHandler };
