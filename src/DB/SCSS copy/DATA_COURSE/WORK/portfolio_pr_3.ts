export const portfolio_pr_3_code = `
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
`;

export const portfolio_pr_3 = {
  id: "portfolio_pr_3",
  title: "Практическая работа: Доска задач",
  moduleId: "portfolio",
  content: `
 ### Задание: Сверстать семантическую веб-страницу Доска задач
 
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

  show: portfolio_pr_3_code,
  postMentor: 2,
};
