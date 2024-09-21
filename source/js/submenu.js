const navSubmenuHandler = () => {
  const navLinkNodes = document.querySelectorAll('.nav__link-arrow');
  navLinkNodes.forEach((navLinkNode) => {
    navLinkNode.addEventListener('click', (event) => {
      event.preventDefault();
      navLinkNode.classList.toggle('nav__link--open');
      const submenu = navLinkNode.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('nav__submenu--open');
      }
    });
  });
};

export { navSubmenuHandler };
