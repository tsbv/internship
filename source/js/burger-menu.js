const toggleBurgerHandler = () => {
  const navEl = document.querySelector('.nav');
  const navToggleEl = document.querySelector('.header__toggle');
  const overlay = Object.assign(document.createElement('div'), { className: 'overlay' });
  const toggleNav = (isOpen) => {
    navEl.classList.toggle('nav--opened', isOpen);
    navToggleEl.classList.toggle('header__toggle--opened', isOpen);
    if (isOpen) {
      overlay.style.display = 'block';
      document.body.appendChild(overlay);
    } else {
      overlay.remove();
    }
  };
  const handleClickOutside = (event) => {
    if (!navEl.contains(event.target) && !navToggleEl.contains(event.target)) {
      toggleNav(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };
  navToggleEl.addEventListener('click', () => {
    const isOpen = !navEl.classList.contains('nav--opened');
    toggleNav(isOpen);
    document[isOpen ? 'addEventListener' : 'removeEventListener']('click', handleClickOutside);
  });
};

export { toggleBurgerHandler };
