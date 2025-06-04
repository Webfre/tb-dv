import React from "react";
import styles from "./TrainingPage.module.scss";
import TrainingAccordionSection from "./TrainingAccordionSection";
import { Link } from "react-router-dom";
import AboutModule from "../Home/Section/AboutModule";

const TrainingPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div style={{ marginTop: "20px" }}>
        <AboutModule title="Программы обучения" />
      </div>

      <section className={styles.section}>
        <h1 className={styles.title}>Обучение</h1>
        <p className={styles.text}>
          Вы можете выбрать курс по интересующему направлению и ознакомиться с
          его содержанием, требованиями и рекомендациями. Каждый курс включает
          подробное описание программы, список тем, а также примеры заданий,
          которые помогут вам освоить нужные навыки.
        </p>
      </section>

      <TrainingAccordionSection
        title="Для начинающих и продолжающих обучение"
        content={
          <p className={styles.text}>
            Все наши курсы рассчитаны как на тех, кто только начинает свой путь
            в Frontend-разработке и верстке сайтов, так и на тех, кто хочет
            изучить новые технологии веб-разработки и повысить свой уровень
            знаний.
          </p>
        }
      />

      <TrainingAccordionSection
        title="Бесплатно"
        content={
          <>
            <p className={styles.text}>
              Мы предоставляем широкий спектр бесплатных материалов и
              инструментов, чтобы каждый мог начать обучение без финансовых
              барьеров. Вы получаете доступ к:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Базовым обучающим материалам</strong> — статьи,
                видеолекции и интерактивные заметки по ключевым темам
                frontend-разработки.
              </li>
              <li>
                <strong>Задачнику</strong> — практические задания с возможностью
                посмотреть решения.
              </li>
              <li>
                <strong>Тестированию</strong> — тематические тесты по каждому
                модулю для самопроверки и закрепления знаний.
              </li>
              <li>
                <strong>Проектным работам</strong> — доступ к реальным учебным
                проектам, которые можно добавить в портфолио.
              </li>
              <li>
                <strong>Играм для закрепления информации</strong> —
                интерактивные задания и мини-игры, которые помогают изучать код
                весело и эффективно.
              </li>
              <li>
                <strong>
                  Анализу слабых мест и виртуальному собеседованию
                </strong>{" "}
                — система анализирует ваши действия и помогает определить темы
                для повторения и ваш текущий грейд (способ классификации
                должностей на основе их важности для компании, уровня
                ответственности и самостоятельности, необходимых знаний, умений
                и опыта для этой должности.).
              </li>
            </ul>
            <p className={styles.text}>
              Всё это — бесплатно. Достаточно просто{" "}
              <Link to="/register" className={styles.link}>
                зарегистрироваться
              </Link>
              , чтобы начать обучение и развиваться в комфортном для вас темпе.
            </p>
          </>
        }
      />

      <TrainingAccordionSection
        title="Практика"
        content={
          <>
            <p className={styles.text}>
              Обучение на платформе основано на практическом подходе. Вас ждут
              реальные кейсы, проекты и задачи, максимально приближённые к
              рабочим ситуациям. Мы развиваем не только технические навыки, но и
              умение проектировать архитектуру приложений, применять лучшие
              практики и писать чистый код.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>
                  Разработка приложений на React, TypeScript, RTK Query
                </strong>{" "}
                — от проектирования до публикации.
              </li>
              <li>
                <strong>Vue 3, TypeScript, MobX, Jest</strong> — практика
                создания компонент, тестирования и менеджмента состояния.
              </li>
              <li>
                <strong>Angular</strong> — построение модульных приложений с
                использованием RxJS, сервисов и Angular CLI.
              </li>
              <li>
                <strong>Создание SPA и PWA</strong> — с оффлайн-режимом,
                кешированием и роутингом.
              </li>
              <li>
                <strong>Админ-панели и панели управления</strong> — с
                авторизацией, фильтрацией и CRUD-операциями.
              </li>
              <li>
                <strong>Работа с REST и WebSocket API</strong> — проекты, где вы
                взаимодействуете с backend в реальном времени.
              </li>
              <li>
                <strong>Система управления задачами</strong> — с Drag & Drop,
                уведомлениями и интеграцией в командную работу.
              </li>
              <li>
                <strong>Фреймворки нового поколения</strong> — практика с
                использованием Next.js, Nuxt, Vite, Astro и других современных
                инструментов для SSR и SSG.
              </li>
              <li>
                <strong>Интеграция новых технологий</strong> — изучение и
                применение AI-инструментов, WebAssembly, микрофронтендов и
                edge-функций.
              </li>
              <li>
                <strong>Работа с популярными библиотеками</strong> — интеграция
                и настройка таких библиотек как React Hook Form, Yup, React
                Query, Axios, Formik, Zod, i18next, Leaflet, Chart.js и другие,
                применяемые в реальных проектах.
              </li>
              <li>
                <strong>Сборка и оптимизация проектов</strong> — настройка
                Webpack/Vite, code splitting, lazy loading, tree shaking,
                уменьшение бандла, настройка окружений и деплой.
              </li>
              <li>
                <strong>Финальные проекты</strong> — комплексные приложения с
                архитектурой, рефакторингом и код-ревью.
              </li>
            </ul>
            <p className={styles.text}>
              Все проекты сопровождаются методическими рекомендациями и обратной
              связью от менторов.
            </p>
          </>
        }
      />

      <TrainingAccordionSection
        title="Профессии"
        content={
          <>
            <p className={styles.text}>
              Выберите направление, которое соответствует вашим целям и
              интересам. Мы предлагаем разнообразные профессии, охватывающие как
              основы вёрстки, так и продвинутую frontend-разработку с
              применением современных фреймворков и инструментов.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Веб-вёрстка (HTML, CSS)</strong> — изучение семантики,
                адаптивной вёрстки, Flexbox, Grid, анимаций и оптимизации
                интерфейсов.
              </li>
              <li>
                <strong>Frontend-разработчик (React.js)</strong> — компоненты,
                хуки, маршрутизация, работа с API, формами и управление
                состоянием.
              </li>
              <li>
                <strong>Frontend-разработчик Pro (React.js)</strong> —
                архитектура, паттерны, тестирование, оптимизация
                производительности, SSR и лучшие практики.
              </li>
              <li>
                <strong>Frontend-разработчик (Vue.js)</strong> — Vue 3,
                Composition API, Vue Router, Pinia, работа с формами и сервером.
              </li>
              <li>
                <strong>JavaScript-разработчик (JavaScript)</strong> — глубокое
                понимание языка, работа с DOM, структурами данных, алгоритмами и
                асинхронностью.
              </li>
              <li>
                <strong>Frontend-разработчик (Angular)</strong> — модульная
                архитектура, RxJS, CLI, сервисы, формы, маршруты и DI.
              </li>
              <li>
                <strong>Frontend-разработчик (Solid.js)</strong> — декларативный
                UI, fine-grained реактивность, JSX и взаимодействие с DOM.
              </li>
              <li>
                <strong>CSS-инженер (CSS, SCSS, BEM)</strong> — проектирование
                масштабируемых интерфейсов, использование переменных, миксинов,
                функций и методологий.
              </li>
              <li>
                <strong>Мобильный разработчик (React Native)</strong> — создание
                кроссплатформенных мобильных приложений с использованием React и
                нативных компонентов.
              </li>
              <li>
                <strong>
                  Тестирование Frontend (Cypress, Playwright, Jest)
                </strong>{" "}
                — написание автотестов, e2e-тестирование, покрытие кода и
                CI-интеграция.
              </li>
            </ul>
            <p className={styles.text}>
              Все профессии включают теорию, практику, проекты и подготовку к
              реальной работе. Вы получите навыки, востребованные на рынке, и
              поддержку менторов.
            </p>
          </>
        }
      />

      <TrainingAccordionSection
        title="Технологии"
        content={
          <>
            <p className={styles.text}>
              Мы обучаем работе с современными технологиями, которые активно
              применяются в профессиональной frontend-разработке. Эти
              инструменты позволяют создавать быстрые, надёжные и масштабируемые
              веб-приложения.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>JavaScript, TypeScript</strong> — синтаксис, типизация,
                OOP, функциональное программирование, работа с асинхронностью.
              </li>
              <li>
                <strong>React.js, Vue.js, Angular, Solid.js, Svelte</strong> —
                фреймворки и библиотеки для построения компонентных SPA и
                MPA-приложений.
              </li>
              <li>
                <strong>Next.js, Nuxt.js</strong> — SSR, SSG, маршрутизация,
                работа с API, генерация страниц и оптимизация
                производительности.
              </li>
              <li>
                <strong>HTML, CSS, SCSS</strong> — семантическая разметка,
                стилизация, анимации, адаптивность, переменные, вложенность и
                методологии (BEM).
              </li>
              <li>
                <strong>
                  Tailwind CSS, Styled Components, Bootstrap, Bulma, Material UI
                </strong>{" "}
                — стилизация интерфейсов с готовыми решениями и утилитарными
                подходами.
              </li>
              <li>
                <strong>Redux, MobX, Zustand, Pinia</strong> — управление
                состоянием, хранилища, подписки и структуры данных.
              </li>
              <li>
                <strong>React Router</strong> — маршрутизация, вложенные
                маршруты, защита маршрутов, динамические параметры.
              </li>
              <li>
                <strong>
                  Jest, Vitest, React Testing Library, Cypress, Playwright
                </strong>{" "}
                — юнит-тесты, e2e-тесты, тестирование компонентов и
                пользовательских сценариев.
              </li>
              <li>
                <strong>Storybook</strong> — разработка UI-компонентов в
                изоляции и создание документации.
              </li>
              <li>
                <strong>Canvas API, WebGL</strong> — отрисовка графики и
                3D-объектов в браузере.
              </li>
              <li>
                <strong>Framer Motion</strong> — анимации и микровзаимодействия
                в React.
              </li>
              <li>
                <strong>Lighthouse, WebPageTest</strong> — анализ
                производительности, доступности и SEO.
              </li>
              <li>
                <strong>Code Splitting, PWA, Web Workers</strong> — оптимизация
                загрузки, оффлайн-режим, многопоточность в браузере.
              </li>
              <li>
                <strong>GraphQL (Apollo, Relay), REST API, WebSockets</strong> —
                взаимодействие клиента с сервером, подписки, запросы и мутации.
              </li>
              <li>
                <strong>Fetch API, Axios</strong> — работа с HTTP-запросами,
                обработка ответов, ошибки.
              </li>
              <li>
                <strong>Webpack, Vite</strong> — сборка, настройка окружений,
                плагины, hot reload.
              </li>
              <li>
                <strong>ESLint, Prettier</strong> — соблюдение стандартов кода,
                автоформатирование и интеграция с CI.
              </li>
              <li>
                <strong>Git</strong> — контроль версий, ветвление, слияния,
                работа в команде.
              </li>
              <li>
                <strong>Docker</strong> — контейнеризация приложений, настройка
                окружения, сборка образов и деплой.
              </li>
            </ul>
            <p className={styles.text}>
              Все технологии рассматриваются на практике с актуальными примерами
              и рекомендациями от разработчиков уровня middle/senior.
            </p>
          </>
        }
      />
    </div>
  );
};

export default TrainingPage;
