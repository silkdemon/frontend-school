// Функция для обновления данных в HTML
async function updateNewsFromServer() {
    try {
        // Шаг 1: Делаем запрос на сервер для получения данных
        const response = await fetch('https://api.example.com/news'); // Замените на ваш URL API
        if (!response.ok) {
            throw new Error('Ошибка при получении данных с сервера');
        }
        const newsData = await response.json();

        // Шаг 2: Обновляем данные в HTML
        const newsParentElements = document.querySelectorAll('.news-parent');

        newsParentElements.forEach((newsParent, index) => {
            const newsItem = newsData[index];

            if (newsItem) {
                // Обновляем дату
                const dateText = newsParent.querySelector('.date-text');
                if (dateText) {
                    dateText.textContent = newsItem.date;
                }

                // Обновляем количество лайков
                const likeNumbers = newsParent.querySelectorAll('.like-number');
                likeNumbers.forEach(likeNumber => {
                    likeNumber.textContent = newsItem.likes;
                });

                // Обновляем заголовок
                const headingTitle = newsParent.querySelector('.heading-title');
                if (headingTitle) {
                    headingTitle.textContent = newsItem.title;
                }

                // Обновляем описание
                const newsSmallText = newsParent.querySelector('.news-small-text');
                if (newsSmallText) {
                    newsSmallText.textContent = newsItem.description;
                }

                // Обновляем авторов
                const linkTexts = newsParent.querySelectorAll('.link-text');
                linkTexts.forEach((linkText, i) => {
                    if (newsItem.authors[i]) {
                        linkText.textContent = newsItem.authors[i];
                    }
                });

                // Обновляем кнопку регистрации
                const registerBtn = newsParent.querySelector('.register-btn');
                if (registerBtn) {
                    if (newsItem.registrationClosed) {
                        registerBtn.textContent = 'Регистрация закрыта';
                        registerBtn.classList.add('register-inactive-btn');
                    } else {
                        registerBtn.textContent = 'Зарегистрироваться';
                        registerBtn.classList.remove('register-inactive-btn');
                    }
                }
            }
        });
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Вызов функции для обновления данных
updateNewsFromServer();