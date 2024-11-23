console.log("Script.js подключен");
console.log("Текущий путь: ", window.location.pathname);

document.addEventListener('DOMContentLoaded', () => {
    console.log('The Quest ready!');

    // Кнопка
    const button = document.querySelector('.cta-button');
    const container = document.querySelector('.centered-content');
    const defaultSrc = 'static/img/button-default.svg';
    const hoverSrc = 'static/img/button-hover.svg';

    button.addEventListener('mouseover', () => {
        button.src = hoverSrc;
    });

    button.addEventListener('mouseout', () => {
        button.src = defaultSrc;
    });

    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');

    // Переключение отображения меню
    languageSwitch.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        languageSwitch.classList.toggle('active'); // Добавляем/убираем класс active
    });

    // Останавливаем всплытие кликов внутри меню
    languageMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие, чтобы меню не закрывалось
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', (e) => {
        // Проверяем, находится ли клик за пределами переключателя и меню
        if (!languageSwitch.contains(e.target)) {
            languageSwitch.classList.remove('active');
        }
    });



    document.addEventListener('DOMContentLoaded', () => {
        const pathToIconId = {
            '/info_center': 'infocenter-icon',
            '/map': 'map-icon',
            '/profile': 'profile-icon',
        };
    
        const currentPath = window.location.pathname;
        const activeIconId = pathToIconId[currentPath];
    
        if (activeIconId) {
            // Убираем класс active со всех иконок
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach((link) => link.classList.remove('active'));
    
            // Устанавливаем класс active для текущего пути
            const activeIcon = document.getElementById(activeIconId);
            if (activeIcon) {
                activeIcon.parentElement.classList.add('active');
            }
        }
    });
    
});



