const setupSelectStylesHandler = () => {
  const selectButtonNode = document.querySelector('.select__button');
  const labelNode = document.querySelector('.form-element__select-label');
  const darkSelectButtonNode = document.querySelector('.select--dark .select__button');
  const darkLabelNode = document.querySelector('.form-element__select-label-dark');
  let isFocused = false;
  let isDarkFocused = false;
  const toggleStyles = (isHovered) => {
    labelNode.style.color = isHovered || isFocused ? '#f0efe9' : '';
    selectButtonNode.style.borderColor = isHovered ? '#ffffff' : '';
  };
  const toggleDarkStyles = (isHovered) => {
    if (darkLabelNode) {
      darkLabelNode.style.color = isHovered || isDarkFocused ? '#484848' : '';
    }
  };
  selectButtonNode.addEventListener('mouseenter', () => toggleStyles(true)); // Обработчики светлой темы
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
  if (darkSelectButtonNode && darkLabelNode) { // Обработчики темной темы
    darkSelectButtonNode.addEventListener('mouseenter', () => toggleDarkStyles(true));
    darkSelectButtonNode.addEventListener('mouseleave', () => toggleDarkStyles(false));
    darkSelectButtonNode.addEventListener('focusin', () => {
      isDarkFocused = true;
      toggleDarkStyles(true);
    });
    darkSelectButtonNode.addEventListener('focusout', () => {
      isDarkFocused = false;
      toggleDarkStyles(false);
    });
  }
};

export { setupSelectStylesHandler };
