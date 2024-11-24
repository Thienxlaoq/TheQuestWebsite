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

    
    
});

function showContent(sectionId) {
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
  };
