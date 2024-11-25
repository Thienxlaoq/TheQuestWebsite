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

    button.addEventListener('mouseover', () => {
        button.src = hoverSrc;
    });

    button.addEventListener('mouseout', () => {
        button.src = defaultSrc;
    });

    // LANGUAGE SWITCH
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');

    languageSwitch.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        languageSwitch.classList.toggle('active'); // Переключаем активное состояние
        languageMenu.style.display = languageSwitch.classList.contains('active') ? 'block' : 'none'; // Показываем/скрываем меню
    });

    const translations = {
        en: {
            welcome: "Welcome to",
            title: "The Quest",
            socials: "OUR SOCIALS"
            
        },
        ru: {
            welcome: "Добро пожаловать в",
            title: "The Quest",
            socials: "НАШИ СОЦСЕТИ"
        },
    };

    languageMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.getAttribute('data-lang');
            console.log('Выбранный язык:', selectedLanguage);
            updateLanguage(selectedLanguage); // Обновляем язык
            languageSwitch.classList.remove('active'); // Закрываем меню после выбора
        }
    });

    function updateLanguage(selectedLanguage) {
        document.querySelector('.welcome').textContent = translations[selectedLanguage].welcome;
        document.querySelector('.title').textContent = translations[selectedLanguage].title;
        document.querySelector('.socials').textContent = translations[selectedLanguage].socials;
        // Обновите другие элементы текста по мере необходимости
    }

    // Закрыть меню, если кликнули вне его
    document.addEventListener('click', function() {
        languageSwitch.classList.remove('active');
        languageMenu.style.display = 'none'; // Скрыть меню
    });
});