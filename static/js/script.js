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

    // Переключатель языка
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = document.querySelector('.arrow-icon');

    if (!languageSwitch || !languageMenu || !arrowIcon) {
        console.error('Элементы переключателя языка не найдены.');
        return;
    }

    // Открытие/закрытие меню
    languageSwitch.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        languageSwitch.classList.toggle('active');
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', (e) => {
        if (!languageSwitch.contains(e.target)) {
            languageSwitch.classList.remove('active');
        }
    });

    // Поворот стрелки при открытии меню
    const observer = new MutationObserver(() => {
        if (languageSwitch.classList.contains('active')) {
            arrowIcon.style.transform = 'rotate(180deg)';
        } else {
            arrowIcon.style.transform = 'rotate(0deg)';
        }
    });

    observer.observe(languageSwitch, { attributes: true, attributeFilter: ['class'] });

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

  