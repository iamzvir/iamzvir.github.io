document.addEventListener('DOMContentLoaded', () => {

  // 1. Плавная прокрутка для всех якорных ссылок
  const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // 2. Обработка отправки формы
  const handleFormSubmit = () => {
    const form = document.querySelector('.footer-form form');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Имитация отправки
        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'Відправка...';

        setTimeout(() => {
          alert('Дякуємо! Ваша заявка прийнята. Ми зв’яжемося з вами найближчим часом.');
          btn.disabled = false;
          btn.textContent = originalText;
          form.reset();
        }, 1500);
      });
    }
  };

  // 3. Анимация появления элементов при скролле (Intersection Observer)
  const revealOnScroll = () => {
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Элементы для анимации
    const animatedElements = document.querySelectorAll('.card, .adv-item, .price-card, .section-title');

    animatedElements.forEach(el => {
      el.classList.add('reveal'); // Добавляем базовый класс анимации
      observer.observe(el);
    });
  };

  // Запуск всех функций
  smoothScroll();
  handleFormSubmit();
  revealOnScroll();
});