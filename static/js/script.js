// OUR SOCIALS
document.querySelector('.our-socials-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex'; // Используйте flex для центрирования
});

document.getElementById('close-block').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Обработчик клика вне блока
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay');
    
    // Проверяем, был ли клик вне блока
    if (overlay.style.display === 'flex' && !document.getElementById('content-block').contains(event.target) && event.target !== document.querySelector('.our-socials-btn')) {
        overlay.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('The Quest ready!');

    // Кнопка
    const button = document.querySelector('.cta-button');
    const container = document.querySelector('.centered-content');
    const defaultSrc = 'static/img/button-default.svg';
    const hoverSrc = 'static/img/button-hover.svg';

    // Проверка на наличие кнопки перед добавлением обработчиков событий
    if (button) {
        button.addEventListener('mouseover', () => {
            button.src = hoverSrc;
        });

        button.addEventListener('mouseout', () => {
            button.src = defaultSrc;
        });
    }

    // LANGUAGE SWITCH
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');

    if (languageSwitch && languageMenu) {
        languageSwitch.addEventListener('click', function(event) {
            event.stopPropagation(); // Остановить всплытие события
            languageSwitch.classList.toggle('active'); // Переключаем активное состояние
            languageMenu.style.display = languageSwitch.classList.contains('active') ? 'block' : 'none'; // Показываем/скрываем меню
        });

        // Закрыть меню, если кликнули вне его
        document.addEventListener('click', function() {
            languageSwitch.classList.remove('active');
            languageMenu.style.display = 'none'; // Скрыть меню
        });
    }
});