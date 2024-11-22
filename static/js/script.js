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
    const languageSpan = document.querySelector('.language-switch span');

    languageSwitch.addEventListener('click', () => {
        languageSwitch.classList.toggle('active');
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (!languageSwitch.contains(e.target)) {
            languageSwitch.classList.remove('active');
        }
    });

    // Обновление выбранного языка
    languageMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            languageSpan.textContent = e.target.textContent;
            languageSwitch.classList.remove('active');
        }
    });
});

