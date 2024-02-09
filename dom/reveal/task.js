document.addEventListener('DOMContentLoaded', function() {
  const revealElements = document.querySelectorAll('.reveal');

  function showElementOnScroll() {
      revealElements.forEach(element => {
          if (isElementVisible(element)) {
              element.classList.add('reveal_active');
          }
      });
  }

  function isElementVisible(element) {
      const elementTop = element.getBoundingClientRect().top;
      return elementTop < window.innerHeight - 100; // Отнимаю 100 для более плавного пользовательского опыта.
  }

  window.addEventListener('scroll', showElementOnScroll);
  showElementOnScroll(); // Может быть нужные для появления элементы уже должны были быть отображены без скролла.
});
