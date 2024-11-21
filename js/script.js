document.addEventListener('DOMContentLoaded', () => {
    console.log('The Quest ready!');

    const button = document.querySelector('.cta-button');
    const container = document.querySelector('.centered-content');

    // Задаем исходный и hover изображения
    const defaultSrc = 'img/button-default.svg';
    const hoverSrc = 'img/button-hover.svg';

    // Слушатели событий для кнопки
    button.addEventListener('mouseover', () => {
        button.src = hoverSrc; // Меняем изображение кнопки
        container.classList.add('hover'); // Добавляем hover класс
    });

    button.addEventListener('mouseout', () => {
        button.src = defaultSrc; // Возвращаем изображение кнопки
        container.classList.remove('hover'); // Убираем hover класс
    });
});
