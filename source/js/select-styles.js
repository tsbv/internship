const initializeSelectStyles = () => {
  const selectButtonNode = document.querySelector('.select__button');
  const labelNode = document.querySelector('.form-element__select-label');
  let isFocused = false;
  const toggleStyles = (isHovered) => {
    labelNode.style.color = isHovered || isFocused ? '#f0efe9' : '';
    selectButtonNode.style.borderColor = isHovered ? '#ffffff' : '';
  };
  selectButtonNode.addEventListener('mouseenter', () => toggleStyles(true));
  selectButtonNode.addEventListener('mouseleave', () => toggleStyles(false));
  selectButtonNode.addEventListener('focusin', () => {
    if (selectButtonNode.matches(':focus-visible')) {
      isFocused = true;
      toggleStyles(true);
    }
  });
  selectButtonNode.addEventListener('focusout', () => {
    isFocused = false;
    toggleStyles(false);
  });
};

export { initializeSelectStyles };
