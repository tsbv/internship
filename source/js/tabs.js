const setupTabsHandler = () => {
  const tabListNode = document.querySelector('.tabs');
  const tabButtonNodes = document.querySelectorAll('.tabs__button');
  tabListNode.addEventListener('click', (event) => {
    tabButtonNodes.forEach((tabButtonNode) =>
      tabButtonNode.classList.toggle('tabs__button--active', tabButtonNode === event.target) // Переключатель класса «активный», удаляя его из других
    );
  });
};

export { setupTabsHandler };
