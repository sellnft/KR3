// scripts/contact-form.js

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById('textInput').value.trim(),
            email: document.getElementById('emailInput').value.trim(),
            message: document.getElementById('messageTextarea').value.trim()
        };
        
        // Валидация
        if (!formData.name) {
            alert('Пожалуйста, введите ваше имя');
            return;
        }
        
        if (!formData.email) {
            alert('Пожалуйста, введите ваш email');
            return;
        }
        
        if (!formData.message) {
            alert('Пожалуйста, введите сообщение');
            return;
        }
        
        // Проверка email с помощью регулярного выражения
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
        
        // Успешная отправка
        alert(`Сообщение от ${formData.name} успешно отправлено!`);
        contactForm.reset();
    });
}

// Инициализация формы после загрузки DOM
document.addEventListener('DOMContentLoaded', initContactForm);