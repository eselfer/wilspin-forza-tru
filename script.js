document.addEventListener('DOMContentLoaded', () => {
    const carImage = document.querySelector('..car-image');
    const revealBtn = document.querySelector('.reveal-btn');
    
    // Анимация поворота автомобиля при наведении
    carImage.addEventListener('mouseenter', () => {
        carImage.style.transform = 'rotateY(360deg)';
    });
    
    // Сброс анимации
    carImage.addEventListener('mouseleave', () => {
        carImage.style.transform = 'rotateY(0deg)';
    });
    
    // Анимация открытия при клике
    revealBtn.addEventListener('click', () => {
        const glow = document.querySelector('.glow-effect');
        glow.style.opacity = '1';
        setTimeout(() => glow.style.opacity = '0', 2000);
        
        carImage.style.transition = 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)';
        carImage.style.transform = 'rotateY(720deg)';
    });
});

