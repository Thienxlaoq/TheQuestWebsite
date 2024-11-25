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


// OUR SOCIALS
document.querySelector('.our-socials-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex'; // Используйте flex для центрирования
});

document.getElementById('close-block').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// LANGUAGE SWITCH
document.addEventListener('DOMContentLoaded', function() {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    
    languageSwitch.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        languageSwitch.classList.toggle('active'); // Переключаем активное состояние
    });

    languageMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.getAttribute('data-lang');
            console.log('Выбранный язык:', selectedLanguage); // Здесь можно добавить логику для изменения языка
            languageSwitch.classList.remove('active'); // Закрываем меню после выбора
        }
    });
    
    // Закрыть меню, если кликнули вне его
    document.addEventListener('click', function() {
        languageSwitch.classList.remove('active');
    });

    document.addEventListener('click', function() {
        languageSwitch.classList.remove('active');
    });
    
});

// GET THE QUEST
document.querySelector('.get-the-quest').addEventListener('click', function() {
    document.getElementById('overlaytwo').style.display = 'flex'; // Используйте flex для центрирования
});

document.getElementById('close-block-two').addEventListener('click', function() {
    document.getElementById('overlaytwo').style.display = 'none';
});



// progress-bar

document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('progress');
    let progress = 0; // Начальное значение прогресса
    const targetProgress = 70; // Целевой процент

    const interval = setInterval(() => {
        if (progress < targetProgress) {
            progress++;
            progressElement.style.width = `${progress}%`;
        } else {
            clearInterval(interval); // Остановка таймера на 70%
        }
    }, 30); // Интервал обновления в миллисекундах
});
