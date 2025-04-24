export const pr1 = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- Мета-теги -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Страница о нашей компании - история, достижения, услуги и контакты">
    <title>О компании - ВебСтудия Профи</title>
</head>
<body>
    <!-- Шапка сайта -->
    <header>
        <h1>ВебСтудия Профи</h1>
        <p>Создаем digital-решения для вашего бизнеса с 2010 года</p>
        
        <!-- Основная навигация -->
        <nav>
            <ul>
                <li><a href="#about">О компании</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#team">Команда</a></li>
                <li><a href="#contacts">Контакты</a></li>
                <li><a href="https://blog.webprofi.ru" target="_blank">Наш блог</a></li>
            </ul>
        </nav>
    </header>

    <!-- Основное содержимое страницы -->
    <main>
        <!-- Секция "О компании" -->
        <section id="about">
            <h2>О нашей компании</h2>
            <article>
                <h3>Наша история</h3>
                <p>Компания "ВебСтудия Профи" была основана в 2010 году группой энтузиастов в области веб-разработки. Начиная с маленькой команды из 3 человек, мы выросли в полноценную студию с 50+ сотрудниками.</p>
                
                <p>Основные вехи нашего развития:</p>
                <ol>
                    <li>2010 - Основание компании, первые заказы</li>
                    <li>2012 - Открытие офиса в Москве</li>
                    <li>2015 - Запуск отдела мобильной разработки</li>
                    <li>2018 - Выход на международный рынок</li>
                    <li>2020 - Открытие R&D центра</li>
                    <li>2023 - Запуск собственного SaaS-продукта</li>
                </ol>
                
                <img width='500px' src="https://avatars.mds.yandex.net/get-altay/7383884/2a0000018321278e6212f694a764469a74a6/L_height" alt="Современный офис в бизнес-центре" title="Современный офис в бизнес-центре">
            </article>
            
            <article>
                <h3>Наши ценности</h3>
                <ul>
                    <li>Клиентоориентированность</li>
                    <li>Инновационный подход</li>
                    <li>Прозрачность процессов</li>
                    <li>Профессиональное развитие</li>
                    <li>Ответственность за результат</li>
                </ul>
            </article>
        </section>

        <!-- Секция "Услуги" -->
        <section id="services">
            <h2>Наши услуги</h2>
            
            <article>
                <h3>Веб-разработка</h3>
                <p>Полный цикл создания веб-приложений любой сложности:</p>
                <ul>
                    <li>Корпоративные сайты</li>
                    <li>Интернет-магазины</li>
                    <li>CRM-системы</li>
                    <li>Порталs и SaaS решения</li>
                </ul>
            </article>
            
            <article>
                <h3>Мобильная разработка</h3>
                <p>Создание мобильных приложений для iOS и Android</p>
            </article>
            
            <article>
                <h3>Дизайн и UX</h3>
                <p>Разработка пользовательских интерфейсов и опыта взаимодействия</p>
            </article>
            
            <!-- Таблица с примерами проектов -->
            <table>
                <caption>Примеры выполненных проектов</caption>
                <thead>
                    <tr>
                        <th>Год</th>
                        <th>Проект</th>
                        <th>Технологии</th>
                        <th>Сроки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2020</td>
                        <td>Интернет-магазин "ТехноМир"</td>
                        <td>React, Node.js, MongoDB</td>
                        <td>4 месяца</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>Мобильное приложение "ФитнесТрекер"</td>
                        <td>Flutter, Firebase</td>
                        <td>3 месяца</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>Корпоративный портал "ГлобалТелеком"</td>
                        <td>Angular, .NET, SQL Server</td>
                        <td>6 месяцев</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td>SaaS платформа для образования</td>
                        <td>Vue.js, Django, PostgreSQL</td>
                        <td>9 месяцев</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Всего проектов</td>
                        <td>150+</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <!-- Секция "Портфолио" -->
        <section id="portfolio">
            <h2>Наше портфолио</h2>
            
            <article>
                <h3>Кейсы</h3>
                <div>
                    <img width='500px' src="https://прогосзаказ.рф/uploads/2023/03/poster_event_1295190.jpg" alt="Интернет-магазин ТехноМир" title="Главная страница интернет-магазина">
                    <p><a href="#project1">Подробнее о проекте "ТехноМир"</a></p>
                </div>
                
                <div>
                    <img width='500px' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa01a893996269.5e7347746105b.jpg" alt="Фитнес приложение" title="Экран статистики в приложении">
                    <p><a href="#project2">Подробнее о фитнес-трекере</a></p>
                </div>
            </article>
            
            <aside>
                <h4>Отзывы клиентов</h4>
                <blockquote>
                    "Работа с ВебСтудией Профи позволила нам вывести бизнес на новый уровень. Рекомендуем!"
                    <cite>— Директор ООО "ТехноМир"</cite>
                </blockquote>
            </aside>
        </section>

        <!-- Секция "Команда" -->
        <section id="team">
            <h2>Наша команда</h2>
            
            <article>
                <h3>Ключевые сотрудники</h3>
                <ul>
                    <li>Иван Петров - CEO</li>
                    <li>Анна Сидорова - CTO</li>
                    <li>Сергей Иванов - Lead Developer</li>
                    <li>Мария Кузнецова - UX/UI Designer</li>
                    <li>Алексей Смирнов - Project Manager</li>
                </ul>
                
                <img width='500px' src="https://www.passion.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2017/05/12/10/676059/8574faea314b826852c968b642d8dfb15416a5f3.jpg" alt="Наша команда на корпоративе" title="Команда ВебСтудии Профи">
            </article>
            
            <article>
                <h3>Статистика</h3>
                <ul>
                    <li>50+ сотрудников</li>
                    <li>10+ лет опыта</li>
                    <li>150+ успешных проектов</li>
                    <li>30+ постоянных клиентов</li>
                </ul>
            </article>
        </section>

        <!-- Секция "Контакты" -->
        <section id="contacts">
            <h2>Свяжитесь с нами</h2>
            
            <article>
                <h3>Контактная информация</h3>
                <address>
                    Москва, ул. Примерная, д. 123<br>
                    Телефон: +7 (495) 123-45-67<br>
                    Email: info@webprofi.ru<br>
                    Часы работы: Пн-Пт 9:00-18:00
                </address>
            </article>
            
            <!-- Форма обратной связи -->
            <article>
                <h3>Форма обратной связи</h3>
                <form action="/submit" method="post">
                    <p>
                        <label for="name">Ваше имя:</label>
                        <input type="text" id="name" name="name" required>
                    </p>
                    
                    <p>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </p>
                    
                    <p>
                        <label for="subject">Тема обращения:</label>
                        <select id="subject" name="subject">
                            <option value="general">Общий вопрос</option>
                            <option value="project">Запрос по проекту</option>
                            <option value="cooperation">Сотрудничество</option>
                            <option value="job">Трудоустройство</option>
                        </select>
                    </p>
                    
                    <p>
                        <label for="message">Сообщение:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </p>
                    
                    <fieldset>
                        <legend>Предпочтительный способ связи:</legend>
                        <input type="radio" id="contact-phone" name="contact" value="phone">
                        <label for="contact-phone">Телефон</label>
                        
                        <input type="radio" id="contact-email" name="contact" value="email" checked>
                        <label for="contact-email">Email</label>
                        
                        <input type="radio" id="contact-any" name="contact" value="any">
                        <label for="contact-any">Любой</label>
                    </fieldset>
                    
                    <p>
                        <input type="checkbox" id="subscribe" name="subscribe" checked>
                        <label for="subscribe">Подписаться на рассылку</label>
                    </p>
                    
                    <p>
                        <button type="submit">Отправить сообщение</button>
                    </p>
                </form>
            </article>
        </section>
    </main>

    <!-- Подвал сайта -->
    <footer>
        <p>&copy; 2023 ВебСтудия Профи. Все права защищены.</p>
        
        <nav>
            <ul>
                <li><a href="/privacy">Политика конфиденциальности</a></li>
                <li><a href="/terms">Условия использования</a></li>
                <li><a href="/sitemap">Карта сайта</a></li>
            </ul>
        </nav>
        
        <address>
            Контакты для СМИ: <a href="mailto:press@webprofi.ru">press@webprofi.ru</a>
        </address>
    </footer>
</body>
</html>
`;
