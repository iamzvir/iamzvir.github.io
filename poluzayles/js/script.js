document.addEventListener('DOMContentLoaded', () => {

  // --- Мобильное меню ---
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  burgerBtn.addEventListener('click', () => {
    // Переключаем класс active для меню
    navMenu.classList.toggle('active');

    // Анимация бургера (опционально, можно добавить CSS для крестика)
    // burgerBtn.classList.toggle('open');
  });

  // Закрытие меню при клике на ссылку (удобно для одностраничников)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // --- Обработка формы ---
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Отменяем стандартную отправку

    // Здесь можно добавить логику отправки данных на сервер
    // Пока просто выведем сообщение
    alert('Дякуємо! Ваша заявка прийнята. Ми зв\'яжемося з вами найближчим часом.');

    contactForm.reset(); // Очистить форму
  });

});