# Maison Noire

## Что это
Лендинг премиального парфюмерного бренда Maison Noire на React — темная палитра, золотые акценты, видео-фоны, анимации при скролле.

## Стек
- React 19
- TypeScript 5.9
- Vite 8
- CSS (один global.css, без модулей и styled-components)
- ESLint 9

## Архитектура
- Весь текстовый контент вынесен в `src/data/content.ts` — в компонентах нет хардкода строк
- Один `src/styles/global.css` с CSS-переменными в `:root` — никаких CSS-модулей и CSS-in-JS
- Хук `useReveal` управляет всеми scroll-reveal анимациями через IntersectionObserver
- Хук `useCarousel` инкапсулирует логику карусели (авто-переключение, свайпы, навигация)
- Видео подгружаются с Pexels; для каждого задан `fallbackGradient` на случай ошибки загрузки; ленивая загрузка через IntersectionObserver
- 10 компонентов в `src/components/`: Navbar, HeroCarousel, RitualSection, Testimonials, CollectionSection, ProcessSection, Footer, ScrollProgress, GoldParticles, SectionDivider
- SectionDivider — SVG-волны между секциями для плавных переходов цветов

## Что сделано
- [x] 7 основных секций: Navbar, HeroCarousel, RitualSection, Testimonials, CollectionSection, ProcessSection, Footer
- [x] ScrollProgress — золотая полоска прогресса скролла
- [x] GoldParticles — плавающие золотые частицы
- [x] SectionDivider — SVG-волны между секциями
- [x] Посимвольная анимация заголовков в Hero
- [x] Золотой shimmer на метках секций (background-clip: text)
- [x] Параллакс-эффект на фонах Process-секций
- [x] Clip-path reveal видео в Ritual
- [x] Виньетка на Hero и Process
- [x] Анимация заполнения точки карусели (8s таймер)
- [x] Направленные reveal-варианты: reveal-left, reveal-right, reveal-scale
- [x] Gradient-text "MAISON NOIRE" в футере
- [x] Номера шагов (01, 02, 03) в Process
- [x] Animated underline на активной ссылке навигации
- [x] Вертикальная линия с пульсацией на scroll-индикаторе
- [x] Hover-эффекты на карточках, кнопках, стрелках
- [x] Карусель: авто-переключение 8s, touch swipe, циклическая навигация
- [x] Видео с gradient-fallback и ленивой загрузкой
- [x] Адаптивная верстка (breakpoint 768px)
- [x] Accessibility: aria-labels, role="tablist", focus-visible, prefers-reduced-motion

## Что можно улучшить
- [ ] Интерактивный подбор аромата
- [ ] Модалка корзины с добавлением товаров
- [ ] Мобильное бургер-меню
- [ ] Реальные фото продуктов вместо градиентов
- [ ] Деплой на Vercel/Netlify
- [ ] Lighthouse оптимизация (lazy images, font-display swap)

## Команды
npm install / npm run dev / npm run build

## Важно
- CSS-переменные в :root в global.css
- Breakpoint один: 768px
- prefers-reduced-motion отключает все анимации
- Видео с Pexels могут не загружаться -- это нормально, есть fallback
