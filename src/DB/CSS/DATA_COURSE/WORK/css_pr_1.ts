export const css_pr_code_1 = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DesignCraft Studio</title>
    <style>
        /* Общие стили и сброс */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            line-height: 1.6;
            background-color: #f8f9fa;
        }

        img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: color 0.3s ease;
        }

        ul {
            list-style: none;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
            border-radius: 30px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 14px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            margin-top: 5px ;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            position: relative;
            color: #333;
            text-align: center;
        }

        .section-title::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            border-radius: 2px;
        }

        .text-center {
            text-align: center;
        }

        /* Шапка и навигация */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .header-scrolled {
            padding: 15px 0;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #333;
        }

        .logo span {
            color: #6e8efb;
        }

        .nav-menu {
            display: flex;
            gap: 30px;
        }

        .nav-link {
            font-weight: 500;
            position: relative;
            padding: 5px 0;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .nav-link:hover {
            color: #6e8efb;
        }

        .hamburger {
            display: none;
            cursor: pointer;
        }

        .bar {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px auto;
            background-color: #333;
            transition: all 0.3s ease;
            border-radius: 1px;
        }

        /* Секция Hero */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            color: white;
            display: flex;
            align-items: center;
            text-align: center;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .hero-title {
            font-size: 3.5rem;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
            font-weight: 300;
        }

        .hero-btns {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .btn-outline {
            background: transparent;
            border: 2px solid white;
        }

        .btn-outline:hover {
            background: white;
            color: #333;
        }

        .scroll-down {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0) translateX(-50%);
            }
            40% {
                transform: translateY(-30px) translateX(-50%);
            }
            60% {
                transform: translateY(-15px) translateX(-50%);
            }
        }

        /* О нас */
        .about {
            padding: 100px 0;
            background-color: white;
        }

        .about-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
            align-items: center;
        }

        .about-img {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .about-img img {
            transition: transform 0.5s ease;
        }

        .about-img:hover img {
            transform: scale(1.05);
        }

        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            position: relative;
        }

        .about-text h2::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            border-radius: 2px;
        }

        .about-text p {
            margin-bottom: 20px;
            color: #666;
            line-height: 1.8;
        }

        /* Услуги */
        .services {
            padding: 100px 0;
            background-color: #f8f9fa;
        }

        .services-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .service-box {
            background-color: white;
            padding: 40px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            text-align: center;
            position: relative;
            z-index: 1;
            overflow: hidden;
        }

        .service-box::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            transition: all 0.5s ease;
            z-index: -1;
            opacity: 0;
        }

        .service-box:hover::before {
            height: 100%;
            opacity: 1;
        }

        .service-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            color: white;
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #6e8efb;
            transition: all 0.3s ease;
        }

        .service-box:hover .service-icon {
            color: white;
        }

        .service-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }

        .service-description {
            color: #666;
            transition: all 0.3s ease;
        }

        .service-box:hover .service-description {
            color: rgba(255, 255, 255, 0.8);
        }

        /* Портфолио */
        .portfolio {
            padding: 100px 0;
            background-color: white;
        }

        .portfolio-filter {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 40px;
            gap: 10px;
        }

        .filter-btn {
            padding: 8px 20px;
            background-color: #f0f0f0;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .filter-btn:hover, .filter-btn.active {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
        }

        .portfolio-item {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .portfolio-img {
            transition: transform 0.5s ease;
        }

        .portfolio-item:hover .portfolio-img {
            transform: scale(1.1);
        }

        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(110, 142, 251, 0.8), rgba(167, 119, 227, 0.8));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
        }

        .portfolio-title {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 10px;
            transform: translateY(20px);
            transition: transform 0.5s ease;
        }

        .portfolio-category {
            color: rgba(255, 255, 255, 0.8);
            transform: translateY(20px);
            transition: transform 0.5s ease;
        }

        .portfolio-item:hover .portfolio-title,
        .portfolio-item:hover .portfolio-category {
            transform: translateY(0);
        }

        /* Команда */
        .team {
            padding: 100px 0;
            background-color: #f8f9fa;
        }

        .team-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .team-member {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .member-img-container {
            position: relative;
            overflow: hidden;
        }

        .member-img {
            transition: transform 0.5s ease;
        }

        .team-member:hover .member-img {
            transform: scale(1.1);
        }

        .member-social {
            position: absolute;
            bottom: -50px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 15px 0;
            background: linear-gradient(135deg, rgba(110, 142, 251, 0.9), rgba(167, 119, 227, 0.9));
            transition: bottom 0.5s ease;
        }

        .team-member:hover .member-social {
            bottom: 0;
        }

        .social-link {
            color: white;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }

        .social-link:hover {
            transform: translateY(-5px);
        }

        .member-info {
            padding: 20px;
            text-align: center;
        }

        .member-name {
            font-size: 1.3rem;
            margin-bottom: 5px;
        }

        .member-position {
            color: #6e8efb;
            font-style: italic;
            margin-bottom: 10px;
        }

        .member-bio {
            color: #666;
            font-size: 0.9rem;
        }

        /* Отзывы */
        .testimonials {
            padding: 100px 0;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            color: white;
        }

        .testimonials .section-title {
            color: white;
        }

        .testimonials-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 30px;
            padding: 20px 0;
            margin-top: 50px;
            scrollbar-width: none; /* Firefox */
        }

        .testimonials-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }

        .testimonial {
            min-width: 300px;
            flex: 0 0 calc(33.333% - 20px);
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 10px;
            scroll-snap-align: start;
            transition: all 0.3s ease;
        }

        .testimonial:hover {
            transform: translateY(-10px);
            background-color: rgba(255, 255, 255, 0.2);
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
        }

        .author-img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 15px;
            object-fit: cover;
        }

        .author-info h4 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .author-info p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        /* Контакты */
        .contact {
            padding: 100px 0;
            background-color: white;
        }

        .contact-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
            margin-top: 50px;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .contact-icon {
            font-size: 1.5rem;
            color: #6e8efb;
        }

        .contact-text h4 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .contact-text p {
            color: #666;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            position: relative;
        }

        .form-control {
            width: 100%;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            border-color: #6e8efb;
            outline: none;
            box-shadow: 0 0 0 3px rgba(110, 142, 251, 0.2);
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        /* Футер */
        footer {
            background-color: #222;
            color: white;
            padding: 50px 0 20px;
        }

        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }

        .footer-col h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-col h3::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .footer-link {
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.3s ease;
        }

        .footer-link:hover {
            color: white;
            transform: translateX(5px);
        }

        .footer-social {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            transform: translateY(-5px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        /* Адаптивность */
        @media (max-width: 992px) {
            .about-content {
                grid-template-columns: 1fr;
            }

            .contact-container {
                grid-template-columns: 1fr;
            }

            .testimonial {
                flex: 0 0 calc(50% - 20px);
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 15px 0;
            }

            .nav-menu {
                position: fixed;
                top: -100%;
                left: 0;
                width: 100%;
                background-color: white;
                flex-direction: column;
                text-align: center;
                padding: 30px 0;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transition: top 0.3s ease;
                z-index: 999;
                gap: 20px;
            }

            .nav-menu.active {
                top: 70px;
            }

            .hamburger {
                display: block;
            }

            .hamburger.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }

            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }

            .hamburger.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.2rem;
            }

            .hero-btns {
                flex-direction: column;
                gap: 15px;
            }

            .testimonial {
                flex: 0 0 calc(100% - 20px);
            }
        }

        @media (max-width: 576px) {
            .section-title {
                font-size: 2rem;
            }

            .about-text h2 {
                font-size: 2rem;
            }

            .portfolio-filter {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Шапка -->
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">Design<span>Craft</span></a>
                <ul class="nav-menu">
                    <li><a href="#" class="nav-link">Главная</a></li>
                    <li><a href="#about" class="nav-link">О нас</a></li>
                    <li><a href="#services" class="nav-link">Услуги</a></li>
                    <li><a href="#portfolio" class="nav-link">Портфолио</a></li>
                    <li><a href="#team" class="nav-link">Команда</a></li>
                    <li><a href="#contact" class="nav-link">Контакты</a></li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero секция -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Креативные решения для вашего бизнеса</h1>
                <p class="hero-subtitle">Мы создаем уникальные дизайны, которые помогают брендам выделяться</p>
                <div class="hero-btns">
                    <a href="#portfolio" class="btn">Наши работы</a>
                    <a href="#contact" class="btn btn-outline">Связаться с нами</a>
                </div>
            </div>
        </div>
        <a href="#about" class="scroll-down">↓</a>
    </section>

    <!-- О нас -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-img">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="О нашей компании">
                </div>
                <div class="about-text">
                    <h2>О нашей студии</h2>
                    <p>DesignCraft — это креативная студия, специализирующаяся на создании уникальных дизайнерских решений для бизнеса любого масштаба. Мы верим, что хороший дизайн должен не только привлекать внимание, но и решать конкретные бизнес-задачи.</p>
                    <p>Наша команда состоит из опытных дизайнеров, разработчиков и маркетологов, которые работают вместе, чтобы создавать проекты, превосходящие ожидания клиентов.</p>
                    <p>Мы гордимся нашим индивидуальным подходом к каждому проекту и стремимся к долгосрочному сотрудничеству с нашими клиентами.</p>
                    <a href="#services" class="btn">Наши услуги</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Услуги -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Наши услуги</h2>
            <p class="text-center">Мы предлагаем широкий спектр услуг для удовлетворения всех ваших потребностей в дизайне</p>
            <div class="services-container">
                <div class="service-box">
                    <div class="service-icon">✏️</div>
                    <h3 class="service-title">Графический дизайн</h3>
                    <p class="service-description">Создание логотипов, брендбуков, печатной продукции и других визуальных материалов для вашего бренда.</p>
                </div>
                <div class="service-box">
                    <div class="service-icon">💻</div>
                    <h3 class="service-title">Веб-дизайн</h3>
                    <p class="service-description">Разработка современных, адаптивных и удобных веб-сайтов, которые привлекают и удерживают посетителей.</p>
                </div>
                <div class="service-box">
                    <div class="service-icon">📱</div>
                    <h3 class="service-title">UI/UX дизайн</h3>
                    <p class="service-description">Создание интуитивно понятных и привлекательных интерфейсов для веб-сайтов и мобильных приложений.</p>
                </div>
                <div class="service-box">
                    <div class="service-icon">🎨</div>
                    <h3 class="service-title">Брендинг</h3>
                    <p class="service-description">Разработка уникальной айдентики, которая поможет вашему бренду выделиться среди конкурентов.</p>
                </div>
                <div class="service-box">
                    <div class="service-icon">📊</div>
                    <h3 class="service-title">Маркетинг</h3>
                    <p class="service-description">Разработка и реализация маркетинговых стратегий для продвижения вашего бренда в цифровой среде.</p>
                </div>
                <div class="service-box">
                    <div class="service-icon">🖼️</div>
                    <h3 class="service-title">Иллюстрации</h3>
                    <p class="service-description">Создание уникальных иллюстраций для вашего бренда, продуктов или контента.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Портфолио -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title">Наши работы</h2>
            <p class="text-center">Ознакомьтесь с нашими последними проектами</p>
            <div class="portfolio-filter">
                <div class="filter-btn active">Все</div>
                <div class="filter-btn">Веб-дизайн</div>
                <div class="filter-btn">Брендинг</div>
                <div class="filter-btn">Графический дизайн</div>
                <div class="filter-btn">UI/UX</div>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 1" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Редизайн сайта</h3>
                        <p class="portfolio-category">Веб-дизайн</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1600775508114-5c30cf911a40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 2" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Брендинг ресторана</h3>
                        <p class="portfolio-category">Брендинг</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 3" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Мобильное приложение</h3>
                        <p class="portfolio-category">UI/UX</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 4" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Рекламная кампания</h3>
                        <p class="portfolio-category">Графический дизайн</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 5" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Корпоративный сайт</h3>
                        <p class="portfolio-category">Веб-дизайн</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 6" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">Логотип компании</h3>
                        <p class="portfolio-category">Брендинг</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Команда -->
    <section id="team" class="team">
        <div class="container">
            <h2 class="section-title">Наша команда</h2>
            <p class="text-center">Познакомьтесь с талантливыми людьми, стоящими за нашими проектами</p>
            <div class="team-container">
                <div class="team-member">
                    <div class="member-img-container">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 1" class="member-img">
                        <div class="member-social">
                            <a href="#" class="social-link">FB</a>
                            <a href="#" class="social-link">TW</a>
                            <a href="#" class="social-link">IG</a>
                            <a href="#" class="social-link">LI</a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Алексей Петров</h3>
                        <p class="member-position">Креативный директор</p>
                        <p class="member-bio">Более 10 лет опыта в дизайне и руководстве креативными проектами.</p>
                    </div>
                </div>
                <div class="team-member">
                    <div class="member-img-container">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 2" class="member-img">
                        <div class="member-social">
                            <a href="#" class="social-link">FB</a>
                            <a href="#" class="social-link">TW</a>
                            <a href="#" class="social-link">IG</a>
                            <a href="#" class="social-link">LI</a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Мария Иванова</h3>
                        <p class="member-position">Ведущий дизайнер</p>
                        <p class="member-bio">Специалист по UI/UX дизайну с опытом работы в крупных проектах.</p>
                    </div>
                </div>
                <div class="team-member">
                    <div class="member-img-container">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 3" class="member-img">
                        <div class="member-social">
                            <a href="#" class="social-link">FB</a>
                            <a href="#" class="social-link">TW</a>
                            <a href="#" class="social-link">IG</a>
                            <a href="#" class="social-link">LI</a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Дмитрий Сидоров</h3>
                        <p class="member-position">Веб-разработчик</p>
                        <p class="member-bio">Опытный разработчик, специализирующийся на создании современных веб-приложений.</p>
                    </div>
                </div>
                <div class="team-member">
                    <div class="member-img-container">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 4" class="member-img">
                        <div class="member-social">
                            <a href="#" class="social-link">FB</a>
                            <a href="#" class="social-link">TW</a>
                            <a href="#" class="social-link">IG</a>
                            <a href="#" class="social-link">LI</a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Екатерина Смирнова</h3>
                        <p class="member-position">Маркетолог</p>
                        <p class="member-bio">Специалист по цифровому маркетингу с фокусом на стратегическое продвижение брендов.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Отзывы -->
    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">Отзывы клиентов</h2>
            <p class="text-center">Что говорят о нас наши клиенты</p>
            <div class="testimonials-container">
                <div class="testimonial">
                    <p class="testimonial-text">"DesignCraft превзошли все наши ожидания. Их команда не только создала потрясающий дизайн для нашего бренда, но и помогла нам лучше понять наших клиентов."</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 1" class="author-img">
                        <div class="author-info">
                            <h4>Иван Соколов</h4>
                            <p>CEO, TechStart</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial">
                    <p class="testimonial-text">"Работа с DesignCraft была одним из лучших решений для нашего бизнеса. Они создали для нас уникальный бренд, который помог нам выделиться на рынке."</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 2" class="author-img">
                        <div class="author-info">
                            <h4>Анна Козлова</h4>
                            <p>Основатель, GreenLife</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial">
                    <p class="testimonial-text">"Профессионализм и креативность команды DesignCraft впечатляют. Они не просто выполнили задачу, но и предложили инновационные решения, которые мы даже не рассматривали."</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 3" class="author-img">
                        <div class="author-info">
                            <h4>Сергей Новиков</h4>
                            <p>Маркетинг-директор, FoodMarket</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial">
                    <p class="testimonial-text">"Мы обратились к DesignCraft для редизайна нашего сайта, и результат превзошел все ожидания. Сайт стал не только красивее, но и значительно удобнее для пользователей."</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 4" class="author-img">
                        <div class="author-info">
                            <h4>Ольга Морозова</h4>
                            <p>Владелец, BeautyShop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Контакты -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Связаться с нами</h2>
            <p class="text-center">Готовы начать проект? Свяжитесь с нами!</p>
            <div class="contact-container">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div class="contact-text">
                            <h4>Адрес</h4>
                            <p>г. Москва, ул. Примерная, д. 123, офис 45</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div class="contact-text">
                            <h4>Телефон</h4>
                            <p>+7 (123) 456-78-90</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">✉️</div>
                        <div class="contact-text">
                            <h4>Email</h4>
                            <p>info@designcraft.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🕒</div>
                        <div class="contact-text">
                            <h4>Режим работы</h4>
                            <p>Пн-Пт: 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ваше имя">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Ваш email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Тема">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Ваше сообщение"></textarea>
                    </div>
                    <button type="button" class="btn">Отправить сообщение</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Футер -->
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <h3>DesignCraft</h3>
                    <p>Мы создаем уникальные дизайнерские решения, которые помогают брендам выделяться и достигать своих целей.</p>
                    <div class="footer-social">
                        <a href="#" class="social-icon">FB</a>
                        <a href="#" class="social-icon">TW</a>
                        <a href="#" class="social-icon">IG</a>
                        <a href="#" class="social-icon">LI</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Услуги</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Графический дизайн</a></li>
                        <li><a href="#" class="footer-link">Веб-дизайн</a></li>
                        <li><a href="#" class="footer-link">UI/UX дизайн</a></li>
                        <li><a href="#" class="footer-link">Брендинг</a></li>
                        <li><a href="#" class="footer-link">Маркетинг</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Компания</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">О нас</a></li>
                        <li><a href="#" class="footer-link">Команда</a></li>
                        <li><a href="#" class="footer-link">Карьера</a></li>
                        <li><a href="#" class="footer-link">Блог</a></li>
                        <li><a href="#" class="footer-link">Контакты</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Подписка</h3>
                    <p>Подпишитесь на нашу рассылку, чтобы получать новости и обновления.</p>
                    <form class="footer-form">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Ваш email">
                        </div>
                        <button type="button" class="btn">Подписаться</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 DesignCraft. Все права защищены.</p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

export const css_pr_1 = {
  id: "css_pr_1",
  title: "Практическая работа по CSS: Верстка Landing Page ",
  moduleId: "css",
  content: `
##  Сверстайте и оформите страницу Landing Page

Создайте **две файла**: \`index.html\` и \`style.css\`. Оформите страницу портфолио, используя все основные темы CSS из курса.

---

## Техническое задание

1. **Сверстайте структуру страницы** (как в HTML-практике — используйте header, nav, main, section, article, aside, footer).
2. **Подключите внешний CSS-файл** через \`<link>\`.


### Обязательные CSS-темы

- **Селекторы**: по тегу, классу, id, вложенные, групповые.
- **Цвета**: фоновые цвета, цвет текста (HEX, RGB, HSL).
- **Шрифты и текст**: font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-transform.
- **Отступы**: margin, padding, box-sizing.
- **Размеры**: width, height, min/max.
- **Границы и фон**: border, border-radius, background, background-image.
- **Изображения**: object-fit, адаптивность, alt, title.
- **Блочная модель**: display: block, inline, inline-block, none.
- **Позиционирование**: position (static, relative, absolute, fixed, sticky), top/right/bottom/left, z-index.
- **Flexbox**: flex-контейнеры, выравнивание, направление, порядок, обёртка.
- **Grid Layout**: сетки, колонки/ряды, размещение элементов.
- **Адаптивность**: медиазапросы для разных экранов, responsive images.
- **Переходы и трансформации**: transition, transform (scale, rotate, translate).

---

 ## Рекомендация:
 
 - **Используйте комментарии в CSS, чтобы пояснять сложные участки кода!**
- **Используй методологию БЭМ для имён классов.**
- **Разбей CSS по секциям и добавляй комментарии.**
- **Применяй переменные, чтобы стили были гибкими.**
- **Проверь адаптивность на разных экранах.**
- **Используй pixel perfect — сверяйся с макетом.**
- **Добавь hover-эффекты и transition для интерактива.**
- **Настрой шрифты, цвета, отступы — всё как в реальном проекте.**

---

## Примерная структура \`style.css\`:

\`\`\`css
/* Общие переменные */
:root {
  --main-color: #2f80ed;
  --bg-color: #f6f8fa;
  --font-main: 'Segoe UI', Arial, sans-serif;
}

/* Сброс стилей */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Основные стили для body, header, nav, main, section, footer и т.д. */

/* ... (остальное по заданиям) ... */
\`\`\`

---

## Цель

- Закрепить **все основные CSS-темы** на практике
- Использовать современные подходы к CSS

---

## Что присылать на проверку

- \`index.html\`
- \`style.css\`

---

> **Рекомендация**: Используйте комментарии в CSS, чтобы пояснять сложные участки кода!
  `.trim(),

  show: css_pr_code_1,
  postMentor: 2,
};
