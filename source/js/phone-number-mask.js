const setupPhoneNumberMask = () => {
  const phoneInputNodes = document.querySelectorAll('.field--tel');
  const formatPhoneNumber = (value) => {
    if (!value) {
      return ''; // Возвращаем пустую строку, если нет значения
    }
    const digits = value.substring(0, 10); // Используем только первые 10 цифр, Форматируем номер телефона
    const countryCode = '+7';
    const areaCode = digits.substring(0, 3);
    const firstPart = digits.substring(3, 6);
    const secondPart = digits.substring(6, 8);
    const thirdPart = digits.substring(8, 10);
    return `${countryCode} ${areaCode} ${firstPart} ${secondPart} ${thirdPart}`.trim(); // Объединяем все части
  };

  phoneInputNodes.forEach((phoneInputNode) => {
    phoneInputNode.addEventListener('input', (event) => {
      const digits = event.target.value.replace(/\D/g, '').replace(/^7/, ''); // Удаляем все нецифровые символы и начальную «+7», если она есть
      event.target.value = formatPhoneNumber(digits); // Форматируем цифры и устанавливаем входное значение
    });
  });
};

export { setupPhoneNumberMask };
