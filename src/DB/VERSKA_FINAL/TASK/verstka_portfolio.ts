export const verstka_portfolio_1 = {
  id: "verstka_portfolio_1",
  module: "CSS",
  title: "Главная страница портфолио",
  topic: "Главная страница портфолио",
  topicId: "verstka_final",
  sectionId: "verstka_final2",
  description:
    "Создайте кнопку с плавным изменением цвета и размера при наведении с использованием CSS-свойства `transition`.",
  steps: [
    "Сверстайте одностраничный лендинг-портфолио с секциями: Hero, Обо мне, Проекты, Навыки, Контакты, Футер.",
    "Реализуйте фиксированное верхнее навигационное меню с плавной анимацией и переходами по якорям.",
    "В Hero-секции разместите приветствие, имя, должность, описание и две стилизованные кнопки с анимацией.",
    "В секции 'Обо мне' добавьте текстовый блок и сетку с иконками ключевых технологий.",
    "В секции проектов создайте сетку карточек с описанием, стеком технологий и ссылками на демо/GitHub.",
    "Сделайте секцию навыков с анимированными прогресс-барами для технологий.",
    "В блоке контактов разместите e-mail и иконки-ссылки на соцсети, стилизованные под кнопки.",
    "Добавьте современный футер с подписью и годом.",
    "Реализуйте адаптивность для мобильных устройств и эффекты: градиенты, тени, плавные переходы, кастомная прокрутка.",
  ],
  difficulty: 5,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Алексей Иванов - Frontend Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <ul class="nav-list">
            <li><a href="#home" class="nav-link">Главная</a></li>
            <li><a href="#about" class="nav-link">Обо мне</a></li>
            <li><a href="#projects" class="nav-link">Проекты</a></li>
            <li><a href="#skills" class="nav-link">Навыки</a></li>
            <li><a href="#contact" class="nav-link">Контакты</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="floating-element">
            <span class="code-symbol">&lt;/&gt;</span>
        </div>
        <div class="floating-element">
            <span class="code-symbol">{}</span>
        </div>
        <div class="floating-element">
            <span class="code-symbol">[]</span>
        </div>
        
        <div class="hero-content">
            <div class="hero-greeting">Привет, меня зовут</div>
            <h1 class="hero-title">Алексей Иванов</h1>
            <h2 class="hero-subtitle">Frontend Developer</h2>
            <p class="hero-description">
                Создаю современные веб-приложения с фокусом на пользовательский опыт. 
                Специализируюсь на React, TypeScript и современных CSS технологиях.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">Посмотреть работы</a>
                <a href="#contact" class="btn btn-secondary">Связаться со мной</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">Обо мне</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Страсть к коду и инновациям</h3>
                    <p>
                        Я frontend-разработчик с 3+ годами опыта в создании современных веб-приложений. 
                        Моя цель — создавать интуитивные и производительные пользовательские интерфейсы, 
                        которые решают реальные проблемы.
                    </p>
                    <p>
                        Постоянно изучаю новые технологии и подходы к разработке. Верю в силу чистого кода, 
                        хорошей архитектуры и внимания к деталям.
                    </p>
                    <p>
                        Когда не программирую, изучаю дизайн, читаю техническую литературу или работаю 
                        над open-source проектами.
                    </p>
                </div>
                <div class="skills-grid">
                    <div class="skill-item">
                        <span class="skill-icon">⚛️</span>
                        <div class="skill-name">React</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">📘</span>
                        <div class="skill-name">TypeScript</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🎨</span>
                        <div class="skill-name">CSS3</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">⚡</span>
                        <div class="skill-name">Vite</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🔧</span>
                        <div class="skill-name">Webpack</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🐙</span>
                        <div class="skill-name">Git</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🎯</span>
                        <div class="skill-name">Jest</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🚀</span>
                        <div class="skill-name">Next.js</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
        <div class="container">
            <h2 class="section-title">Мои проекты</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">E-commerce Dashboard</h3>
                        <p class="project-description">
                            Современная панель администратора для интернет-магазина с аналитикой, 
                            управлением товарами и заказами. Реализована с использованием React и TypeScript.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Task Management App</h3>
                        <p class="project-description">
                            Приложение для управления задачами с drag-and-drop функциональностью, 
                            темной темой и синхронизацией данных в реальном времени.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Redux Toolkit</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Weather App</h3>
                        <p class="project-description">
                            Красивое приложение погоды с анимациями, геолокацией и детальными прогнозами. 
                            Адаптивный дизайн для всех устройств.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Composition API</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">OpenWeather API</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Portfolio Website</h3>
                        <p class="project-description">
                            Персональный сайт-портфолио с современным дизайном, анимациями и 
                            оптимизацией производительности. Создан с фокусом на UX/UI.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">Styled Components</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Progress Section -->
    <section id="skills" class="section skills-progress">
        <div class="container">
            <h2 class="section-title">Технические навыки</h2>
            <div class="progress-grid">
                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">JavaScript / TypeScript</span>
                        <span class="progress-percentage">95%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 95%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">React / Next.js</span>
                        <span class="progress-percentage">90%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">CSS / SCSS / Tailwind</span>
                        <span class="progress-percentage">92%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 92%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">Node.js / Express</span>
                        <span class="progress-percentage">75%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">Git / GitHub</span>
                        <span class="progress-percentage">88%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 88%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">UI/UX Design</span>
                        <span class="progress-percentage">80%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 80%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <h2 class="section-title">Давайте работать вместе</h2>
            <div class="contact-content">
                <p class="contact-text">
                    Готов к новым вызовам и интересным проектам. Если у вас есть идея, 
                    которую хотите воплотить в жизнь, или вакансия, которая может меня заинтересовать — 
                    давайте обсудим!
                </p>
                <div class="contact-links">
                    <a href="mailto:alexey@example.com" class="contact-link">
                        <span class="contact-icon">📧</span>
                        alexey@example.com
                    </a>
                    <a href="https://github.com" class="contact-link">
                        <span class="contact-icon">🐙</span>
                        GitHub
                    </a>
                    <a href="https://linkedin.com" class="contact-link">
                        <span class="contact-icon">💼</span>
                        LinkedIn
                    </a>
                    <a href="https://telegram.me" class="contact-link">
                        <span class="contact-icon">✈️</span>
                        Telegram
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Алексей Иванов. Создано с ❤️ и большим количеством кофе.</p>
        </div>
    </footer>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Алексей Иванов - Frontend Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #00d4ff;
            --secondary-color: #ff6b6b;
            --accent-color: #4ecdc4;
            --purple: #a855f7;
            --orange: #f97316;
            --green: #10b981;
            
            --bg-primary: #0a0a0a;
            --bg-secondary: #111111;
            --bg-card: #1a1a1a;
            --bg-glass: rgba(255, 255, 255, 0.05);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --shadow-glow: 0 0 20px rgba(0, 212, 255, 0.3);
            --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--purple));
            --gradient-secondary: linear-gradient(135deg, var(--secondary-color), var(--orange));
            --gradient-accent: linear-gradient(135deg, var(--accent-color), var(--green));
            --gradient-bg: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Animated Background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-bg);
            z-index: -2;
        }

        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 107, 107, 0.05) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundShift 20s ease-in-out infinite;
        }

        @keyframes backgroundShift {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-20px) translateY(-10px); }
            50% { transform: translateX(20px) translateY(10px); }
            75% { transform: translateX(-10px) translateY(20px); }
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 1rem 2rem;
            z-index: 1000;
            animation: slideDown 1s ease-out;
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-link:hover {
            color: var(--primary-color);
            text-shadow: 0 0 10px var(--primary-color);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient-primary);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            padding: 0 2rem;
        }

        .hero-content {
            max-width: 800px;
            animation: fadeInUp 1s ease-out 0.5s both;
        }

        .hero-greeting {
            font-size: 1.2rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'JetBrains Mono', monospace;
            animation: typewriter 2s steps(20) 1s both;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid var(--primary-color);
        }

        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }

        .hero-title {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 800;
            margin-bottom: 1rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)); }
            to { filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.5)); }
        }

        .hero-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-muted);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-glow);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--bg-glass);
            border-color: var(--primary-color);
            transform: translateY(-3px);
        }

        /* Floating Elements */
        .floating-element {
            position: absolute;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        .code-symbol {
            font-family: 'JetBrains Mono', monospace;
            font-size: 2rem;
            color: var(--primary-color);
            opacity: 0.3;
        }

        /* Section Styles */
        .section {
            padding: 5rem 0;
            position: relative;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
        }

        .about-text h3 {
            color: var(--text-primary);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .about-text p {
            margin-bottom: 1.5rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
        }

        .skill-item {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .skill-item:hover::before {
            left: 100%;
        }

        .skill-item:hover {
            transform: translateY(-5px);
            border-color: var(--primary-color);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .skill-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }

        .skill-name {
            font-weight: 600;
            color: var(--text-primary);
        }

        /* Projects Section */
        .projects {
            background: var(--bg-secondary);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
            group: hover;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-card);
            border-color: var(--primary-color);
        }

        .project-image {
            height: 200px;
            background: var(--gradient-secondary);
            position: relative;
            overflow: hidden;
        }

        .project-image::after {
            content: '💻';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            opacity: 0.7;
        }

        .project-content {
            padding: 2rem;
        }

        .project-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .project-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .tech-tag {
            background: var(--bg-glass);
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            border: 1px solid var(--border-color);
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .project-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .project-link:hover {
            text-shadow: 0 0 10px var(--primary-color);
        }

        /* Skills Progress Section */
        .skills-progress {
            padding: 5rem 0;
        }

        .progress-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .progress-item {
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 15px;
            border: 1px solid var(--border-color);
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .progress-name {
            font-weight: 600;
            color: var(--text-primary);
        }

        .progress-percentage {
            color: var(--primary-color);
            font-family: 'JetBrains Mono', monospace;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: var(--bg-secondary);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: var(--gradient-primary);
            border-radius: 10px;
            position: relative;
            animation: progressLoad 2s ease-out;
        }

        @keyframes progressLoad {
            from { width: 0; }
        }

        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: progressShine 2s ease-in-out infinite;
        }

        @keyframes progressShine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        /* Contact Section */
        .contact {
            background: var(--bg-secondary);
            text-align: center;
        }

        .contact-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-text {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.7;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .contact-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 1rem 1.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 50px;
        }

        .contact-link:hover {
            color: var(--primary-color);
            border-color: var(--primary-color);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
            transform: translateY(-3px);
        }

        .contact-icon {
            font-size: 1.2rem;
        }

        /* Footer */
        .footer {
            padding: 2rem 0;
            text-align: center;
            border-top: 1px solid var(--border-color);
            color: var(--text-muted);
        }

        /* Animations */
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav {
                top: 1rem;
                padding: 0.8rem 1.5rem;
            }

            .nav-list {
                gap: 1rem;
            }

            .hero {
                padding: 0 1rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 1rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .progress-grid {
                grid-template-columns: 1fr;
            }

            .contact-links {
                flex-direction: column;
                align-items: center;
            }

            .floating-element {
                display: none;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--gradient-primary);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-color);
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <ul class="nav-list">
            <li><a href="#home" class="nav-link">Главная</a></li>
            <li><a href="#about" class="nav-link">Обо мне</a></li>
            <li><a href="#projects" class="nav-link">Проекты</a></li>
            <li><a href="#skills" class="nav-link">Навыки</a></li>
            <li><a href="#contact" class="nav-link">Контакты</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="floating-element">
            <span class="code-symbol">&lt;/&gt;</span>
        </div>
        <div class="floating-element">
            <span class="code-symbol">{}</span>
        </div>
        <div class="floating-element">
            <span class="code-symbol">[]</span>
        </div>
        
        <div class="hero-content">
            <div class="hero-greeting">Привет, меня зовут</div>
            <h1 class="hero-title">Алексей Иванов</h1>
            <h2 class="hero-subtitle">Frontend Developer</h2>
            <p class="hero-description">
                Создаю современные веб-приложения с фокусом на пользовательский опыт. 
                Специализируюсь на React, TypeScript и современных CSS технологиях.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">Посмотреть работы</a>
                <a href="#contact" class="btn btn-secondary">Связаться со мной</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">Обо мне</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Страсть к коду и инновациям</h3>
                    <p>
                        Я frontend-разработчик с 3+ годами опыта в создании современных веб-приложений. 
                        Моя цель — создавать интуитивные и производительные пользовательские интерфейсы, 
                        которые решают реальные проблемы.
                    </p>
                    <p>
                        Постоянно изучаю новые технологии и подходы к разработке. Верю в силу чистого кода, 
                        хорошей архитектуры и внимания к деталям.
                    </p>
                    <p>
                        Когда не программирую, изучаю дизайн, читаю техническую литературу или работаю 
                        над open-source проектами.
                    </p>
                </div>
                <div class="skills-grid">
                    <div class="skill-item">
                        <span class="skill-icon">⚛️</span>
                        <div class="skill-name">React</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">📘</span>
                        <div class="skill-name">TypeScript</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🎨</span>
                        <div class="skill-name">CSS3</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">⚡</span>
                        <div class="skill-name">Vite</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🔧</span>
                        <div class="skill-name">Webpack</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🐙</span>
                        <div class="skill-name">Git</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🎯</span>
                        <div class="skill-name">Jest</div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-icon">🚀</span>
                        <div class="skill-name">Next.js</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
        <div class="container">
            <h2 class="section-title">Мои проекты</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">E-commerce Dashboard</h3>
                        <p class="project-description">
                            Современная панель администратора для интернет-магазина с аналитикой, 
                            управлением товарами и заказами. Реализована с использованием React и TypeScript.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Task Management App</h3>
                        <p class="project-description">
                            Приложение для управления задачами с drag-and-drop функциональностью, 
                            темной темой и синхронизацией данных в реальном времени.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Redux Toolkit</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Weather App</h3>
                        <p class="project-description">
                            Красивое приложение погоды с анимациями, геолокацией и детальными прогнозами. 
                            Адаптивный дизайн для всех устройств.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Composition API</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">OpenWeather API</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">Portfolio Website</h3>
                        <p class="project-description">
                            Персональный сайт-портфолио с современным дизайном, анимациями и 
                            оптимизацией производительности. Создан с фокусом на UX/UI.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">Styled Components</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Progress Section -->
    <section id="skills" class="section skills-progress">
        <div class="container">
            <h2 class="section-title">Технические навыки</h2>
            <div class="progress-grid">
                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">JavaScript / TypeScript</span>
                        <span class="progress-percentage">95%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 95%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">React / Next.js</span>
                        <span class="progress-percentage">90%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">CSS / SCSS / Tailwind</span>
                        <span class="progress-percentage">92%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 92%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">Node.js / Express</span>
                        <span class="progress-percentage">75%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">Git / GitHub</span>
                        <span class="progress-percentage">88%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 88%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-header">
                        <span class="progress-name">UI/UX Design</span>
                        <span class="progress-percentage">80%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 80%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <h2 class="section-title">Давайте работать вместе</h2>
            <div class="contact-content">
                <p class="contact-text">
                    Готов к новым вызовам и интересным проектам. Если у вас есть идея, 
                    которую хотите воплотить в жизнь, или вакансия, которая может меня заинтересовать — 
                    давайте обсудим!
                </p>
                <div class="contact-links">
                    <a href="mailto:alexey@example.com" class="contact-link">
                        <span class="contact-icon">📧</span>
                        alexey@example.com
                    </a>
                    <a href="https://github.com" class="contact-link">
                        <span class="contact-icon">🐙</span>
                        GitHub
                    </a>
                    <a href="https://linkedin.com" class="contact-link">
                        <span class="contact-icon">💼</span>
                        LinkedIn
                    </a>
                    <a href="https://telegram.me" class="contact-link">
                        <span class="contact-icon">✈️</span>
                        Telegram
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Алексей Иванов. Создано с ❤️ и большим количеством кофе.</p>
        </div>
    </footer>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
        :root {
            --primary-color: #00d4ff;
            --secondary-color: #ff6b6b;
            --accent-color: #4ecdc4;
            --purple: #a855f7;
            --orange: #f97316;
            --green: #10b981;
            
            --bg-primary: #0a0a0a;
            --bg-secondary: #111111;
            --bg-card: #1a1a1a;
            --bg-glass: rgba(255, 255, 255, 0.05);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --shadow-glow: 0 0 20px rgba(0, 212, 255, 0.3);
            --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--purple));
            --gradient-secondary: linear-gradient(135deg, var(--secondary-color), var(--orange));
            --gradient-accent: linear-gradient(135deg, var(--accent-color), var(--green));
            --gradient-bg: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Animated Background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-bg);
            z-index: -2;
        }

        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 107, 107, 0.05) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundShift 20s ease-in-out infinite;
        }

        @keyframes backgroundShift {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-20px) translateY(-10px); }
            50% { transform: translateX(20px) translateY(10px); }
            75% { transform: translateX(-10px) translateY(20px); }
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 1rem 2rem;
            z-index: 1000;
            animation: slideDown 1s ease-out;
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-link:hover {
            color: var(--primary-color);
            text-shadow: 0 0 10px var(--primary-color);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient-primary);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            padding: 0 2rem;
        }

        .hero-content {
            max-width: 800px;
            animation: fadeInUp 1s ease-out 0.5s both;
        }

        .hero-greeting {
            font-size: 1.2rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'JetBrains Mono', monospace;
            animation: typewriter 2s steps(20) 1s both;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid var(--primary-color);
        }

        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }

        .hero-title {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 800;
            margin-bottom: 1rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)); }
            to { filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.5)); }
        }

        .hero-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-muted);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-glow);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--bg-glass);
            border-color: var(--primary-color);
            transform: translateY(-3px);
        }

        /* Floating Elements */
        .floating-element {
            position: absolute;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        .code-symbol {
            font-family: 'JetBrains Mono', monospace;
            font-size: 2rem;
            color: var(--primary-color);
            opacity: 0.3;
        }

        /* Section Styles */
        .section {
            padding: 5rem 0;
            position: relative;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
        }

        .about-text h3 {
            color: var(--text-primary);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .about-text p {
            margin-bottom: 1.5rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
        }

        .skill-item {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .skill-item:hover::before {
            left: 100%;
        }

        .skill-item:hover {
            transform: translateY(-5px);
            border-color: var(--primary-color);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .skill-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }

        .skill-name {
            font-weight: 600;
            color: var(--text-primary);
        }

        /* Projects Section */
        .projects {
            background: var(--bg-secondary);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
            group: hover;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-card);
            border-color: var(--primary-color);
        }

        .project-image {
            height: 200px;
            background: var(--gradient-secondary);
            position: relative;
            overflow: hidden;
        }

        .project-image::after {
            content: '💻';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            opacity: 0.7;
        }

        .project-content {
            padding: 2rem;
        }

        .project-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .project-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .tech-tag {
            background: var(--bg-glass);
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            border: 1px solid var(--border-color);
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .project-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .project-link:hover {
            text-shadow: 0 0 10px var(--primary-color);
        }

        /* Skills Progress Section */
        .skills-progress {
            padding: 5rem 0;
        }

        .progress-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .progress-item {
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 15px;
            border: 1px solid var(--border-color);
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .progress-name {
            font-weight: 600;
            color: var(--text-primary);
        }

        .progress-percentage {
            color: var(--primary-color);
            font-family: 'JetBrains Mono', monospace;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: var(--bg-secondary);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: var(--gradient-primary);
            border-radius: 10px;
            position: relative;
            animation: progressLoad 2s ease-out;
        }

        @keyframes progressLoad {
            from { width: 0; }
        }

        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: progressShine 2s ease-in-out infinite;
        }

        @keyframes progressShine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        /* Contact Section */
        .contact {
            background: var(--bg-secondary);
            text-align: center;
        }

        .contact-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-text {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.7;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .contact-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 1rem 1.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 50px;
        }

        .contact-link:hover {
            color: var(--primary-color);
            border-color: var(--primary-color);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
            transform: translateY(-3px);
        }

        .contact-icon {
            font-size: 1.2rem;
        }

        /* Footer */
        .footer {
            padding: 2rem 0;
            text-align: center;
            border-top: 1px solid var(--border-color);
            color: var(--text-muted);
        }

        /* Animations */
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav {
                top: 1rem;
                padding: 0.8rem 1.5rem;
            }

            .nav-list {
                gap: 1rem;
            }

            .hero {
                padding: 0 1rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 1rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .progress-grid {
                grid-template-columns: 1fr;
            }

            .contact-links {
                flex-direction: column;
                align-items: center;
            }

            .floating-element {
                display: none;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--gradient-primary);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-color);
        }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
export const verstka_portfolio_2 = {
  id: "verstka_portfolio_2",
  module: "CSS",
  title: "E-commerce Dashboard",
  topic: "E-commerce Dashboard",
  topicId: "verstka_final",
  sectionId: "verstka_final2",
  description:
    "Создайте кнопку с плавным изменением цвета и размера при наведении с использованием CSS-свойства `transition`.",
  steps: [
    "Сверстайте современный одностраничный e-commerce dashboard с боковым меню, фиксированным хедером и основной рабочей областью.",
    "Реализуйте sidebar с навигацией и логотипом, обеспечьте визуальные эффекты наведения для пунктов меню.",
    "Сделайте header с поиском, уведомлениями и профилем пользователя, оформите все элементы в едином стиле.",
    "Разместите главную панель с анимированными карточками статистики (доход, заказы, клиенты, товары) и градиентными эффектами.",
    "Сделайте двухколоночный контентный grid: график продаж (с периодами) и блок недавней активности.",
    "Сверстайте таблицу последних заказов с аватарами, статусами и форматированными суммами.",
    "Добавьте секцию популярных товаров в виде сетки карточек с иконками, ценой и количеством продаж.",
    "Внедрите плавные анимации появления, эффекты наведения, тени, градиенты, полупрозрачные подложки.",
    "Обеспечьте адаптивную верстку под планшеты и смартфоны (перестройка сеток, скрытие sidebar).",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-content">
                <div class="logo">
                    <h1>ShopAdmin</h1>
                </div>
                <nav>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">
                                <span class="nav-icon">📊</span>
                                <span>Дашборд</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">🛍️</span>
                                <span>Заказы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📦</span>
                                <span>Товары</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">👥</span>
                                <span>Клиенты</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📈</span>
                                <span>Аналитика</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">💰</span>
                                <span>Финансы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">⚙️</span>
                                <span>Настройки</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Header -->
        <header class="header">
            <div class="header-left">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="Поиск заказов, товаров, клиентов...">
                    <span class="search-icon">🔍</span>
                </div>
            </div>
            <div class="header-right">
                <button class="notification-btn">
                    <span>🔔</span>
                    <span class="notification-badge">3</span>
                </button>
                <div class="user-profile">
                    <div class="user-avatar">АИ</div>
                    <div class="user-info">
                        <h4>Алексей Иванов</h4>
                        <p>Администратор</p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="page-header fade-in">
                <h1 class="page-title">Дашборд</h1>
                <p class="page-subtitle">Добро пожаловать в панель управления магазином</p>
            </div>

            <!-- Stats Cards -->
            <div class="stats-grid fade-in">
                <div class="stat-card primary">
                    <div class="stat-header">
                        <div class="stat-icon primary">💰</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <div class="stat-value">₽2,847,392</div>
                    <div class="stat-label">Общий доход</div>
                </div>

                <div class="stat-card success">
                    <div class="stat-header">
                        <div class="stat-icon success">🛍️</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+8.2%</span>
                        </div>
                    </div>
                    <div class="stat-value">1,247</div>
                    <div class="stat-label">Заказы</div>
                </div>

                <div class="stat-card warning">
                    <div class="stat-header">
                        <div class="stat-icon warning">👥</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+15.3%</span>
                        </div>
                    </div>
                    <div class="stat-value">8,429</div>
                    <div class="stat-label">Клиенты</div>
                </div>

                <div class="stat-card danger">
                    <div class="stat-header">
                        <div class="stat-icon danger">📦</div>
                        <div class="stat-trend down">
                            <span>↘</span>
                            <span>-2.1%</span>
                        </div>
                    </div>
                    <div class="stat-value">342</div>
                    <div class="stat-label">Товары</div>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="content-grid fade-in">
                <!-- Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">Продажи</h3>
                        <div class="chart-period">
                            <button class="period-btn">7д</button>
                            <button class="period-btn active">30д</button>
                            <button class="period-btn">90д</button>
                        </div>
                    </div>
                    <div class="chart-area">
                        <div class="chart-bars">
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                        </div>
                    </div>
                </div>

                <!-- Activity -->
                <div class="activity-card">
                    <div class="activity-header">
                        <h3 class="chart-title">Последняя активность</h3>
                    </div>
                    <ul class="activity-list">
                        <li class="activity-item">
                            <div class="activity-icon order">🛍️</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый заказ #1247</div>
                                <div class="activity-time">2 минуты назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👤</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый клиент зарегистрирован</div>
                                <div class="activity-time">15 минут назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon product">📦</div>
                            <div class="activity-content">
                                <div class="activity-text">Товар добавлен в каталог</div>
                                <div class="activity-time">1 час назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon order">💰</div>
                            <div class="activity-content">
                                <div class="activity-text">Платеж получен ₽15,420</div>
                                <div class="activity-time">2 часа назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👥</div>
                            <div class="activity-content">
                                <div class="activity-text">5 новых отзывов</div>
                                <div class="activity-time">3 часа назад</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Последние заказы</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="table-container">
                    <table class="orders-table">
                        <thead>
                            <tr>
                                <th>ID заказа</th>
                                <th>Клиент</th>
                                <th>Товары</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th>Дата</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="order-id">#ORD-1247</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">МП</div>
                                        <span>Мария Петрова</span>
                                    </div>
                                </td>
                                <td>iPhone 14 Pro, AirPods</td>
                                <td class="amount">₽127,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1246</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">АС</div>
                                        <span>Андрей Смирнов</span>
                                    </div>
                                </td>
                                <td>MacBook Air M2</td>
                                <td class="amount">₽89,990</td>
                                <td><span class="status-badge pending">В обработке</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1245</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ЕК</div>
                                        <span>Елена Козлова</span>
                                    </div>
                                </td>
                                <td>iPad Pro, Apple Pencil</td>
                                <td class="amount">₽67,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1244</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ДВ</div>
                                        <span>Дмитрий Волков</span>
                                    </div>
                                </td>
                                <td>Apple Watch Series 9</td>
                                <td class="amount">₽34,990</td>
                                <td><span class="status-badge cancelled">Отменен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1243</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">НР</div>
                                        <span>Наталья Романова</span>
                                    </div>
                                </td>
                                <td>iPhone 15, MagSafe</td>
                                <td class="amount">₽95,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>13.01.2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Top Products -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Популярные товары</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="products-grid">
                    <div class="product-card">
                        <div class="product-image">📱</div>
                        <div class="product-name">iPhone 15 Pro</div>
                        <div class="product-price">₽119,990</div>
                        <div class="product-sales">247 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">💻</div>
                        <div class="product-name">MacBook Air M2</div>
                        <div class="product-price">₽89,990</div>
                        <div class="product-sales">156 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">🎧</div>
                        <div class="product-name">AirPods Pro</div>
                        <div class="product-price">₽24,990</div>
                        <div class="product-sales">189 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">⌚</div>
                        <div class="product-name">Apple Watch S9</div>
                        <div class="product-price">₽34,990</div>
                        <div class="product-sales">134 продаж</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #6366f1;
            --primary-light: #818cf8;
            --secondary-color: #ec4899;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            --info-color: #06b6d4;
            
            --bg-primary: #0f0f23;
            --bg-secondary: #1a1a2e;
            --bg-tertiary: #16213e;
            --bg-card: #1e1e3f;
            --bg-glass: rgba(255, 255, 255, 0.05);
            --bg-hover: rgba(255, 255, 255, 0.1);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --border-hover: rgba(99, 102, 241, 0.3);
            
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            --gradient-success: linear-gradient(135deg, var(--success-color), #059669);
            --gradient-warning: linear-gradient(135deg, var(--warning-color), #d97706);
            --gradient-danger: linear-gradient(135deg, var(--danger-color), #dc2626);
            --gradient-info: linear-gradient(135deg, var(--info-color), #0891b2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Background Pattern */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundPulse 10s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }

        /* Layout */
        .dashboard {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas: 
                "sidebar header"
                "sidebar main";
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            grid-area: sidebar;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border-color);
            padding: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
            z-index: 0;
        }

        .sidebar-content {
            position: relative;
            z-index: 1;
        }

        .logo {
            padding: 0 2rem 2rem;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 2rem;
        }

        .logo h1 {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-menu {
            list-style: none;
            padding: 0 1rem;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0.1;
            transition: left 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
            left: 0;
        }

        .nav-link:hover,
        .nav-link.active {
            color: var(--text-primary);
            background: var(--bg-hover);
            border-left: 3px solid var(--primary-color);
        }

        .nav-icon {
            font-size: 1.2rem;
            width: 20px;
            text-align: center;
        }

        /* Header */
        .header {
            grid-area: header;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .search-box {
            position: relative;
        }

        .search-input {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem 1rem 0.75rem 3rem;
            color: var(--text-primary);
            width: 300px;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: var(--shadow-glow);
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .notification-btn {
            position: relative;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .notification-btn:hover {
            color: var(--text-primary);
            border-color: var(--primary-color);
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--danger-color);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .user-profile:hover {
            border-color: var(--primary-color);
        }

        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
        }

        .user-info h4 {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .user-info p {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Main Content */
        .main-content {
            grid-area: main;
            padding: 2rem;
            overflow-y: auto;
        }

        .page-header {
            margin-bottom: 2rem;
        }

        .page-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .page-subtitle {
            color: var(--text-secondary);
        }

        /* Stats Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .stat-card.success::before { background: var(--gradient-success); }
        .stat-card.warning::before { background: var(--gradient-warning); }
        .stat-card.danger::before { background: var(--gradient-danger); }
        .stat-card.info::before { background: var(--gradient-info); }

        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
        }

        .stat-icon.primary { background: var(--gradient-primary); }
        .stat-icon.success { background: var(--gradient-success); }
        .stat-icon.warning { background: var(--gradient-warning); }
        .stat-icon.danger { background: var(--gradient-danger); }

        .stat-trend {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
        }

        .stat-trend.up {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .stat-trend.down {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        /* Chart Card */
        .chart-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .chart-period {
            display: flex;
            gap: 0.5rem;
        }

        .period-btn {
            padding: 0.5rem 1rem;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .period-btn.active,
        .period-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .chart-area {
            height: 300px;
            background: var(--bg-secondary);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
        }

        /* Fake Chart */
        .chart-bars {
            display: flex;
            align-items: end;
            justify-content: space-around;
            height: 100%;
            padding: 2rem 1rem 1rem;
        }

        .chart-bar {
            width: 20px;
            background: var(--gradient-primary);
            border-radius: 4px 4px 0 0;
            animation: chartGrow 1s ease-out;
            position: relative;
        }

        .chart-bar:nth-child(1) { height: 60%; animation-delay: 0.1s; }
        .chart-bar:nth-child(2) { height: 80%; animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { height: 45%; animation-delay: 0.3s; }
        .chart-bar:nth-child(4) { height: 90%; animation-delay: 0.4s; }
        .chart-bar:nth-child(5) { height: 70%; animation-delay: 0.5s; }
        .chart-bar:nth-child(6) { height: 85%; animation-delay: 0.6s; }
        .chart-bar:nth-child(7) { height: 65%; animation-delay: 0.7s; }

        @keyframes chartGrow {
            from { height: 0; }
        }

        /* Activity Card */
        .activity-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .activity-header {
            margin-bottom: 1.5rem;
        }

        .activity-list {
            list-style: none;
        }

        .activity-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
            border-bottom: none;
        }

        .activity-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: white;
        }

        .activity-icon.order { background: var(--gradient-primary); }
        .activity-icon.user { background: var(--gradient-success); }
        .activity-icon.product { background: var(--gradient-warning); }

        .activity-content {
            flex: 1;
        }

        .activity-text {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
        }

        .activity-time {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Orders Table */
        .orders-section {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .view-all-btn {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            text-shadow: 0 0 10px var(--primary-color);
        }

        .table-container {
            overflow-x: auto;
        }

        .orders-table {
            width: 100%;
            border-collapse: collapse;
        }

        .orders-table th,
        .orders-table td {
            text-align: left;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .orders-table th {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .orders-table td {
            color: var(--text-primary);
        }

        .order-id {
            font-family: 'JetBrains Mono', monospace;
            color: var(--primary-color);
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .customer-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .status-badge.completed {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .status-badge.pending {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
        }

        .status-badge.cancelled {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .amount {
            font-weight: 600;
            color: var(--success-color);
        }

        /* Products Grid */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .product-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .product-image {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 12px;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .product-name {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-price {
            color: var(--success-color);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-sales {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .dashboard {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "header"
                    "main";
            }

            .sidebar {
                display: none;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .header {
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            }

            .search-input {
                width: 100%;
            }

            .main-content {
                padding: 1rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .table-container {
                font-size: 0.8rem;
            }

            .orders-table th,
            .orders-table td {
                padding: 0.5rem;
            }
        }

        /* Animations */
        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .slide-in {
            animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-content">
                <div class="logo">
                    <h1>ShopAdmin</h1>
                </div>
                <nav>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">
                                <span class="nav-icon">📊</span>
                                <span>Дашборд</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">🛍️</span>
                                <span>Заказы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📦</span>
                                <span>Товары</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">👥</span>
                                <span>Клиенты</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📈</span>
                                <span>Аналитика</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">💰</span>
                                <span>Финансы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">⚙️</span>
                                <span>Настройки</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Header -->
        <header class="header">
            <div class="header-left">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="Поиск заказов, товаров, клиентов...">
                    <span class="search-icon">🔍</span>
                </div>
            </div>
            <div class="header-right">
                <button class="notification-btn">
                    <span>🔔</span>
                    <span class="notification-badge">3</span>
                </button>
                <div class="user-profile">
                    <div class="user-avatar">АИ</div>
                    <div class="user-info">
                        <h4>Алексей Иванов</h4>
                        <p>Администратор</p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="page-header fade-in">
                <h1 class="page-title">Дашборд</h1>
                <p class="page-subtitle">Добро пожаловать в панель управления магазином</p>
            </div>

            <!-- Stats Cards -->
            <div class="stats-grid fade-in">
                <div class="stat-card primary">
                    <div class="stat-header">
                        <div class="stat-icon primary">💰</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <div class="stat-value">₽2,847,392</div>
                    <div class="stat-label">Общий доход</div>
                </div>

                <div class="stat-card success">
                    <div class="stat-header">
                        <div class="stat-icon success">🛍️</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+8.2%</span>
                        </div>
                    </div>
                    <div class="stat-value">1,247</div>
                    <div class="stat-label">Заказы</div>
                </div>

                <div class="stat-card warning">
                    <div class="stat-header">
                        <div class="stat-icon warning">👥</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+15.3%</span>
                        </div>
                    </div>
                    <div class="stat-value">8,429</div>
                    <div class="stat-label">Клиенты</div>
                </div>

                <div class="stat-card danger">
                    <div class="stat-header">
                        <div class="stat-icon danger">📦</div>
                        <div class="stat-trend down">
                            <span>↘</span>
                            <span>-2.1%</span>
                        </div>
                    </div>
                    <div class="stat-value">342</div>
                    <div class="stat-label">Товары</div>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="content-grid fade-in">
                <!-- Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">Продажи</h3>
                        <div class="chart-period">
                            <button class="period-btn">7д</button>
                            <button class="period-btn active">30д</button>
                            <button class="period-btn">90д</button>
                        </div>
                    </div>
                    <div class="chart-area">
                        <div class="chart-bars">
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                        </div>
                    </div>
                </div>

                <!-- Activity -->
                <div class="activity-card">
                    <div class="activity-header">
                        <h3 class="chart-title">Последняя активность</h3>
                    </div>
                    <ul class="activity-list">
                        <li class="activity-item">
                            <div class="activity-icon order">🛍️</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый заказ #1247</div>
                                <div class="activity-time">2 минуты назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👤</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый клиент зарегистрирован</div>
                                <div class="activity-time">15 минут назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon product">📦</div>
                            <div class="activity-content">
                                <div class="activity-text">Товар добавлен в каталог</div>
                                <div class="activity-time">1 час назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon order">💰</div>
                            <div class="activity-content">
                                <div class="activity-text">Платеж получен ₽15,420</div>
                                <div class="activity-time">2 часа назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👥</div>
                            <div class="activity-content">
                                <div class="activity-text">5 новых отзывов</div>
                                <div class="activity-time">3 часа назад</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Последние заказы</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="table-container">
                    <table class="orders-table">
                        <thead>
                            <tr>
                                <th>ID заказа</th>
                                <th>Клиент</th>
                                <th>Товары</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th>Дата</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="order-id">#ORD-1247</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">МП</div>
                                        <span>Мария Петрова</span>
                                    </div>
                                </td>
                                <td>iPhone 14 Pro, AirPods</td>
                                <td class="amount">₽127,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1246</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">АС</div>
                                        <span>Андрей Смирнов</span>
                                    </div>
                                </td>
                                <td>MacBook Air M2</td>
                                <td class="amount">₽89,990</td>
                                <td><span class="status-badge pending">В обработке</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1245</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ЕК</div>
                                        <span>Елена Козлова</span>
                                    </div>
                                </td>
                                <td>iPad Pro, Apple Pencil</td>
                                <td class="amount">₽67,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1244</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ДВ</div>
                                        <span>Дмитрий Волков</span>
                                    </div>
                                </td>
                                <td>Apple Watch Series 9</td>
                                <td class="amount">₽34,990</td>
                                <td><span class="status-badge cancelled">Отменен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1243</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">НР</div>
                                        <span>Наталья Романова</span>
                                    </div>
                                </td>
                                <td>iPhone 15, MagSafe</td>
                                <td class="amount">₽95,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>13.01.2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Top Products -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Популярные товары</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="products-grid">
                    <div class="product-card">
                        <div class="product-image">📱</div>
                        <div class="product-name">iPhone 15 Pro</div>
                        <div class="product-price">₽119,990</div>
                        <div class="product-sales">247 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">💻</div>
                        <div class="product-name">MacBook Air M2</div>
                        <div class="product-price">₽89,990</div>
                        <div class="product-sales">156 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">🎧</div>
                        <div class="product-name">AirPods Pro</div>
                        <div class="product-price">₽24,990</div>
                        <div class="product-sales">189 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">⌚</div>
                        <div class="product-name">Apple Watch S9</div>
                        <div class="product-price">₽34,990</div>
                        <div class="product-sales">134 продаж</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
        :root {
            --primary-color: #6366f1;
            --primary-light: #818cf8;
            --secondary-color: #ec4899;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            --info-color: #06b6d4;
            
            --bg-primary: #0f0f23;
            --bg-secondary: #1a1a2e;
            --bg-tertiary: #16213e;
            --bg-card: #1e1e3f;
            --bg-glass: rgba(255, 255, 255, 0.05);
            --bg-hover: rgba(255, 255, 255, 0.1);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --border-hover: rgba(99, 102, 241, 0.3);
            
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            --gradient-success: linear-gradient(135deg, var(--success-color), #059669);
            --gradient-warning: linear-gradient(135deg, var(--warning-color), #d97706);
            --gradient-danger: linear-gradient(135deg, var(--danger-color), #dc2626);
            --gradient-info: linear-gradient(135deg, var(--info-color), #0891b2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Background Pattern */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundPulse 10s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }

        /* Layout */
        .dashboard {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas: 
                "sidebar header"
                "sidebar main";
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            grid-area: sidebar;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border-color);
            padding: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
            z-index: 0;
        }

        .sidebar-content {
            position: relative;
            z-index: 1;
        }

        .logo {
            padding: 0 2rem 2rem;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 2rem;
        }

        .logo h1 {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-menu {
            list-style: none;
            padding: 0 1rem;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0.1;
            transition: left 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
            left: 0;
        }

        .nav-link:hover,
        .nav-link.active {
            color: var(--text-primary);
            background: var(--bg-hover);
            border-left: 3px solid var(--primary-color);
        }

        .nav-icon {
            font-size: 1.2rem;
            width: 20px;
            text-align: center;
        }

        /* Header */
        .header {
            grid-area: header;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .search-box {
            position: relative;
        }

        .search-input {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem 1rem 0.75rem 3rem;
            color: var(--text-primary);
            width: 300px;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: var(--shadow-glow);
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .notification-btn {
            position: relative;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .notification-btn:hover {
            color: var(--text-primary);
            border-color: var(--primary-color);
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--danger-color);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .user-profile:hover {
            border-color: var(--primary-color);
        }

        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
        }

        .user-info h4 {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .user-info p {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Main Content */
        .main-content {
            grid-area: main;
            padding: 2rem;
            overflow-y: auto;
        }

        .page-header {
            margin-bottom: 2rem;
        }

        .page-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .page-subtitle {
            color: var(--text-secondary);
        }

        /* Stats Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .stat-card.success::before { background: var(--gradient-success); }
        .stat-card.warning::before { background: var(--gradient-warning); }
        .stat-card.danger::before { background: var(--gradient-danger); }
        .stat-card.info::before { background: var(--gradient-info); }

        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
        }

        .stat-icon.primary { background: var(--gradient-primary); }
        .stat-icon.success { background: var(--gradient-success); }
        .stat-icon.warning { background: var(--gradient-warning); }
        .stat-icon.danger { background: var(--gradient-danger); }

        .stat-trend {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
        }

        .stat-trend.up {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .stat-trend.down {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        /* Chart Card */
        .chart-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .chart-period {
            display: flex;
            gap: 0.5rem;
        }

        .period-btn {
            padding: 0.5rem 1rem;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .period-btn.active,
        .period-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .chart-area {
            height: 300px;
            background: var(--bg-secondary);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
        }

        /* Fake Chart */
        .chart-bars {
            display: flex;
            align-items: end;
            justify-content: space-around;
            height: 100%;
            padding: 2rem 1rem 1rem;
        }

        .chart-bar {
            width: 20px;
            background: var(--gradient-primary);
            border-radius: 4px 4px 0 0;
            animation: chartGrow 1s ease-out;
            position: relative;
        }

        .chart-bar:nth-child(1) { height: 60%; animation-delay: 0.1s; }
        .chart-bar:nth-child(2) { height: 80%; animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { height: 45%; animation-delay: 0.3s; }
        .chart-bar:nth-child(4) { height: 90%; animation-delay: 0.4s; }
        .chart-bar:nth-child(5) { height: 70%; animation-delay: 0.5s; }
        .chart-bar:nth-child(6) { height: 85%; animation-delay: 0.6s; }
        .chart-bar:nth-child(7) { height: 65%; animation-delay: 0.7s; }

        @keyframes chartGrow {
            from { height: 0; }
        }

        /* Activity Card */
        .activity-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .activity-header {
            margin-bottom: 1.5rem;
        }

        .activity-list {
            list-style: none;
        }

        .activity-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
            border-bottom: none;
        }

        .activity-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: white;
        }

        .activity-icon.order { background: var(--gradient-primary); }
        .activity-icon.user { background: var(--gradient-success); }
        .activity-icon.product { background: var(--gradient-warning); }

        .activity-content {
            flex: 1;
        }

        .activity-text {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
        }

        .activity-time {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Orders Table */
        .orders-section {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .view-all-btn {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            text-shadow: 0 0 10px var(--primary-color);
        }

        .table-container {
            overflow-x: auto;
        }

        .orders-table {
            width: 100%;
            border-collapse: collapse;
        }

        .orders-table th,
        .orders-table td {
            text-align: left;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .orders-table th {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .orders-table td {
            color: var(--text-primary);
        }

        .order-id {
            font-family: 'JetBrains Mono', monospace;
            color: var(--primary-color);
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .customer-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .status-badge.completed {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .status-badge.pending {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
        }

        .status-badge.cancelled {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .amount {
            font-weight: 600;
            color: var(--success-color);
        }

        /* Products Grid */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .product-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .product-image {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 12px;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .product-name {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-price {
            color: var(--success-color);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-sales {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .dashboard {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "header"
                    "main";
            }

            .sidebar {
                display: none;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .header {
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            }

            .search-input {
                width: 100%;
            }

            .main-content {
                padding: 1rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .table-container {
                font-size: 0.8rem;
            }

            .orders-table th,
            .orders-table td {
                padding: 0.5rem;
            }
        }

        /* Animations */
        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .slide-in {
            animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
export const verstka_portfolio_3 = {
  id: "verstka_portfolio_3",
  module: "CSS",
  title: "TaskFlow",
  topic: "TaskFlow",
  topicId: "verstka_final",
  sectionId: "verstka_final2",
  description:
    "Создайте кнопку с плавным изменением цвета и размера при наведении с использованием CSS-свойства `transition`.",
  steps: [
    "Создайте макет лендинга для сервиса управления задачами TaskFlow с помощью HTML и CSS.",
    "Реализуйте современный layout: сайдбар слева с логотипом, меню навигации и списком проектов.",
    "В верхней части разместите хедер с заголовком, поиском и профилем пользователя.",
    "В основной части страницы выведите статистику (количество задач), Kanban-доску (три колонки: К выполнению, В работе, Выполнено), список задач и карточки.",
    "Сделайте адаптивную вёрстку — лейаут должен корректно отображаться на экранах разной ширины (desktop/tablet/mobile).",
    "Добавьте современный темный стиль с использованием переменных CSS и градиентов.",
    "Реализуйте плавные анимации появления контента и наведения на карточки/кнопки (transition, keyframes).",
    "Добавьте интерактивные элементы — кнопки 'Добавить задачу', возможность поиска, фильтрации и перехода по разделам.",
    "Обеспечьте качественную типографику, паддинги, сетки и визуальную иерархию для удобства восприятия информации.",
    "Протестируйте работу верстки во всех современных браузерах.",
  ],
  difficulty: 1,
  solution: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-content">
                <div class="logo">
                    <h1>ShopAdmin</h1>
                </div>
                <nav>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">
                                <span class="nav-icon">📊</span>
                                <span>Дашборд</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">🛍️</span>
                                <span>Заказы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📦</span>
                                <span>Товары</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">👥</span>
                                <span>Клиенты</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📈</span>
                                <span>Аналитика</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">💰</span>
                                <span>Финансы</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">⚙️</span>
                                <span>Настройки</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Header -->
        <header class="header">
            <div class="header-left">
                <div class="search-box">
                    <input type="text" class="search-input" placeholder="Поиск заказов, товаров, клиентов...">
                    <span class="search-icon">🔍</span>
                </div>
            </div>
            <div class="header-right">
                <button class="notification-btn">
                    <span>🔔</span>
                    <span class="notification-badge">3</span>
                </button>
                <div class="user-profile">
                    <div class="user-avatar">АИ</div>
                    <div class="user-info">
                        <h4>Алексей Иванов</h4>
                        <p>Администратор</p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="page-header fade-in">
                <h1 class="page-title">Дашборд</h1>
                <p class="page-subtitle">Добро пожаловать в панель управления магазином</p>
            </div>

            <!-- Stats Cards -->
            <div class="stats-grid fade-in">
                <div class="stat-card primary">
                    <div class="stat-header">
                        <div class="stat-icon primary">💰</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <div class="stat-value">₽2,847,392</div>
                    <div class="stat-label">Общий доход</div>
                </div>

                <div class="stat-card success">
                    <div class="stat-header">
                        <div class="stat-icon success">🛍️</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+8.2%</span>
                        </div>
                    </div>
                    <div class="stat-value">1,247</div>
                    <div class="stat-label">Заказы</div>
                </div>

                <div class="stat-card warning">
                    <div class="stat-header">
                        <div class="stat-icon warning">👥</div>
                        <div class="stat-trend up">
                            <span>↗</span>
                            <span>+15.3%</span>
                        </div>
                    </div>
                    <div class="stat-value">8,429</div>
                    <div class="stat-label">Клиенты</div>
                </div>

                <div class="stat-card danger">
                    <div class="stat-header">
                        <div class="stat-icon danger">📦</div>
                        <div class="stat-trend down">
                            <span>↘</span>
                            <span>-2.1%</span>
                        </div>
                    </div>
                    <div class="stat-value">342</div>
                    <div class="stat-label">Товары</div>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="content-grid fade-in">
                <!-- Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">Продажи</h3>
                        <div class="chart-period">
                            <button class="period-btn">7д</button>
                            <button class="period-btn active">30д</button>
                            <button class="period-btn">90д</button>
                        </div>
                    </div>
                    <div class="chart-area">
                        <div class="chart-bars">
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                        </div>
                    </div>
                </div>

                <!-- Activity -->
                <div class="activity-card">
                    <div class="activity-header">
                        <h3 class="chart-title">Последняя активность</h3>
                    </div>
                    <ul class="activity-list">
                        <li class="activity-item">
                            <div class="activity-icon order">🛍️</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый заказ #1247</div>
                                <div class="activity-time">2 минуты назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👤</div>
                            <div class="activity-content">
                                <div class="activity-text">Новый клиент зарегистрирован</div>
                                <div class="activity-time">15 минут назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon product">📦</div>
                            <div class="activity-content">
                                <div class="activity-text">Товар добавлен в каталог</div>
                                <div class="activity-time">1 час назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon order">💰</div>
                            <div class="activity-content">
                                <div class="activity-text">Платеж получен ₽15,420</div>
                                <div class="activity-time">2 часа назад</div>
                            </div>
                        </li>
                        <li class="activity-item">
                            <div class="activity-icon user">👥</div>
                            <div class="activity-content">
                                <div class="activity-text">5 новых отзывов</div>
                                <div class="activity-time">3 часа назад</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Последние заказы</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="table-container">
                    <table class="orders-table">
                        <thead>
                            <tr>
                                <th>ID заказа</th>
                                <th>Клиент</th>
                                <th>Товары</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th>Дата</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="order-id">#ORD-1247</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">МП</div>
                                        <span>Мария Петрова</span>
                                    </div>
                                </td>
                                <td>iPhone 14 Pro, AirPods</td>
                                <td class="amount">₽127,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1246</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">АС</div>
                                        <span>Андрей Смирнов</span>
                                    </div>
                                </td>
                                <td>MacBook Air M2</td>
                                <td class="amount">₽89,990</td>
                                <td><span class="status-badge pending">В обработке</span></td>
                                <td>15.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1245</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ЕК</div>
                                        <span>Елена Козлова</span>
                                    </div>
                                </td>
                                <td>iPad Pro, Apple Pencil</td>
                                <td class="amount">₽67,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1244</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">ДВ</div>
                                        <span>Дмитрий Волков</span>
                                    </div>
                                </td>
                                <td>Apple Watch Series 9</td>
                                <td class="amount">₽34,990</td>
                                <td><span class="status-badge cancelled">Отменен</span></td>
                                <td>14.01.2025</td>
                            </tr>
                            <tr>
                                <td class="order-id">#ORD-1243</td>
                                <td>
                                    <div class="customer-info">
                                        <div class="customer-avatar">НР</div>
                                        <span>Наталья Романова</span>
                                    </div>
                                </td>
                                <td>iPhone 15, MagSafe</td>
                                <td class="amount">₽95,890</td>
                                <td><span class="status-badge completed">Выполнен</span></td>
                                <td>13.01.2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Top Products -->
            <div class="orders-section fade-in">
                <div class="section-header">
                    <h3 class="section-title">Популярные товары</h3>
                    <a href="#" class="view-all-btn">Посмотреть все →</a>
                </div>
                <div class="products-grid">
                    <div class="product-card">
                        <div class="product-image">📱</div>
                        <div class="product-name">iPhone 15 Pro</div>
                        <div class="product-price">₽119,990</div>
                        <div class="product-sales">247 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">💻</div>
                        <div class="product-name">MacBook Air M2</div>
                        <div class="product-price">₽89,990</div>
                        <div class="product-sales">156 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">🎧</div>
                        <div class="product-name">AirPods Pro</div>
                        <div class="product-price">₽24,990</div>
                        <div class="product-sales">189 продаж</div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">⌚</div>
                        <div class="product-name">Apple Watch S9</div>
                        <div class="product-price">₽34,990</div>
                        <div class="product-sales">134 продаж</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
  `.trim(),
  show: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskFlow - Управление задачами</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #6366f1;
            --primary-light: #818cf8;
            --primary-dark: #4f46e5;
            --secondary-color: #ec4899;
            --accent-color: #06b6d4;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            --purple: #a855f7;
            --orange: #f97316;
            --green: #22c55e;
            --blue: #3b82f6;
            
            --bg-primary: #0a0a0a;
            --bg-secondary: #111111;
            --bg-tertiary: #1a1a1a;
            --bg-card: #1e1e1e;
            --bg-glass: rgba(255, 255, 255, 0.05);
            --bg-hover: rgba(255, 255, 255, 0.1);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --border-hover: rgba(99, 102, 241, 0.3);
            
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
            --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            --gradient-success: linear-gradient(135deg, var(--success-color), var(--green));
            --gradient-warning: linear-gradient(135deg, var(--warning-color), var(--orange));
            --gradient-danger: linear-gradient(135deg, var(--danger-color), #dc2626);
            --gradient-purple: linear-gradient(135deg, var(--purple), #9333ea);
            --gradient-blue: linear-gradient(135deg, var(--blue), var(--accent-color));
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Animated Background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundFloat 15s ease-in-out infinite;
        }

        @keyframes backgroundFloat {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-10px) translateY(-5px); }
            50% { transform: translateX(10px) translateY(5px); }
            75% { transform: translateX(-5px) translateY(10px); }
        }

        /* Layout */
        .app {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas: 
                "sidebar header"
                "sidebar main";
            min-height: 100vh;
        }

        /* Header */
        .header {
            grid-area: header;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .page-title {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .search-container {
            position: relative;
        }

        .search-input {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem 1rem 0.75rem 3rem;
            color: var(--text-primary);
            width: 300px;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: var(--shadow-glow);
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .filter-btn {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .filter-btn:hover {
            color: var(--text-primary);
            border-color: var(--primary-color);
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .user-avatar:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-glow);
        }

        /* Sidebar */
        .sidebar {
            grid-area: sidebar;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border-color);
            padding: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
            z-index: 0;
        }

        .sidebar-content {
            position: relative;
            z-index: 1;
        }

        .logo {
            padding: 0 2rem 2rem;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 2rem;
        }

        .logo h1 {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sidebar-section {
            margin-bottom: 2rem;
        }

        .section-title {
            padding: 0 2rem 1rem;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted);
        }

        .nav-list {
            list-style: none;
            padding: 0 1rem;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0.1;
            transition: left 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
            left: 0;
        }

        .nav-link:hover,
        .nav-link.active {
            color: var(--text-primary);
            background: var(--bg-hover);
        }

        .nav-icon {
            font-size: 1.2rem;
            width: 20px;
            text-align: center;
        }

        .project-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            margin: 0.25rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .project-item:hover {
            background: var(--bg-hover);
        }

        .project-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .project-color {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .project-color.blue { background: var(--blue); }
        .project-color.green { background: var(--green); }
        .project-color.purple { background: var(--purple); }
        .project-color.orange { background: var(--orange); }

        .project-name {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .project-count {
            background: var(--bg-tertiary);
            color: var(--text-muted);
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.7rem;
        }

        /* Main Content */
        .main-content {
            grid-area: main;
            padding: 2rem;
            overflow-y: auto;
        }

        .board-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .board-stats {
            display: flex;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            transition: all 0.3s ease;
        }

        .stat-item:hover {
            border-color: var(--border-hover);
            transform: translateY(-2px);
        }

        .stat-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: white;
        }

        .stat-icon.todo { background: var(--gradient-blue); }
        .stat-icon.progress { background: var(--gradient-warning); }
        .stat-icon.done { background: var(--gradient-success); }

        .stat-text {
            display: flex;
            flex-direction: column;
        }

        .stat-number {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .stat-label {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Kanban Board */
        .kanban-board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            min-height: 600px;
        }

        .column {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
        }

        .column::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
        }

        .column.todo::before { background: var(--gradient-blue); }
        .column.progress::before { background: var(--gradient-warning); }
        .column.done::before { background: var(--gradient-success); }

        .column-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .column-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.1rem;
            font-weight: 600;
        }

        .column-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: white;
        }

        .column-icon.todo { background: var(--gradient-blue); }
        .column-icon.progress { background: var(--gradient-warning); }
        .column-icon.done { background: var(--gradient-success); }

        .task-count {
            background: var(--bg-tertiary);
            color: var(--text-muted);
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.8rem;
        }

        .add-task-btn {
            background: transparent;
            border: 1px dashed var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            color: var(--text-muted);
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 1rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .add-task-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
            background: rgba(99, 102, 241, 0.05);
        }

        .tasks-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        /* Task Cards */
        .task-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .task-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
        }

        .task-card.high::before { background: var(--danger-color); }
        .task-card.medium::before { background: var(--warning-color); }
        .task-card.low::before { background: var(--success-color); }

        .task-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-card);
            border-color: var(--border-hover);
        }

        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .task-title {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .task-id {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            color: var(--text-muted);
            background: var(--bg-tertiary);
            padding: 0.25rem 0.5rem;
            border-radius: 6px;
        }

        .priority-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .priority-badge.high {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .priority-badge.medium {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
        }

        .priority-badge.low {
            background: rgba(34, 197, 94, 0.1);
            color: var(--success-color);
        }

        .task-description {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        .task-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .task-tag {
            background: var(--bg-tertiary);
            color: var(--text-secondary);
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.7rem;
        }

        .task-tag.frontend { background: rgba(59, 130, 246, 0.1); color: var(--blue); }
        .task-tag.backend { background: rgba(34, 197, 94, 0.1); color: var(--green); }
        .task-tag.design { background: rgba(168, 85, 247, 0.1); color: var(--purple); }
        .task-tag.bug { background: rgba(239, 68, 68, 0.1); color: var(--danger-color); }

        .task-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .task-assignees {
            display: flex;
            gap: -0.5rem;
        }

        .assignee-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid var(--bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            font-weight: 600;
            color: white;
            margin-left: -0.5rem;
        }

        .assignee-avatar:first-child {
            margin-left: 0;
        }

        .assignee-avatar.user1 { background: var(--gradient-primary); }
        .assignee-avatar.user2 { background: var(--gradient-success); }
        .assignee-avatar.user3 { background: var(--gradient-warning); }
        .assignee-avatar.user4 { background: var(--gradient-purple); }

        .task-due {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        .task-due.overdue {
            color: var(--danger-color);
        }

        .task-due.today {
            color: var(--warning-color);
        }

        /* Progress Bar */
        .task-progress {
            margin: 1rem 0;
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .progress-label {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        .progress-percentage {
            font-size: 0.8rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .progress-bar {
            width: 100%;
            height: 6px;
            background: var(--bg-tertiary);
            border-radius: 3px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: var(--gradient-primary);
            border-radius: 3px;
            transition: width 0.3s ease;
            position: relative;
        }

        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: progressShine 2s ease-in-out infinite;
        }

        @keyframes progressShine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .app {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "header"
                    "main";
            }

            .sidebar {
                display: none;
            }

            .kanban-board {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }

        @media (max-width: 768px) {
            .header {
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            }

            .search-input {
                width: 100%;
            }

            .main-content {
                padding: 1rem;
            }

            .board-stats {
                flex-direction: column;
                gap: 1rem;
            }

            .task-card {
                padding: 1rem;
            }
        }

        /* Animations */
        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .slide-in {
            animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .bounce-in {
            animation: bounceIn 0.6s ease-out;
        }

        @keyframes bounceIn {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="app">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-content">
                <div class="logo">
                    <h1>TaskFlow</h1>
                </div>

                <div class="sidebar-section">
                    <div class="section-title">Навигация</div>
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">
                                <span class="nav-icon">📊</span>
                                <span>Дашборд</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📋</span>
                                <span>Мои задачи</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">👥</span>
                                <span>Команда</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📅</span>
                                <span>Календарь</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span class="nav-icon">📈</span>
                                <span>Отчеты</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-section">
                    <div class="section-title">Проекты</div>
                    <div class="project-item">
                        <div class="project-info">
                            <div class="project-color blue"></div>
                            <span class="project-name">Веб-приложение</span>
                        </div>
                        <span class="project-count">12</span>
                    </div>
                    <div class="project-item">
                        <div class="project-info">
                            <div class="project-color green"></div>
                            <span class="project-name">Мобильное приложение</span>
                        </div>
                        <span class="project-count">8</span>
                    </div>
                    <div class="project-item">
                        <div class="project-info">
                            <div class="project-color purple"></div>
                            <span class="project-name">Дизайн система</span>
                        </div>
                        <span class="project-count">5</span>
                    </div>
                    <div class="project-item">
                        <div class="project-info">
                            <div class="project-color orange"></div>
                            <span class="project-name">API разработка</span>
                        </div>
                        <span class="project-count">15</span>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Header -->
        <header class="header">
            <div class="header-left">
                <h1 class="page-title">Доска задач</h1>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Поиск задач...">
                    <span class="search-icon">🔍</span>
                </div>
            </div>
            <div class="header-right">
                <button class="filter-btn">
                    <span>🔽</span>
                    <span>Фильтры</span>
                </button>
                <div class="user-avatar">АИ</div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Board Stats -->
            <div class="board-stats fade-in">
                <div class="stat-item">
                    <div class="stat-icon todo">📝</div>
                    <div class="stat-text">
                        <span class="stat-number">12</span>
                        <span class="stat-label">К выполнению</span>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon progress">⚡</div>
                    <div class="stat-text">
                        <span class="stat-number">8</span>
                        <span class="stat-label">В работе</span>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon done">✅</div>
                    <div class="stat-text">
                        <span class="stat-number">24</span>
                        <span class="stat-label">Выполнено</span>
                    </div>
                </div>
            </div>

            <!-- Kanban Board -->
            <div class="kanban-board fade-in">
                <!-- To Do Column -->
                <div class="column todo">
                    <div class="column-header">
                        <div class="column-title">
                            <div class="column-icon todo">📝</div>
                            <span>К выполнению</span>
                        </div>
                        <span class="task-count">12</span>
                    </div>

                    <button class="add-task-btn">
                        <span>➕</span>
                        <span>Добавить задачу</span>
                    </button>

                    <div class="tasks-list">
                        <div class="task-card high bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Редизайн главной страницы</div>
                                    <div class="task-id">TASK-001</div>
                                </div>
                                <div class="priority-badge high">Высокий</div>
                            </div>
                            <div class="task-description">
                                Обновить дизайн главной страницы в соответствии с новым брендбуком компании
                            </div>
                            <div class="task-tags">
                                <span class="task-tag design">Дизайн</span>
                                <span class="task-tag frontend">Frontend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user1">АИ</div>
                                    <div class="assignee-avatar user2">МП</div>
                                </div>
                                <div class="task-due today">
                                    <span>📅</span>
                                    <span>Сегодня</span>
                                </div>
                            </div>
                        </div>

                        <div class="task-card medium bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Настройка CI/CD pipeline</div>
                                    <div class="task-id">TASK-002</div>
                                </div>
                                <div class="priority-badge medium">Средний</div>
                            </div>
                            <div class="task-description">
                                Настроить автоматическое развертывание для production среды
                            </div>
                            <div class="task-tags">
                                <span class="task-tag backend">Backend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user3">ДС</div>
                                </div>
                                <div class="task-due">
                                    <span>📅</span>
                                    <span>15 янв</span>
                                </div>
                            </div>
                        </div>

                        <div class="task-card low bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Обновление документации</div>
                                    <div class="task-id">TASK-003</div>
                                </div>
                                <div class="priority-badge low">Низкий</div>
                            </div>
                            <div class="task-description">
                                Обновить техническую документацию API
                            </div>
                            <div class="task-tags">
                                <span class="task-tag backend">Backend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user4">ЕК</div>
                                </div>
                                <div class="task-due">
                                    <span>📅</span>
                                    <span>20 янв</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- In Progress Column -->
                <div class="column progress">
                    <div class="column-header">
                        <div class="column-title">
                            <div class="column-icon progress">⚡</div>
                            <span>В работе</span>
                        </div>
                        <span class="task-count">8</span>
                    </div>

                    <button class="add-task-btn">
                        <span>➕</span>
                        <span>Добавить задачу</span>
                    </button>

                    <div class="tasks-list">
                        <div class="task-card high bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Интеграция платежной системы</div>
                                    <div class="task-id">TASK-004</div>
                                </div>
                                <div class="priority-badge high">Высокий</div>
                            </div>
                            <div class="task-description">
                                Интегрировать Stripe для обработки платежей
                            </div>
                            <div class="task-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Прогресс</span>
                                    <span class="progress-percentage">65%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 65%;"></div>
                                </div>
                            </div>
                            <div class="task-tags">
                                <span class="task-tag backend">Backend</span>
                                <span class="task-tag frontend">Frontend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user1">АИ</div>
                                    <div class="assignee-avatar user3">ДС</div>
                                </div>
                                <div class="task-due overdue">
                                    <span>📅</span>
                                    <span>Просрочено</span>
                                </div>
                            </div>
                        </div>

                        <div class="task-card medium bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Мобильная адаптация</div>
                                    <div class="task-id">TASK-005</div>
                                </div>
                                <div class="priority-badge medium">Средний</div>
                            </div>
                            <div class="task-description">
                                Адаптировать интерфейс для мобильных устройств
                            </div>
                            <div class="task-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Прогресс</span>
                                    <span class="progress-percentage">40%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 40%;"></div>
                                </div>
                            </div>
                            <div class="task-tags">
                                <span class="task-tag frontend">Frontend</span>
                                <span class="task-tag design">Дизайн</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user2">МП</div>
                                </div>
                                <div class="task-due">
                                    <span>📅</span>
                                    <span>18 янв</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Done Column -->
                <div class="column done">
                    <div class="column-header">
                        <div class="column-title">
                            <div class="column-icon done">✅</div>
                            <span>Выполнено</span>
                        </div>
                        <span class="task-count">24</span>
                    </div>

                    <button class="add-task-btn">
                        <span>➕</span>
                        <span>Добавить задачу</span>
                    </button>

                    <div class="tasks-list">
                        <div class="task-card medium bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Настройка базы данных</div>
                                    <div class="task-id">TASK-006</div>
                                </div>
                                <div class="priority-badge medium">Средний</div>
                            </div>
                            <div class="task-description">
                                Настроить PostgreSQL и создать схему БД
                            </div>
                            <div class="task-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Прогресс</span>
                                    <span class="progress-percentage">100%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 100%;"></div>
                                </div>
                            </div>
                            <div class="task-tags">
                                <span class="task-tag backend">Backend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user3">ДС</div>
                                </div>
                                <div class="task-due">
                                    <span>✅</span>
                                    <span>Выполнено</span>
                                </div>
                            </div>
                        </div>

                        <div class="task-card low bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Исправление багов</div>
                                    <div class="task-id">TASK-007</div>
                                </div>
                                <div class="priority-badge low">Низкий</div>
                            </div>
                            <div class="task-description">
                                Исправить мелкие баги в пользовательском интерфейсе
                            </div>
                            <div class="task-tags">
                                <span class="task-tag bug">Баг</span>
                                <span class="task-tag frontend">Frontend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user1">АИ</div>
                                </div>
                                <div class="task-due">
                                    <span>✅</span>
                                    <span>Выполнено</span>
                                </div>
                            </div>
                        </div>

                        <div class="task-card high bounce-in">
                            <div class="task-header">
                                <div>
                                    <div class="task-title">Система авторизации</div>
                                    <div class="task-id">TASK-008</div>
                                </div>
                                <div class="priority-badge high">Высокий</div>
                            </div>
                            <div class="task-description">
                                Реализовать JWT авторизацию и защиту роутов
                            </div>
                            <div class="task-tags">
                                <span class="task-tag backend">Backend</span>
                            </div>
                            <div class="task-footer">
                                <div class="task-assignees">
                                    <div class="assignee-avatar user4">ЕК</div>
                                    <div class="assignee-avatar user3">ДС</div>
                                </div>
                                <div class="task-due">
                                    <span>✅</span>
                                    <span>Выполнено</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
  `.trim(),
  codeExampleCSS: `
        :root {
            --primary-color: #6366f1;
            --primary-light: #818cf8;
            --secondary-color: #ec4899;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --danger-color: #ef4444;
            --info-color: #06b6d4;
            
            --bg-primary: #0f0f23;
            --bg-secondary: #1a1a2e;
            --bg-tertiary: #16213e;
            --bg-card: #1e1e3f;
            --bg-glass: rgba(255, 255, 255, 0.05);
            --bg-hover: rgba(255, 255, 255, 0.1);
            
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            
            --border-color: rgba(255, 255, 255, 0.1);
            --border-hover: rgba(99, 102, 241, 0.3);
            
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
            
            --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            --gradient-success: linear-gradient(135deg, var(--success-color), #059669);
            --gradient-warning: linear-gradient(135deg, var(--warning-color), #d97706);
            --gradient-danger: linear-gradient(135deg, var(--danger-color), #dc2626);
            --gradient-info: linear-gradient(135deg, var(--info-color), #0891b2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Background Pattern */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundPulse 10s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }

        /* Layout */
        .dashboard {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas: 
                "sidebar header"
                "sidebar main";
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            grid-area: sidebar;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border-color);
            padding: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
            z-index: 0;
        }

        .sidebar-content {
            position: relative;
            z-index: 1;
        }

        .logo {
            padding: 0 2rem 2rem;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 2rem;
        }

        .logo h1 {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-menu {
            list-style: none;
            padding: 0 1rem;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0.1;
            transition: left 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
            left: 0;
        }

        .nav-link:hover,
        .nav-link.active {
            color: var(--text-primary);
            background: var(--bg-hover);
            border-left: 3px solid var(--primary-color);
        }

        .nav-icon {
            font-size: 1.2rem;
            width: 20px;
            text-align: center;
        }

        /* Header */
        .header {
            grid-area: header;
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .search-box {
            position: relative;
        }

        .search-input {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem 1rem 0.75rem 3rem;
            color: var(--text-primary);
            width: 300px;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: var(--shadow-glow);
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .notification-btn {
            position: relative;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.75rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .notification-btn:hover {
            color: var(--text-primary);
            border-color: var(--primary-color);
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--danger-color);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .user-profile:hover {
            border-color: var(--primary-color);
        }

        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
        }

        .user-info h4 {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .user-info p {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Main Content */
        .main-content {
            grid-area: main;
            padding: 2rem;
            overflow-y: auto;
        }

        .page-header {
            margin-bottom: 2rem;
        }

        .page-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .page-subtitle {
            color: var(--text-secondary);
        }

        /* Stats Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .stat-card.success::before { background: var(--gradient-success); }
        .stat-card.warning::before { background: var(--gradient-warning); }
        .stat-card.danger::before { background: var(--gradient-danger); }
        .stat-card.info::before { background: var(--gradient-info); }

        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
        }

        .stat-icon.primary { background: var(--gradient-primary); }
        .stat-icon.success { background: var(--gradient-success); }
        .stat-icon.warning { background: var(--gradient-warning); }
        .stat-icon.danger { background: var(--gradient-danger); }

        .stat-trend {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
        }

        .stat-trend.up {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .stat-trend.down {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        /* Chart Card */
        .chart-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .chart-period {
            display: flex;
            gap: 0.5rem;
        }

        .period-btn {
            padding: 0.5rem 1rem;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .period-btn.active,
        .period-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .chart-area {
            height: 300px;
            background: var(--bg-secondary);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
        }

        /* Fake Chart */
        .chart-bars {
            display: flex;
            align-items: end;
            justify-content: space-around;
            height: 100%;
            padding: 2rem 1rem 1rem;
        }

        .chart-bar {
            width: 20px;
            background: var(--gradient-primary);
            border-radius: 4px 4px 0 0;
            animation: chartGrow 1s ease-out;
            position: relative;
        }

        .chart-bar:nth-child(1) { height: 60%; animation-delay: 0.1s; }
        .chart-bar:nth-child(2) { height: 80%; animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { height: 45%; animation-delay: 0.3s; }
        .chart-bar:nth-child(4) { height: 90%; animation-delay: 0.4s; }
        .chart-bar:nth-child(5) { height: 70%; animation-delay: 0.5s; }
        .chart-bar:nth-child(6) { height: 85%; animation-delay: 0.6s; }
        .chart-bar:nth-child(7) { height: 65%; animation-delay: 0.7s; }

        @keyframes chartGrow {
            from { height: 0; }
        }

        /* Activity Card */
        .activity-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .activity-header {
            margin-bottom: 1.5rem;
        }

        .activity-list {
            list-style: none;
        }

        .activity-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
            border-bottom: none;
        }

        .activity-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: white;
        }

        .activity-icon.order { background: var(--gradient-primary); }
        .activity-icon.user { background: var(--gradient-success); }
        .activity-icon.product { background: var(--gradient-warning); }

        .activity-content {
            flex: 1;
        }

        .activity-text {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
        }

        .activity-time {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Orders Table */
        .orders-section {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .view-all-btn {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            text-shadow: 0 0 10px var(--primary-color);
        }

        .table-container {
            overflow-x: auto;
        }

        .orders-table {
            width: 100%;
            border-collapse: collapse;
        }

        .orders-table th,
        .orders-table td {
            text-align: left;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .orders-table th {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .orders-table td {
            color: var(--text-primary);
        }

        .order-id {
            font-family: 'JetBrains Mono', monospace;
            color: var(--primary-color);
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .customer-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .status-badge.completed {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .status-badge.pending {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
        }

        .status-badge.cancelled {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .amount {
            font-weight: 600;
            color: var(--success-color);
        }

        /* Products Grid */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .product-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-hover);
        }

        .product-image {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 12px;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .product-name {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-price {
            color: var(--success-color);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-sales {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .dashboard {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "header"
                    "main";
            }

            .sidebar {
                display: none;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .header {
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            }

            .search-input {
                width: 100%;
            }

            .main-content {
                padding: 1rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .table-container {
                font-size: 0.8rem;
            }

            .orders-table th,
            .orders-table td {
                padding: 0.5rem;
            }
        }

        /* Animations */
        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .slide-in {
            animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
  `.trim(),
  resources: [
    "https://developer.mozilla.org/ru/docs/Web/CSS/transition",
    "https://css-tricks.com/almanac/properties/t/transition/",
    "https://html5book.ru/css3-transition/",
  ],
};
