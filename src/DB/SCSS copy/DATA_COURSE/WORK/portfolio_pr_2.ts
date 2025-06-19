export const portfolio_pr_2_code = `
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
`;

export const portfolio_pr_2 = {
  id: "portfolio_pr_2",
  title: "Практическая работа: Админ панель",
  moduleId: "portfolio",
  content: `
 ### Задание: Сверстать семантическую веб-страницу Админ панель
 
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

 `.trim(),

  show: portfolio_pr_2_code,
  postMentor: 2,
};
