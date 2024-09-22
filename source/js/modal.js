const initializeModal = () => {
  const modalNode = document.querySelector('.modal');
  const modalWrapperNode = document.querySelector('.modal__wrapper');
  const modalButtonNode = document.querySelector('.about__button');
  const closeModalNode = document.querySelector('.modal__close-button');
  const toggleModal = (display) => () => {
    modalNode.style.display = display;
  };
  const openModal = toggleModal('block');
  const closeModal = toggleModal('none');
  modalButtonNode.addEventListener('click', openModal);
  closeModalNode.addEventListener('click', closeModal);
  modalNode.addEventListener('click', (event) => {
    if (event.target === modalNode) {
      closeModal();
    }
  });
  modalWrapperNode.addEventListener('click', (event) => event.stopPropagation());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalNode.style.display === 'block') {
      closeModal();
    }
  });
};
export { initializeModal };
