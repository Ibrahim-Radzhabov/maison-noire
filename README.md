# Maison Noire — Haute Parfumerie

Лендинг премиального парфюмерного бренда. Тёмная палитра, золотые акценты, кинематографичные анимации.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

## Превью

Лендинг состоит из 7 секций:

- **Hero** — карусель на 3 слайда с видео-фонами, авто-переключение каждые 8 секунд
- **Ритуал** — split-layout: текст + видео с clip-path анимацией
- **Отзывы** — горизонтальный скролл с snap
- **Коллекция** — grid карточек с hover-эффектами
- **Процесс** — 3 fullscreen секции с параллаксом
- **Футер** — 4-колоночный grid + крупный лого

## Стек

| Технология | Зачем |
|-----------|-------|
| React 18 + TypeScript | Компоненты, строгая типизация |
| Vite | Сборка, HMR |
| Vanilla CSS | Единый `global.css`, CSS-переменные, никаких UI-библиотек |
| Google Fonts | Playfair Display + Inter |

Без Tailwind, без Bootstrap, без styled-components, без Framer Motion.

## Запуск

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Собрать продакшен
npm run build
```

Dev-сервер запустится на `http://localhost:5173`

## Структура

```
src/
  components/
    Navbar.tsx              # Фиксированная навигация с blur при скролле
    HeroCarousel.tsx        # Карусель с посимвольной анимацией заголовков
    RitualSection.tsx       # Split-layout с clip-path reveal видео
    Testimonials.tsx        # Горизонтальный скролл отзывов
    CollectionSection.tsx   # Grid карточек ароматов
    ProcessSection.tsx      # Fullscreen секции с параллаксом
    Footer.tsx              # Футер с анимацией лого
    ScrollProgress.tsx      # Полоска прогресса скролла
    GoldParticles.tsx       # Декоративные частицы
    SectionDivider.tsx      # SVG-волны между секциями
  data/
    content.ts              # Все тексты, URL видео, fallback-градиенты
  hooks/
    useReveal.ts            # IntersectionObserver для scroll-анимаций
    useCarousel.ts          # Логика карусели: таймер, навигация, touch swipe
  styles/
    global.css              # Единый файл стилей + дизайн-система
  App.tsx
  main.tsx
```

## Анимации

- Посимвольное появление заголовков Hero (каскадная задержка 0.04s)
- Золотой shimmer на метках секций (`background-clip: text`)
- Плавающие золотые частицы на тёмных фонах
- Параллакс на Process-секциях
- Clip-path reveal видео в Ritual
- Волновые SVG-разделители между секциями
- Scroll progress bar вверху страницы
- Виньетка на видео (радиальный градиент)
- Прогресс-заполнение активной точки карусели
- `reveal`, `reveal-left`, `reveal-right`, `reveal-scale` — разные направления появления

Все анимации отключаются при `prefers-reduced-motion: reduce`.

## Видео

Используются видео с Pexels (бесплатная лицензия). Каждое видео имеет CSS-градиент как fallback — если видео не загрузится, пользователь увидит градиент, а не чёрный экран.

Ленивая загрузка: видео за пределами viewport имеют `preload="none"`, загрузка начинается через IntersectionObserver за 200px до появления.

## Адаптивность

Единственный breakpoint: `768px`. На мобильном:
- Навигация скрывается (только лого + корзина)
- Карусель адаптируется под маленький экран
- Ritual переключается в колонку
- Collection — 1 карточка в ряд
- Частицы отключаются

## Лицензия

MIT
