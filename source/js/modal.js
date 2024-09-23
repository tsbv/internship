const initializeModalHandler = () => {
  const modalNode = document.querySelector('.modal');
  const modalFormNode = document.querySelector('.modal__form');
  const modalButtonNode = document.querySelector('.about__button');
  const closeModalNode = document.querySelector('.modal__close-button');
  const toggleModal = (display) => () => {
    modalNode.style.display = display;
  };
  const openModal = toggleModal('block');
  const closeModal = toggleModal('none');
  modalButtonNode.addEventListener('click', openModal);
  closeModalNode.addEventListener('click', closeModal);
  modalNode.addEventListener('click', (event) => event.target === modalNode && closeModal());
  modalFormNode.addEventListener('click', (event) => event.stopPropagation());
  document.addEventListener('keydown', (event) =>
    event.key === 'Escape' && modalNode.style.display === 'block' && closeModal()
  );
};

export { initializeModalHandler };
