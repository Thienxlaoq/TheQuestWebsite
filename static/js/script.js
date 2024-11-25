// OUR SOCIALS
document.querySelector('.our-socials-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex'; // Используйте flex для центрирования
});

document.getElementById('close-block').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Обработчик клика вне блока для первого оверлея
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay');
    
    // Проверяем, был ли клик вне блока
    if (overlay.style.display === 'flex' && !document.getElementById('content-block').contains(event.target) && event.target !== document.querySelector('.our-socials-btn')) {
        overlay.style.display = 'none';
    }
});

// GET THE QUEST
document.querySelector('.get-the-quest').addEventListener('click', function() {
    document.getElementById('overlaytwo').style.display = 'flex'; // Используйте flex для центрирования
});

document.getElementById('close-block').addEventListener('click', function() {
    document.getElementById('overlaytwo').style.display = 'none';
});

// Обработчик клика вне блока для второго оверлея
document.addEventListener('click', function(event) {
    const overlaytwo = document.getElementById('overlaytwo');
    
    // Проверяем, был ли клик вне блока
    if (overlaytwo.style.display === 'flex' && !document.getElementById('content-block').contains(event.target) && event.target !== document.querySelector('.get-the-quest')) {
        overlaytwo.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('The Quest ready!');

    // Кнопка
    const button = document.querySelector('.cta-button');
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

function showContent(event, sectionId) {
    // Скрыть весь контент
    document.querySelectorAll('.content').forEach((content) => {
        content.style.display = 'none';
    });
  
    // Показать выбранный контент
    document.getElementById(sectionId).style.display = 'block';
  
    // Убрать "active" со всех кнопок
    document.querySelectorAll('.menu-button').forEach((button) => {
        button.classList.remove('active');
    });
  
    // Добавить "active" к нажатой кнопке
    event.currentTarget.classList.add('active');
}