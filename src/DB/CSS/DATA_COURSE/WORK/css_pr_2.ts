export const css_pr_code_2 = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechVision | Цифровое агентство</title>
    <style>
        /* Основные стили и сброс */
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #10b981;
            --secondary-dark: #059669;
            --accent: #8b5cf6;
            --accent-dark: #7c3aed;
            --dark: #1e293b;
            --dark-light: #334155;
            --light: #f8fafc;
            --light-dark: #e2e8f0;
            --gray: #94a3b8;
            --danger: #ef4444;
            --warning: #f59e0b;
            --success: #10b981;
            --info: #3b82f6;
            
            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-md: 0 6px 10px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.1);
            
            --transition: all 0.3s ease;
            --transition-slow: all 0.5s ease;
            --transition-fast: all 0.2s ease;
            
            --radius-sm: 0.25rem;
            --radius: 0.5rem;
            --radius-md: 0.75rem;
            --radius-lg: 1rem;
            --radius-xl: 1.5rem;
            --radius-full: 9999px;
            
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
            --font-display: 'Poppins', var(--font-sans);
        }

        html {
            scroll-behavior: smooth;
            font-size: 16px;
        }

        body {
            font-family: var(--font-sans);
            color: var(--dark);
            line-height: 1.6;
            background-color: var(--light);
            overflow-x: hidden;
        }

        img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: var(--transition);
        }

        ul, ol {
            list-style: none;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-display);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 3.5rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        h3 {
            font-size: 2rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        h5 {
            font-size: 1.25rem;
        }

        h6 {
            font-size: 1rem;
        }

        p {
            margin-bottom: 1rem;
        }

        button, input, textarea, select {
            font-family: inherit;
            font-size: inherit;
        }

        button {
            cursor: pointer;
        }

        /* Утилиты */
        .container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .container-fluid {
            width: 100%;
            padding: 0 1.5rem;
        }

        .section {
            padding: 6rem 0;
        }

        .section-sm {
            padding: 3rem 0;
        }

        .section-lg {
            padding: 9rem 0;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .text-left {
            text-align: left;
        }

        .flex {
            display: flex;
        }

        .flex-col {
            flex-direction: column;
        }

        .items-center {
            align-items: center;
        }

        .items-start {
            align-items: flex-start;
        }

        .items-end {
            align-items: flex-end;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .justify-around {
            justify-content: space-around;
        }

        .justify-end {
            justify-content: flex-end;
        }

        .flex-wrap {
            flex-wrap: wrap;
        }

        .flex-1 {
            flex: 1;
        }

        .grid {
            display: grid;
        }

        .gap-1 {
            gap: 0.25rem;
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-5 {
            gap: 1.25rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-8 {
            gap: 2rem;
        }

        .gap-10 {
            gap: 2.5rem;
        }

        .gap-12 {
            gap: 3rem;
        }

        .gap-16 {
            gap: 4rem;
        }

        .mt-1 {
            margin-top: 0.25rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mt-3 {
            margin-top: 0.75rem;
        }

        .mt-4 {
            margin-top: 1rem;
        }

        .mt-5 {
            margin-top: 1.25rem;
        }

        .mt-6 {
            margin-top: 1.5rem;
        }

        .mt-8 {
            margin-top: 2rem;
        }

        .mt-10 {
            margin-top: 2.5rem;
        }

        .mt-12 {
            margin-top: 3rem;
        }

        .mt-16 {
            margin-top: 4rem;
        }

        .mb-1 {
            margin-bottom: 0.25rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-3 {
            margin-bottom: 0.75rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-5 {
            margin-bottom: 1.25rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .mb-8 {
            margin-bottom: 2rem;
        }

        .mb-10 {
            margin-bottom: 2.5rem;
        }

        .mb-12 {
            margin-bottom: 3rem;
        }

        .mb-16 {
            margin-bottom: 4rem;
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .fixed {
            position: fixed;
        }

        .sticky {
            position: sticky;
        }

        .top-0 {
            top: 0;
        }

        .left-0 {
            left: 0;
        }

        .right-0 {
            right: 0;
        }

        .bottom-0 {
            bottom: 0;
        }

        .z-10 {
            z-index: 10;
        }

        .z-20 {
            z-index: 20;
        }

        .z-30 {
            z-index: 30;
        }

        .z-40 {
            z-index: 40;
        }

        .z-50 {
            z-index: 50;
        }

        .hidden {
            display: none;
        }

        .block {
            display: block;
        }

        .inline-block {
            display: inline-block;
        }

        .overflow-hidden {
            overflow: hidden;
        }

        .rounded-sm {
            border-radius: var(--radius-sm);
        }

        .rounded {
            border-radius: var(--radius);
        }

        .rounded-md {
            border-radius: var(--radius-md);
        }

        .rounded-lg {
            border-radius: var(--radius-lg);
        }

        .rounded-xl {
            border-radius: var(--radius-xl);
        }

        .rounded-full {
            border-radius: var(--radius-full);
        }

        .shadow-sm {
            box-shadow: var(--shadow-sm);
        }

        .shadow {
            box-shadow: var(--shadow);
        }

        .shadow-md {
            box-shadow: var(--shadow-md);
        }

        .shadow-lg {
            box-shadow: var(--shadow-lg);
        }

        .shadow-xl {
            box-shadow: var(--shadow-xl);
        }

        .bg-primary {
            background-color: var(--primary);
        }

        .bg-secondary {
            background-color: var(--secondary);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .bg-dark {
            background-color: var(--dark);
        }

        .bg-light {
            background-color: var(--light);
        }

        .bg-light-dark {
            background-color: var(--light-dark);
        }

        .bg-gray {
            background-color: var(--gray);
        }

        .bg-danger {
            background-color: var(--danger);
        }

        .bg-warning {
            background-color: var(--warning);
        }

        .bg-success {
            background-color: var(--success);
        }

        .bg-info {
            background-color: var(--info);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-secondary {
            color: var(--secondary);
        }

        .text-accent {
            color: var(--accent);
        }

        .text-dark {
            color: var(--dark);
        }

        .text-light {
            color: var(--light);
        }

        .text-gray {
            color: var(--gray);
        }

        .text-danger {
            color: var(--danger);
        }

        .text-warning {
            color: var(--warning);
        }

        .text-success {
            color: var(--success);
        }

        .text-info {
            color: var(--info);
        }

        .font-bold {
            font-weight: 700;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-normal {
            font-weight: 400;
        }

        .font-light {
            font-weight: 300;
        }

        .text-xs {
            font-size: 0.75rem;
        }

        .text-sm {
            font-size: 0.875rem;
        }

        .text-base {
            font-size: 1rem;
        }

        .text-lg {
            font-size: 1.125rem;
        }

        .text-xl {
            font-size: 1.25rem;
        }

        .text-2xl {
            font-size: 1.5rem;
        }

        .text-3xl {
            font-size: 1.875rem;
        }

        .text-4xl {
            font-size: 2.25rem;
        }

        .text-5xl {
            font-size: 3rem;
        }

        .text-6xl {
            font-size: 3.75rem;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .capitalize {
            text-transform: capitalize;
        }

        .lowercase {
            text-transform: lowercase;
        }

        .leading-tight {
            line-height: 1.25;
        }

        .leading-normal {
            line-height: 1.5;
        }

        .leading-loose {
            line-height: 2;
        }

        .tracking-tight {
            letter-spacing: -0.025em;
        }

        .tracking-normal {
            letter-spacing: 0;
        }

        .tracking-wide {
            letter-spacing: 0.025em;
        }

        .tracking-wider {
            letter-spacing: 0.05em;
        }

        .tracking-widest {
            letter-spacing: 0.1em;
        }

        /* Компоненты */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius);
            font-weight: 600;
            transition: var(--transition);
            cursor: pointer;
            border: none;
            text-align: center;
        }

        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }

        .btn-lg {
            padding: 1rem 2rem;
            font-size: 1.125rem;
        }

        .btn-primary {
            background-color: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-secondary {
            background-color: var(--secondary);
            color: white;
        }

        .btn-secondary:hover {
            background-color: var(--secondary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-accent {
            background-color: var(--accent);
            color: white;
        }

        .btn-accent:hover {
            background-color: var(--accent-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-outline {
            background-color: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-outline-secondary {
            background-color: transparent;
            border: 2px solid var(--secondary);
            color: var(--secondary);
        }

        .btn-outline-secondary:hover {
            background-color: var(--secondary);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-outline-accent {
            background-color: transparent;
            border: 2px solid var(--accent);
            color: var(--accent);
        }

        .btn-outline-accent:hover {
            background-color: var(--accent);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-dark {
            background-color: var(--dark);
            color: white;
        }

        .btn-dark:hover {
            background-color: var(--dark-light);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-light {
            background-color: var(--light);
            color: var(--dark);
        }

        .btn-light:hover {
            background-color: var(--light-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .card {
            background-color: white;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: var(--transition);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }

        .card-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--light-dark);
        }

        .card-body {
            padding: 1.5rem;
        }

        .card-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--light-dark);
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius-full);
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .badge-primary {
            background-color: var(--primary);
            color: white;
        }

        .badge-secondary {
            background-color: var(--secondary);
            color: white;
        }

        .badge-accent {
            background-color: var(--accent);
            color: white;
        }

        .badge-dark {
            background-color: var(--dark);
            color: white;
        }

        .badge-light {
            background-color: var(--light-dark);
            color: var(--dark);
        }

        .badge-danger {
            background-color: var(--danger);
            color: white;
        }

        .badge-warning {
            background-color: var(--warning);
            color: white;
        }

        .badge-success {
            background-color: var(--success);
            color: white;
        }

        .badge-info {
            background-color: var(--info);
            color: white;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-control {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            line-height: 1.5;
            color: var(--dark);
            background-color: white;
            border: 1px solid var(--light-dark);
            border-radius: var(--radius);
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }

        .form-control::placeholder {
            color: var(--gray);
        }

        .form-text {
            display: block;
            margin-top: 0.25rem;
            font-size: 0.875rem;
            color: var(--gray);
        }

        .form-check {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .form-check-input {
            margin-right: 0.5rem;
        }

        .form-check-label {
            font-size: 0.875rem;
        }

        /* Навигация */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: var(--shadow);
            z-index: 1000;
            transition: var(--transition);
        }

        .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .navbar-brand {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark);
        }

        .navbar-brand span {
            color: var(--primary);
        }

        .navbar-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
            font-weight: 500;
            color: var(--dark);
            padding: 0.5rem 0;
            transition: var(--transition);
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .nav-link.active {
            color: var(--primary);
        }

        .dropdown {
            position: relative;
        }

        .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .dropdown-toggle::after {
            content: "▼";
            font-size: 0.75rem;
            transition: var(--transition);
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 200px;
            background-color: white;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            padding: 1rem 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: var(--transition);
            z-index: 100;
        }

        .dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown:hover .dropdown-toggle::after {
            transform: rotate(180deg);
        }

        .dropdown-item {
            display: block;
            padding: 0.5rem 1.5rem;
            color: var(--dark);
            transition: var(--transition);
        }

        .dropdown-item:hover {
            background-color: var(--light);
            color: var(--primary);
        }

        .navbar-toggler {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }

        .navbar-toggler-icon {
            display: block;
            width: 24px;
            height: 2px;
            background-color: var(--dark);
            position: relative;
            transition: var(--transition);
        }

        .navbar-toggler-icon::before,
        .navbar-toggler-icon::after {
            content: "";
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: var(--dark);
            transition: var(--transition);
        }

        .navbar-toggler-icon::before {
            top: -8px;
        }

        .navbar-toggler-icon::after {
            bottom: -8px;
        }

        .navbar-toggler.active .navbar-toggler-icon {
            background-color: transparent;
        }

        .navbar-toggler.active .navbar-toggler-icon::before {
            top: 0;
            transform: rotate(45deg);
        }

        .navbar-toggler.active .navbar-toggler-icon::after {
            bottom: 0;
            transform: rotate(-45deg);
        }

        /* Hero секция */
        .hero {
            position: relative;
            height: 100vh;
            min-height: 600px;
            display: flex;
            align-items: center;
            background-color: var(--light);
            overflow: hidden;
            padding-top: 80px;
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1));
            z-index: -1;
        }

        .hero-shape {
            position: absolute;
            bottom: -100px;
            right: -100px;
            width: 600px;
            height: 600px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 50%;
            opacity: 0.1;
            z-index: -1;
        }

        .hero-content {
            max-width: 600px;
        }

        .hero-title {
            font-size: 4rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: var(--dark);
        }

        .hero-title span {
            color: var(--primary);
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--gray);
            margin-bottom: 2rem;
        }

        .hero-btns {
            display: flex;
            gap: 1rem;
        }

        .hero-image {
            position: relative;
            z-index: 1;
        }

        .hero-image img {
            max-width: 100%;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
        }

        /* Особенности */
        .features {
            position: relative;
            background-color: white;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .feature-card {
            padding: 2rem;
            border-radius: var(--radius);
            background-color: white;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .feature-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            border-radius: var(--radius);
            background-color: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .feature-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .feature-description {
            color: var(--gray);
            margin-bottom: 1.5rem;
        }

        /* О нас */
        .about {
            position: relative;
            background-color: var(--light);
        }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
            align-items: center;
        }

        .about-content {
            max-width: 500px;
        }

        .about-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: var(--dark);
        }

        .about-title span {
            color: var(--primary);
        }

        .about-description {
            color: var(--gray);
            margin-bottom: 2rem;
        }

        .about-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--gray);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .about-image {
            position: relative;
        }

        .about-image img {
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
        }

        .about-image::before {
            content: "";
            position: absolute;
            top: -20px;
            left: -20px;
            width: 100%;
            height: 100%;
            border: 2px solid var(--primary);
            border-radius: var(--radius-lg);
            z-index: -1;
        }

        /* Услуги */
        .services {
            position: relative;
            background-color: white;
        }

        .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 4rem;
        }

        .section-subtitle {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1rem;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 1.5rem;
        }

        .section-description {
            color: var(--gray);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .service-card {
            padding: 2rem;
            border-radius: var(--radius);
            background-color: white;
            box-shadow: var(--shadow);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        .service-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            transition: var(--transition-slow);
            z-index: -1;
            opacity: 0;
        }

        .service-card:hover::before {
            height: 100%;
            opacity: 1;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .service-card:hover .service-icon,
        .service-card:hover .service-title,
        .service-card:hover .service-description {
            color: white;
        }

        .service-icon {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1.5rem;
            transition: var(--transition);
        }

        .service-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            transition: var(--transition);
        }

        .service-description {
            color: var(--gray);
            margin-bottom: 1.5rem;
            transition: var(--transition);
        }

        /* Портфолио */
        .portfolio {
            position: relative;
            background-color: var(--light);
        }

        .portfolio-filter {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .filter-btn {
            padding: 0.5rem 1.5rem;
            border-radius: var(--radius-full);
            background-color: white;
            color: var(--dark);
            font-weight: 500;
            transition: var(--transition);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
        }

        .filter-btn:hover, .filter-btn.active {
            background-color: var(--primary);
            color: white;
            box-shadow: var(--shadow);
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .portfolio-item {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .portfolio-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: var(--transition);
        }

        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(37, 99, 235, 0.9), rgba(139, 92, 246, 0.9));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            opacity: 0;
            transition: var(--transition);
        }

        .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
        }

        .portfolio-item:hover .portfolio-image {
            transform: scale(1.1);
        }

        .portfolio-category {
            font-size: 0.875rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1rem;
        }

        .portfolio-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .portfolio-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: white;
            color: var(--primary);
            font-size: 1.25rem;
            transition: var(--transition);
        }

        .portfolio-link:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-5px);
        }

        /* Процесс */
        .process {
            position: relative;
            background-color: white;
        }

        .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }

        .process-item {
            text-align: center;
            position: relative;
        }

        .process-item:not(:last-child)::after {
            content: "→";
            position: absolute;
            top: 50px;
            right: -20px;
            font-size: 2rem;
            color: var(--light-dark);
        }

        .process-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            font-size: 2.5rem;
            margin: 0 auto 1.5rem;
            position: relative;
        }

        .process-icon::before {
            content: attr(data-step);
            position: absolute;
            top: -10px;
            right: -10px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--primary);
            color: white;
            font-size: 0.875rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .process-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .process-description {
            color: var(--gray);
        }

        /* Команда */
        .team {
            position: relative;
            background-color: var(--light);
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }

        .team-member {
            background-color: white;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .team-member:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .team-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .team-info {
            padding: 1.5rem;
            text-align: center;
        }

        .team-name {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .team-position {
            font-size: 0.875rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .team-bio {
            color: var(--gray);
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .team-social {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--light);
            color: var(--dark);
            font-size: 1rem;
            transition: var(--transition);
        }

        .social-icon:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-5px);
        }

        /* Отзывы */
        .testimonials {
            position: relative;
            background-color: white;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .testimonial-card {
            padding: 2rem;
            border-radius: var(--radius);
            background-color: white;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .testimonial-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .testimonial-content {
            position: relative;
            padding: 1.5rem;
            background-color: var(--light);
            border-radius: var(--radius);
            margin-bottom: 2rem;
        }

        .testimonial-content::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 30px;
            width: 20px;
            height: 20px;
            background-color: var(--light);
            transform: rotate(45deg);
        }

        .testimonial-text {
            font-style: italic;
            color: var(--dark);
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .author-image {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }

        .author-info {
            flex: 1;
        }

        .author-name {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .author-position {
            font-size: 0.875rem;
            color: var(--gray);
        }

        .testimonial-rating {
            display: flex;
            gap: 0.25rem;
            margin-top: 0.5rem;
        }

        .rating-star {
            color: var(--warning);
            font-size: 1rem;
        }

        /* Цены */
        .pricing {
            position: relative;
            background-color: var(--light);
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .pricing-card {
            padding: 3rem 2rem;
            border-radius: var(--radius);
            background-color: white;
            box-shadow: var(--shadow);
            transition: var(--transition);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .pricing-card.popular {
            transform: scale(1.05);
            box-shadow: var(--shadow-lg);
            z-index: 1;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .pricing-card.popular:hover {
            transform: scale(1.05) translateY(-10px);
        }

        .popular-badge {
            position: absolute;
            top: 20px;
            right: -30px;
            background-color: var(--primary);
            color: white;
            padding: 0.5rem 3rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transform: rotate(45deg);
        }

        .pricing-header {
            margin-bottom: 2rem;
        }

        .pricing-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .pricing-price {
            font-size: 3rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .pricing-price span {
            font-size: 1rem;
            font-weight: 500;
            color: var(--gray);
        }

        .pricing-description {
            font-size: 0.875rem;
            color: var(--gray);
        }

        .pricing-features {
            margin-bottom: 2rem;
        }

        .feature-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
        }

        .feature-icon-check {
            color: var(--success);
        }

        .feature-icon-cross {
            color: var(--danger);
        }

        /* FAQ */
        .faq {
            position: relative;
            background-color: white;
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        .faq-item {
            border-bottom: 1px solid var(--light-dark);
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .faq-question {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .faq-question::after {
            content: "+";
            font-size: 1.5rem;
            color: var(--primary);
            transition: var(--transition);
        }

        .faq-question.active::after {
            content: "-";
            transform: rotate(180deg);
        }

        .faq-answer {
            color: var(--gray);
            max-height: 0;
            overflow: hidden;
            transition: var(--transition);
        }

        .faq-answer.active {
            max-height: 500px;
            margin-top: 1rem;
        }

        /* CTA */
        .cta {
            position: relative;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            border-radius: var(--radius-lg);
            overflow: hidden;
            margin: 6rem auto;
            max-width: 1200px;
        }

        .cta-shape {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            z-index: 0;
        }

        .cta-shape-2 {
            position: absolute;
            bottom: -100px;
            left: -100px;
            width: 300px;
            height: 300px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            z-index: 0;
        }

        .cta-content {
            position: relative;
            z-index: 1;
            padding: 4rem;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .cta-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .cta-description {
            font-size: 1.125rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .cta-form {
            display: flex;
            gap: 1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .cta-input {
            flex: 1;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-full);
            border: none;
            font-size: 1rem;
        }

        .cta-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }

        .cta-btn {
            background-color: var(--dark);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius-full);
            font-weight: 600;
            transition: var(--transition);
            border: none;
        }

        .cta-btn:hover {
            background-color: var(--dark-light);
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }

        /* Блог */
        .blog {
            position: relative;
            background-color: var(--light);
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .blog-card {
            background-color: white;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .blog-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .blog-content {
            padding: 1.5rem;
        }

        .blog-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .blog-date, .blog-author {
            font-size: 0.75rem;
            color: var(--gray);
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .blog-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.4;
        }

        .blog-title a {
            color: var(--dark);
            transition: var(--transition);
        }

        .blog-title a:hover {
            color: var(--primary);
        }

        .blog-excerpt {
            color: var(--gray);
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .blog-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary);
            font-weight: 600;
            transition: var(--transition);
        }

        .blog-link:hover {
            gap: 0.75rem;
        }

        /* Контакты */
        .contact {
            position: relative;
            background-color: white;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .contact-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            font-size: 1.25rem;
            flex-shrink: 0;
        }

        .contact-text h4 {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .contact-text p {
            color: var(--gray);
        }

        .contact-social {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .contact-form {
            background-color: white;
            border-radius: var(--radius);
            padding: 2rem;
            box-shadow: var(--shadow);
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-control {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            line-height: 1.5;
            color: var(--dark);
            background-color: var(--light);
            border: 1px solid var(--light-dark);
            border-radius: var(--radius);
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        /* Футер */
        .footer {
            background-color: var(--dark);
            color: white;
            padding: 5rem 0 0;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 4rem;
        }

        .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .footer-logo span {
            color: var(--primary);
        }

        .footer-description {
            color: var(--gray);
            margin-bottom: 1.5rem;
        }

        .footer-social {
            display: flex;
            gap: 1rem;
        }

        .footer-social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
            transition: var(--transition);
        }

        .footer-social-icon:hover {
            background-color: var(--primary);
            transform: translateY(-5px);
        }

        .footer-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: white;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .footer-link {
            color: var(--gray);
            transition: var(--transition);
        }

        .footer-link:hover {
            color: white;
            transform: translateX(5px);
        }

        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .footer-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .footer-contact-icon {
            color: var(--primary);
            font-size: 1.25rem;
            flex-shrink: 0;
        }

        .footer-contact-text {
            color: var(--gray);
        }

        .footer-newsletter {
            margin-top: 1.5rem;
        }

        .footer-form {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .footer-input {
            flex: 1;
            padding: 0.75rem 1rem;
            border-radius: var(--radius);
            border: none;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 0.875rem;
        }

        .footer-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
        }

        .footer-input::placeholder {
            color: var(--gray);
        }

        .footer-btn {
            background-color: var(--primary);
            color: white;
            padding: 0.75rem 1rem;
            border-radius: var(--radius);
            font-weight: 600;
            transition: var(--transition);
            border: none;
        }

        .footer-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5rem 0;
            text-align: center;
        }

        .footer-copyright {
            color: var(--gray);
            font-size: 0.875rem;
        }

        /* Адаптивность */
        @media (max-width: 1200px) {
            .container {
                max-width: 960px;
            }

            .hero-title {
                font-size: 3.5rem;
            }

            .features-grid,
            .services-grid,
            .portfolio-grid,
            .blog-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .team-grid {
                grid-template-columns: repeat(3, 1fr);
            }

            .process-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .process-item:nth-child(2)::after {
                display: none;
            }
        }

        @media (max-width: 992px) {
            .container {
                max-width: 720px;
            }

            .navbar-nav {
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: var(--shadow);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: var(--transition);
                z-index: 999;
            }

            .navbar-nav.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            .navbar-toggler {
                display: block;
            }

            .dropdown-menu {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                box-shadow: none;
                padding: 0;
                margin-top: 1rem;
                display: none;
            }

            .dropdown.active .dropdown-menu {
                display: block;
            }

            .dropdown-toggle::after {
                content: "+";
            }

            .dropdown.active .dropdown-toggle::after {
                content: "-";
            }

            .hero-content {
                text-align: center;
                margin: 0 auto;
            }

            .hero-btns {
                justify-content: center;
            }

            .hero-image {
                display: none;
            }

            .about-grid,
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }

            .about-content {
                max-width: 100%;
                text-align: center;
            }

            .about-title::after {
                left: 50%;
                transform: translateX(-50%);
            }

            .team-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .pricing-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .pricing-card.popular {
                grid-column: span 2;
                margin-bottom: 2rem;
            }

            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
            }
        }

        @media (max-width: 768px) {
            .container {
                max-width: 540px;
            }

            .hero-title {
                font-size: 3rem;
            }

            .features-grid,
            .services-grid,
            .portfolio-grid,
            .team-grid,
            .testimonials-grid,
            .pricing-grid,
            .blog-grid,
            .faq-grid {
                grid-template-columns: 1fr;
            }

            .process-grid {
                grid-template-columns: 1fr;
            }

            .process-item::after {
                display: none;
            }

            .cta-form {
                flex-direction: column;
            }

            .pricing-card.popular {
                grid-column: auto;
            }
        }

        @media (max-width: 576px) {
            .container {
                max-width: 100%;
                padding: 0 1rem;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .footer-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Навигация -->
    <header class="navbar">
        <div class="container">
            <div class="navbar-container">
                <a href="#" class="navbar-brand">Tech<span>Vision</span></a>
                <nav>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-link active">Главная</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">О нас</a></li>
                        <li class="nav-item dropdown">
                            <div class="dropdown-toggle nav-link">Услуги</div>
                            <ul class="dropdown-menu">
                                <li><a href="#" class="dropdown-item">Веб-разработка</a></li>
                                <li><a href="#" class="dropdown-item">Мобильные приложения</a></li>
                                <li><a href="#" class="dropdown-item">UI/UX дизайн</a></li>
                                <li><a href="#" class="dropdown-item">Цифровой маркетинг</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#portfolio" class="nav-link">Портфолио</a></li>
                        <li class="nav-item dropdown">
                            <div class="dropdown-toggle nav-link">Страницы</div>
                            <ul class="dropdown-menu">
                                <li><a href="#" class="dropdown-item">Команда</a></li>
                                <li><a href="#" class="dropdown-item">Цены</a></li>
                                <li><a href="#" class="dropdown-item">FAQ</a></li>
                                <li><a href="#" class="dropdown-item">Блог</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#contact" class="nav-link">Контакты</a></li>
                    </ul>
                </nav>
                <button class="navbar-toggler">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="#contact" class="btn btn-primary">Связаться с нами</a>
            </div>
        </div>
    </header>

    <!-- Hero секция -->
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-shape"></div>
        <div class="container">
            <div class="flex items-center gap-16">
                <div class="hero-content">
                    <h1 class="hero-title">Цифровые решения для <span>вашего бизнеса</span></h1>
                    <p class="hero-subtitle">Мы создаем инновационные цифровые продукты, которые помогают бизнесу расти и развиваться в современном мире.</p>
                    <div class="hero-btns">
                        <a href="#services" class="btn btn-primary">Наши услуги</a>
                        <a href="#portfolio" class="btn btn-outline">Портфолио</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Цифровые решения">
                </div>
            </div>
        </div>
    </section>

    <!-- Особенности -->
    <section id="features" class="features section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Почему мы</p>
                <h2 class="section-title">Наши преимущества</h2>
                <p class="section-description">Мы предлагаем комплексные решения для вашего бизнеса, которые помогут вам достичь новых высот.</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h3 class="feature-title">Инновационные решения</h3>
                    <p class="feature-description">Мы используем передовые технологии и инновационные подходы для создания уникальных продуктов.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💼</div>
                    <h3 class="feature-title">Опытная команда</h3>
                    <p class="feature-description">Наша команда состоит из опытных специалистов с многолетним опытом работы в индустрии.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Быстрая разработка</h3>
                    <p class="feature-description">Мы работаем быстро и эффективно, чтобы доставить ваш продукт в кратчайшие сроки.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h3 class="feature-title">Индивидуальный подход</h3>
                    <p class="feature-description">Мы разрабатываем индивидуальные решения, учитывая особенности и потребности вашего бизнеса.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3 class="feature-title">Аналитика и оптимизация</h3>
                    <p class="feature-description">Мы анализируем данные и оптимизируем процессы для достижения максимальной эффективности.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3 class="feature-title">Безопасность и надежность</h3>
                    <p class="feature-description">Мы обеспечиваем высокий уровень безопасности и надежности для всех наших продуктов.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
            </div>
        </div>
    </section>

    <!-- О нас -->
    <section id="about" class="about section">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <h2 class="about-title">Мы создаем <span>цифровое будущее</span></h2>
                    <p class="about-description">TechVision — это инновационное цифровое агентство, специализирующееся на разработке веб и мобильных приложений, UI/UX дизайне и цифровом маркетинге. Мы помогаем компаниям трансформировать их бизнес с помощью современных технологий.</p>
                    <p class="about-description">Наша миссия — создавать инновационные цифровые продукты, которые помогают бизнесу расти и развиваться в современном мире. Мы стремимся к совершенству во всем, что делаем, и всегда ставим интересы клиента на первое место.</p>
                    <div class="about-stats">
                        <div class="stat-item">
                            <div class="stat-value">10+</div>
                            <div class="stat-label">Лет опыта</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">250+</div>
                            <div class="stat-label">Проектов</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">50+</div>
                            <div class="stat-label">Специалистов</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">30+</div>
                            <div class="stat-label">Наград</div>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary mt-6">Связаться с нами</a>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="О нашей компании">
                </div>
            </div>
        </div>
    </section>

    <!-- Услуги -->
    <section id="services" class="services section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Что мы предлагаем</p>
                <h2 class="section-title">Наши услуги</h2>
                <p class="section-description">Мы предлагаем широкий спектр услуг для удовлетворения всех ваших потребностей в цифровой сфере.</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🌐</div>
                    <h3 class="service-title">Веб-разработка</h3>
                    <p class="service-description">Мы создаем современные, адаптивные и функциональные веб-сайты и веб-приложения, которые помогают бизнесу достигать своих целей.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3 class="service-title">Мобильные приложения</h3>
                    <p class="service-description">Мы разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android, которые обеспечивают отличный пользовательский опыт.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <h3 class="service-title">UI/UX дизайн</h3>
                    <p class="service-description">Мы создаем интуитивно понятные и привлекательные интерфейсы, которые обеспечивают отличный пользовательский опыт и повышают конверсию.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3 class="service-title">Цифровой маркетинг</h3>
                    <p class="service-description">Мы помогаем бизнесу привлекать новых клиентов и увеличивать продажи с помощью эффективных стратегий цифрового маркетинга.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔍</div>
                    <h3 class="service-title">SEO оптимизация</h3>
                    <p class="service-description">Мы помогаем бизнесу повысить видимость в поисковых системах и привлечь больше органического трафика на сайт.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛒</div>
                    <h3 class="service-title">Электронная коммерция</h3>
                    <p class="service-description">Мы создаем эффективные решения для электронной коммерции, которые помогают бизнесу увеличить продажи и улучшить пользовательский опыт.</p>
                    <a href="#" class="btn btn-sm btn-outline">Подробнее</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Портфолио -->
    <section id="portfolio" class="portfolio section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Наши работы</p>
                <h2 class="section-title">Последние проекты</h2>
                <p class="section-description">Ознакомьтесь с нашими последними проектами, которые мы успешно реализовали для наших клиентов.</p>
            </div>
            <div class="portfolio-filter">
                <div class="filter-btn active">Все</div>
                <div class="filter-btn">Веб-разработка</div>
                <div class="filter-btn">Мобильные приложения</div>
                <div class="filter-btn">UI/UX дизайн</div>
                <div class="filter-btn">Цифровой маркетинг</div>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 1" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">Веб-разработка</div>
                        <h3 class="portfolio-title">Корпоративный сайт для IT компании</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 2" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">Мобильные приложения</div>
                        <h3 class="portfolio-title">Приложение для доставки еды</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 3" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">UI/UX дизайн</div>
                        <h3 class="portfolio-title">Редизайн интерфейса банковского приложения</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 4" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">Цифровой маркетинг</div>
                        <h3 class="portfolio-title">Маркетинговая кампания для стартапа</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 5" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">Веб-разработка</div>
                        <h3 class="portfolio-title">Интернет-магазин модной одежды</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Проект 6" class="portfolio-image">
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">Мобильные приложения</div>
                        <h3 class="portfolio-title">Фитнес-приложение с персональным тренером</h3>
                        <a href="#" class="portfolio-link">→</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Процесс -->
    <section id="process" class="process section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Как мы работаем</p>
                <h2 class="section-title">Наш процесс</h2>
                <p class="section-description">Мы следуем структурированному процессу, который обеспечивает эффективную работу и отличные результаты.</p>
            </div>
            <div class="process-grid">
                <div class="process-item">
                    <div class="process-icon" data-step="1">📋</div>
                    <h3 class="process-title">Анализ и планирование</h3>
                    <p class="process-description">Мы анализируем ваши потребности и цели, а затем разрабатываем детальный план проекта.</p>
                </div>
                <div class="process-item">
                    <div class="process-icon" data-step="2">🎨</div>
                    <h3 class="process-title">Дизайн и прототипирование</h3>
                    <p class="process-description">Мы создаем прототипы и дизайн-макеты, которые визуализируют будущий продукт.</p>
                </div>
                <div class="process-item">
                    <div class="process-icon" data-step="3">💻</div>
                    <h3 class="process-title">Разработка</h3>
                    <p class="process-description">Наша команда разработчиков превращает дизайн в функциональный продукт.</p>
                </div>
                <div class="process-item">
                    <div class="process-icon" data-step="4">🚀</div>
                    <h3 class="process-title">Запуск и поддержка</h3>
                    <p class="process-description">Мы запускаем продукт и обеспечиваем его дальнейшую поддержку и развитие.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Команда -->
    <section id="team" class="team section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Наши эксперты</p>
                <h2 class="section-title">Познакомьтесь с нашей командой</h2>
                <p class="section-description">Наша команда состоит из опытных профессионалов, которые стремятся к совершенству во всем, что делают.</p>
            </div>
            <div class="team-grid">
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 1" class="team-image">
                    <div class="team-info">
                        <h3 class="team-name">Алексей Петров</h3>
                        <p class="team-position">CEO & Founder</p>
                        <p class="team-bio">Более 15 лет опыта в IT индустрии. Эксперт в области цифровой трансформации бизнеса.</p>
                        <div class="team-social">
                            <a href="#" class="social-icon">FB</a>
                            <a href="#" class="social-icon">TW</a>
                            <a href="#" class="social-icon">IN</a>
                        </div>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 2" class="team-image">
                    <div class="team-info">
                        <h3 class="team-name">Мария Иванова</h3>
                        <p class="team-position">CTO</p>
                        <p class="team-bio">Опытный технический директор с глубокими знаниями в области веб и мобильной разработки.</p>
                        <div class="team-social">
                            <a href="#" class="social-icon">FB</a>
                            <a href="#" class="social-icon">TW</a>
                            <a href="#" class="social-icon">IN</a>
                        </div>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 3" class="team-image">
                    <div class="team-info">
                        <h3 class="team-name">Дмитрий Сидоров</h3>
                        <p class="team-position">Lead Developer</p>
                        <p class="team-bio">Ведущий разработчик с опытом создания сложных веб-приложений и микросервисных архитектур.</p>
                        <div class="team-social">
                            <a href="#" class="social-icon">FB</a>
                            <a href="#" class="social-icon">TW</a>
                            <a href="#" class="social-icon">IN</a>
                        </div>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Член команды 4" class="team-image">
                    <div class="team-info">
                        <h3 class="team-name">Екатерина Смирнова</h3>
                        <p class="team-position">UI/UX Designer</p>
                        <p class="team-bio">Талантливый дизайнер с опытом создания интуитивно понятных и привлекательных интерфейсов.</p>
                        <div class="team-social">
                            <a href="#" class="social-icon">FB</a>
                            <a href="#" class="social-icon">TW</a>
                            <a href="#" class="social-icon">IN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Отзывы -->
    <section id="testimonials" class="testimonials section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Отзывы клиентов</p>
                <h2 class="section-title">Что говорят о нас</h2>
                <p class="section-description">Мы гордимся отзывами наших клиентов, которые подтверждают качество нашей работы.</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"TechVision превзошли все наши ожидания. Они не только создали потрясающий сайт для нашей компании, но и помогли нам увеличить конверсию на 40%. Настоящие профессионалы своего дела!"</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 1" class="author-image">
                        <div class="author-info">
                            <h4 class="author-name">Иван Соколов</h4>
                            <p class="author-position">CEO, TechStart</p>
                            <div class="testimonial-rating">
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"Мы обратились к TechVision для разработки мобильного приложения для нашего бизнеса. Результат превзошел все ожидания! Приложение не только выглядит отлично, но и работает безупречно."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 2" class="author-image">
                        <div class="author-info">
                            <h4 class="author-name">Анна Козлова</h4>
                            <p class="author-position">Founder, GreenLife</p>
                            <div class="testimonial-rating">
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"Сотрудничество с TechVision было одним из лучших решений для нашего бизнеса. Их команда не только создала отличный сайт, но и помогла нам с цифровым маркетингом, что привело к значительному росту продаж."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Автор отзыва 3" class="author-image">
                        <div class="author-info">
                            <h4 class="author-name">Сергей Новиков</h4>
                            <p class="author-position">Marketing Director, FoodMarket</p>
                            <div class="testimonial-rating">
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                                <span class="rating-star">★</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Цены -->
    <section id="pricing" class="pricing section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Наши тарифы</p>
                <h2 class="section-title">Выберите подходящий план</h2>
                <p class="section-description">Мы предлагаем гибкие тарифные планы, которые подойдут для бизнеса любого масштаба.</p>
            </div>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Базовый</h3>
                        <div class="pricing-price">₽25,000<span>/мес</span></div>
                        <p class="pricing-description">Идеально для малого бизнеса и стартапов</p>
                    </div>
                    <ul class="pricing-features">
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Веб-сайт (до 5 страниц)</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Базовый SEO</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Адаптивный дизайн</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Контактная форма</li>
                        <li class="feature-item"><span class="feature-icon-cross">✗</span> Интеграция с CRM</li>
                        <li class="feature-item"><span class="feature-icon-cross">✗</span> Онлайн-платежи</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline">Выбрать план</a>
                </div>
                <div class="pricing-card popular">
                    <div class="popular-badge">Популярный</div>
                    <div class="pricing-header">
                        <h3 class="pricing-title">Стандарт</h3>
                        <div class="pricing-price">₽50,000<span>/мес</span></div>
                        <p class="pricing-description">Оптимальное решение для растущего бизнеса</p>
                    </div>
                    <ul class="pricing-features">
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Веб-сайт (до 15 страниц)</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Расширенный SEO</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Адаптивный дизайн</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Контактная форма</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Интеграция с CRM</li>
                        <li class="feature-item"><span class="feature-icon-cross">✗</span> Онлайн-платежи</li>
                    </ul>
                    <a href="#contact" class="btn btn-primary">Выбрать план</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Премиум</h3>
                        <div class="pricing-price">₽100,000<span>/мес</span></div>
                        <p class="pricing-description">Комплексное решение для крупного бизнеса</p>
                    </div>
                    <ul class="pricing-features">
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Веб-сайт (неограниченное количество страниц)</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Премиум SEO</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Адаптивный дизайн</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Контактная форма</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Интеграция с CRM</li>
                        <li class="feature-item"><span class="feature-icon-check">✓</span> Онлайн-платежи</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline">Выбрать план</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Часто задаваемые вопросы</p>
                <h2 class="section-title">У вас есть вопросы?</h2>
                <p class="section-description">Мы собрали ответы на самые распространенные вопросы о наших услугах.</p>
            </div>
            <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">Сколько времени занимает разработка веб-сайта?</div>
                    <div class="faq-answer">Время разработки веб-сайта зависит от его сложности и объема работ. Простой сайт может быть готов за 2-3 недели, в то время как более сложные проекты могут занять 2-3 месяца. Мы всегда обсуждаем сроки с клиентом на этапе планирования проекта.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Какие технологии вы используете для разработки?</div>
                    <div class="faq-answer">Мы используем современные технологии и фреймворки, такие как React, Angular, Vue.js для фронтенда, и Node.js, Python, PHP для бэкенда. Выбор технологий зависит от требований проекта и предпочтений клиента.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Предоставляете ли вы поддержку после запуска проекта?</div>
                    <div class="faq-answer">Да, мы предоставляем техническую поддержку и обслуживание для всех наших проектов. Мы также предлагаем различные пакеты поддержки, которые включают регулярные обновления, мониторинг безопасности и оптимизацию производительности.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Как происходит процесс оплаты?</div>
                    <div class="faq-answer">Мы обычно работаем по предоплате 50% от стоимости проекта, а оставшиеся 50% оплачиваются после завершения проекта. Для крупных проектов мы можем предложить гибкую систему оплаты с несколькими промежуточными платежами.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Можете ли вы помочь с хостингом и доменом?</div>
                    <div class="faq-answer">Да, мы предоставляем услуги по регистрации доменов и настройке хостинга. Мы также можем порекомендовать надежные хостинг-провайдеры, которые подойдут для вашего проекта.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Как начать работу с вами?</div>
                    <div class="faq-answer">Чтобы начать работу с нами, просто свяжитесь с нами через форму на сайте или по телефону. Мы организуем встречу (онлайн или офлайн), чтобы обсудить ваш проект и предложить оптимальное решение.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta">
        <div class="cta-shape"></div>
        <div class="cta-shape-2"></div>
        <div class="cta-content">
            <h2 class="cta-title">Готовы начать свой проект?</h2>
            <p class="cta-description">Свяжитесь с нами сегодня, и мы поможем вам реализовать ваши идеи!</p>
            <form class="cta-form">
                <input type="email" class="cta-input" placeholder="Введите ваш email">
                <button type="button" class="cta-btn">Связаться с нами</button>
            </form>
        </div>
    </section>

    <!-- Блог -->
    <section id="blog" class="blog section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Наш блог</p>
                <h2 class="section-title">Последние статьи</h2>
                <p class="section-description">Читайте наши статьи о последних тенденциях в мире технологий и цифрового маркетинга.</p>
            </div>
            <div class="blog-grid">
                <div class="blog-card">
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Статья 1" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <div class="blog-date">📅 15 мая 2025</div>
                            <div class="blog-author">👤 Алексей Петров</div>
                        </div>
                        <h3 class="blog-title"><a href="#">10 трендов веб-дизайна, которые будут популярны в 2025 году</a></h3>
                        <p class="blog-excerpt">Узнайте о последних тенденциях в веб-дизайне, которые помогут вашему сайту выделиться среди конкурентов и привлечь больше посетителей.</p>
                        <a href="#" class="blog-link">Читать далее →</a>
                    </div>
                </div>
                <div class="blog-card">
                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Статья 2" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <div class="blog-date">📅 10 мая 2025</div>
                            <div class="blog-author">👤 Мария Иванова</div>
                        </div>
                        <h3 class="blog-title"><a href="#">Как искусственный интеллект меняет мир цифрового маркетинга</a></h3>
                        <p class="blog-excerpt">Искусственный интеллект становится все более важным инструментом в цифровом маркетинге. Узнайте, как использовать его для роста вашего бизнеса.</p>
                        <a href="#" class="blog-link">Читать далее →</a>
                    </div>
                </div>
                <div class="blog-card">
                    <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Статья 3" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <div class="blog-date">📅 5 мая 2025</div>
                            <div class="blog-author">👤 Дмитрий Сидоров</div>
                        </div>
                        <h3 class="blog-title"><a href="#">5 ключевых принципов создания успешного мобильного приложения</a></h3>
                        <p class="blog-excerpt">Создание успешного мобильного приложения требует тщательного планирования и внимания к деталям. Узнайте о ключевых принципах, которые помогут вам создать приложение, которое полюбят пользователи.</p>
                        <a href="#" class="blog-link">Читать далее →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Контакты -->
    <section id="contact" class="contact section">
        <div class="container">
            <div class="section-header">
                <p class="section-subtitle">Связаться с нами</p>
                <h2 class="section-title">Давайте обсудим ваш проект</h2>
                <p class="section-description">Свяжитесь с нами, и мы поможем вам реализовать ваши идеи!</p>
            </div>
            <div class="contact-grid">
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
                            <p>info@techvision.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🕒</div>
                        <div class="contact-text">
                            <h4>Режим работы</h4>
                            <p>Пн-Пт: 9:00 - 18:00</p>
                        </div>
                    </div>
                    <div class="contact-social">
                        <a href="#" class="social-icon">FB</a>
                        <a href="#" class="social-icon">TW</a>
                        <a href="#" class="social-icon">IN</a>
                        <a href="#" class="social-icon">IG</a>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name" class="form-label">Имя</label>
                                <input type="text" id="name" class="form-control" placeholder="Введите ваше имя">
                            </div>
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Введите ваш email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="subject" class="form-label">Тема</label>
                            <input type="text" id="subject" class="form-control" placeholder="Введите тему сообщения">
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-label">Сообщение</label>
                            <textarea id="message" class="form-control" placeholder="Введите ваше сообщение"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary">Отправить сообщение</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">Tech<span>Vision</span></div>
                    <p class="footer-description">Мы создаем инновационные цифровые продукты, которые помогают бизнесу расти и развиваться в современном мире.</p>
                    <div class="footer-social">
                        <a href="#" class="footer-social-icon">FB</a>
                        <a href="#" class="footer-social-icon">TW</a>
                        <a href="#" class="footer-social-icon">IN</a>
                        <a href="#" class="footer-social-icon">IG</a>
                    </div>
                </div>
                <div>
                    <h3 class="footer-title">Услуги</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Веб-разработка</a></li>
                        <li><a href="#" class="footer-link">Мобильные приложения</a></li>
                        <li><a href="#" class="footer-link">UI/UX дизайн</a></li>
                        <li><a href="#" class="footer-link">Цифровой маркетинг</a></li>
                        <li><a href="#" class="footer-link">SEO оптимизация</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">Компания</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">О нас</a></li>
                        <li><a href="#" class="footer-link">Команда</a></li>
                        <li><a href="#" class="footer-link">Карьера</a></li>
                        <li><a href="#" class="footer-link">Блог</a></li>
                        <li><a href="#" class="footer-link">Контакты</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">Контакты</h3>
                    <div class="footer-contact">
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">📍</div>
                            <div class="footer-contact-text">г. Москва, ул. Примерная, д. 123, офис 45</div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">📞</div>
                            <div class="footer-contact-text">+7 (123) 456-78-90</div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">✉️</div>
                            <div class="footer-contact-text">info@techvision.com</div>
                        </div>
                    </div>
                    <div class="footer-newsletter">
                        <h4 class="footer-title">Подписка на новости</h4>
                        <form class="footer-form">
                            <input type="email" class="footer-input" placeholder="Введите ваш email">
                            <button type="button" class="footer-btn">→</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">© 2025 TechVision. Все права защищены.</p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

export const css_pr_2 = {
  id: "css_pr_2",
  title: "Практическая работа: Современный лендинг для digital-агентства",
  moduleId: "css",
  content: `
##  Сверстайте и оформите лендинг TechVision

Создайте **два файла**: \`index.html\` и \`style.css\`. Ваша задача — сверстать и оформить адаптивную многостраничную промо-страницу для digital-агентства TechVision, используя все ключевые темы курса по CSS.

---


### Требования к CSS (использовать обязательно):

- **Селекторы**: теговые, классовые, id, комбинированные, вложенные, групповые.
- **Переменные**: цветовые и типографические (через :root).
- **Цвета**: HEX, RGB или HSL для текста, фона и акцентов.
- **Шрифты и текст**: font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-transform.
- **Отступы**: margin, padding, box-sizing.
- **Размеры**: width, height, min/max, responsive единицы (%, rem, vw, clamp).
- **Границы и фон**: border, border-radius, background, background-image, box-shadow.
- **Изображения**: object-fit, адаптивность, alt, title.
- **Блочная модель**: display: block, inline, inline-block, none.
- **Позиционирование**: position (static, relative, absolute, fixed, sticky), top/right/bottom/left, z-index.
- **Flexbox**: flex-контейнеры и выравнивание (justify-content, align-items, gap), направление, flex-wrap, порядок, align-self.
- **Grid Layout**: grid-контейнеры, колонки/ряды, gap, grid-area, auto-fit/auto-fill.
- **Адаптивность**: медиазапросы (\`@media\`), адаптивные размеры и изображения.
- **Переходы и трансформации**: transition, transform (scale, rotate, translate).
- **Современные приёмы**: псевдоклассы (:hover, :focus, :nth-child), псевдоэлементы (::before, ::after).
- **Комментарии в CSS** для сложных мест.

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



## Цели

- Закрепить все темы CSS на практике и собрать крутой лендинг в портфолио
- Показать умение делать адаптивные интерфейсы и современные эффекты
- Применить flex/grid, переменные, transition/transform и медиазапросы в одном проекте

---

## Что отправлять на проверку

- \`index.html\`
- \`style.css\`


  `.trim(),

  show: css_pr_code_2,
  postMentor: 2,
};
