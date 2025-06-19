export const portfolio_pr_1_code = `
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
`;

export const portfolio_pr_1 = {
  id: "portfolio_pr_1",
  title: "Практическая работа: Главнас страница портфолио",
  moduleId: "portfolio",
  content: `
 ### Задание: Сверстать семантическую веб-страницу Портфолио
 
 ---
 ## Техническое задание:
 
- Используйте методологию БЭМ для имён классов.  
- CSS разделите на логические блоки и снабдите комментариями.  
- Страница должна быть адаптивной: мобильная (<768px), планшет (768–1199px), десктоп (>=1200px).  
- Соблюдайте pixel perfect – сверяйтесь с макетом по отступам, цветам и шрифтам.  
- Шрифты, цвета и отступы задавайте с помощью CSS-переменных.  

---


 ## Рекомендация:

- **Уделите внимание семантике HTML:** корректные теги улучшают доступность и SEO-оптимизацию.  
- **Поддерживайте единообразный стиль кода:** используйте одинаковые отступы, следите за последовательностью написания селекторов.  
- **Организуйте CSS так, чтобы быстро находить нужные правила:** разделяйте по компонентам (Header, Footer, Forms и т.д.) и группируйте связанные свойства вместе.  
- **Проверяйте кроссбраузерность:** протестируйте сайт в разных браузерах (Chrome, Firefox, Edge) и на устройствах с разными разрешениями.  
- **Следите за производительностью:** избегайте избыточных вложенных селекторов, чтобы страница оставалась отзывчивой.  
- **Продумайте доступность:** убедитесь, что контраст текста и фона достаточен, а элементы формы имеют видимые фокусы для клавиатурной навигации.  

---
 `.trim(),

  show: portfolio_pr_1_code,
  postMentor: 2,
};
