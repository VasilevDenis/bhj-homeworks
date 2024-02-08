const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');

  button.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });

  const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const value = item.textContent;
      button.textContent = value;
      list.classList.remove('dropdown__list_active');
    });
  });
});
