document.addEventListener('DOMContentLoaded', () => {

  // Слайдер галереи
  const track = document.querySelector('.gallery-track');
  const btnPrev = document.querySelector('.gallery-btn-prev');
  const btnNext = document.querySelector('.gallery-btn-next');
  const dots = document.querySelectorAll('.dot');

  if (track && btnPrev && btnNext) {
    let currentIndex = 0;
    const totalImages = document.querySelectorAll('.gallery-track img').length;
    const itemsPerView = 3;
    const maxSlides = Math.ceil(totalImages / itemsPerView);

    function updateSlider() {
      const offset = (currentIndex % maxSlides) * itemsPerView;
      track.style.transform = `translateX(-${offset * (100 / itemsPerView)}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % maxSlides;
      updateSlider();
    });

    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + maxSlides) % maxSlides;
      updateSlider();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
  }

  // Бургер меню функция
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Закрыть меню при клике на ссылку
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

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