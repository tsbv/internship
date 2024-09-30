const initializeCheckboxValidation = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const checkboxControl = checkbox.nextElementSibling;
    checkbox.addEventListener('invalid', (event) => {
      event.preventDefault();
      checkboxControl.classList.add('checkbox__input--error');
      checkbox.checked = false;
    });
    checkbox.addEventListener('change', () =>
      checkbox.checked && checkboxControl.classList.remove('checkbox__input--error')
    );
  });
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', () => {
      checkboxes.forEach((checkbox) => {
        if (checkbox.validity.valid) {
          checkbox.nextElementSibling.classList.remove('checkbox__input--error');
        }
      });
    });
  }
};

export { initializeCheckboxValidation };
