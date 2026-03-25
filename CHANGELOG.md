# Changelog

## 2.0.0

Полная переработка визуальной части — добавлены анимации и эффекты.

### Добавлено

- Компонент `ScrollProgress` — золотая полоска прогресса скролла
- Компонент `GoldParticles` — плавающие золотые частицы
- Компонент `SectionDivider` — SVG-волны между секциями
- Посимвольная анимация заголовков в Hero-карусели
- Золотой shimmer на метках секций через `background-clip: text`
- Параллакс-эффект на фонах Process-секций
- Clip-path reveal видео в Ritual (раскрытие слева направо)
- Виньетка на Hero и Process (радиальный градиент по краям)
- Анимация заполнения активной точки карусели (8s таймер)
- Направленные reveal-варианты: `reveal-left`, `reveal-right`, `reveal-scale`
- Градиентный текст "MAISON NOIRE" в футере
- Номера шагов (01, 02, 03) в Process-секциях
- Animated underline на активной ссылке в навигации
- Вертикальная линия с пульсацией на scroll-индикаторе
- Усиленные hover-эффекты на карточках, кнопках и стрелках

### Исправлено

- Мобильная вёрстка: заголовки Hero переносятся корректно
- Логотип не обрезается на экранах 375px

## 1.0.0

Первая версия лендинга по спецификации.

### Реализовано

- 7 компонентов: Navbar, HeroCarousel, RitualSection, Testimonials, CollectionSection, ProcessSection, Footer
- Единый `global.css` с CSS-переменными
- `content.ts` — все тексты вынесены из компонентов
- Карусель: авто-переключение 8s, touch swipe, циклическая навигация
- Видео с gradient-fallback и ленивой загрузкой
- Scroll-reveal через IntersectionObserver
- Адаптив: breakpoint 768px
- Accessibility: aria-labels, role="tablist", focus-visible, prefers-reduced-motion
