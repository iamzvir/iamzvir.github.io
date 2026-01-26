document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Получаем данные (для примера)
      const inputs = form.querySelectorAll('input, select, textarea');
      let isValid = true;

      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.style.border = '2px solid red';
        } else {
          input.style.border = '1px solid #ddd';
        }
      });

      if (isValid) {
        alert('Дякуємо! Ваша заявка успішно відправлена. Менеджер зв\'яжеться з вами найближчим часом.');
        form.reset();
      } else {
        alert('Будь ласка, заповніть обов\'язкові поля.');
      }
    });
  }

  // Плавный скролл к якорям (если добавить ссылки в меню)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});