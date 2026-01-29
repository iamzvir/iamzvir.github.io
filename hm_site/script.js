
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Header scroll effect
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky-active');
            header.classList.remove('absolute');
        } else {
            header.classList.remove('sticky-active');
            header.classList.add('absolute');
        }
    });

    // 3. Reveal elements on scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.benefit-card, .house-card, section h2');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].style.opacity = '1';
                reveals[i].style.transform = 'translateY(0)';
            }
        }
    };
    
    // Initial reveal settings
    document.querySelectorAll('.benefit-card, .house-card, section h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load

    // 4. Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Form handling
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = leadForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            // Basic UI feedback
            submitBtn.disabled = true;
            submitBtn.innerText = 'ОТПРАВКА...';
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                const name = document.getElementById('userName').value;
                alert(`Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`);
                leadForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = '1';
            }, 1500);
        });
    }

    // 6. Project count animation (bonus)
    // You could add logic here for counting numbers if needed
});
