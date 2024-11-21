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



    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const languageSpan = document.querySelector('.language-switch span');

    // Переключение отображения меню и вращение иконки
    languageSwitch.addEventListener('click', () => {
        languageSwitch.classList.toggle('active'); // Добавляем/убираем класс active
    });

    // Выбор языка
    languageMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedLang = e.target.textContent; // Получаем выбранный язык
            languageSpan.textContent = selectedLang; // Обновляем текст в переключателе
            languageSwitch.classList.remove('active'); // Закрываем меню
        }
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', (e) => {
        if (!languageSwitch.contains(e.target)) {
            languageSwitch.classList.remove('active');
        }
    });


});
