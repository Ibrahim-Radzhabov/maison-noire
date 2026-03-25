# Maison Noire — Changelog

## v2.0 — Visual & Animation Overhaul

### Новые компоненты

| Файл | Назначение |
|------|-----------|
| `ScrollProgress.tsx` | Золотая полоска прогресса скролла вверху страницы |
| `GoldParticles.tsx` | Плавающие золотые частицы на тёмных секциях |
| `SectionDivider.tsx` | SVG-волны с золотой линией между секциями |

### Новые анимации

| # | Эффект | Механизм | Где |
|---|--------|----------|-----|
| 1 | Scroll Progress Bar | JS `scrollY / docHeight` + CSS `scaleX` | Фиксирован вверху страницы |
| 2 | Посимвольный reveal заголовков | `SplitHeadline` + CSS `translateY(100%) -> 0` с каскадной задержкой 0.04s/символ | Hero Carousel |
| 3 | Gold shimmer на метках | `background-clip: text` + `@keyframes label-shimmer-move` 3s infinite | Все метки секций |
| 4 | Золотые частицы | `@keyframes particle-float` с рандомным drift/duration/delay | Hero, Process (x3) |
| 5 | Параллакс фона | JS scroll listener, `translateY(±40px)` на `.process-bg` | Process (x3) |
| 6 | Виньетка | `radial-gradient(ellipse, transparent 30-40%, rgba(0,0,0,0.4-0.5))` на `::after` | Hero overlay, Process overlay |
| 7 | Clip-path reveal видео | `clip-path: inset(0 100% 0 0) -> inset(0)` через IntersectionObserver | Ritual Section |
| 8 | Направленные reveal | `.reveal-left` (translateX -60px), `.reveal-right` (+60px), `.reveal-scale` (scale 0.85) | Ritual текст, Collection cards |
| 9 | SVG-волны между секциями | SVG path + `stroke-dashoffset` анимация при reveal | Hero/Ritual, Ritual/Testimonials, Collection/Process, Process/Footer |
| 10 | Прогресс-заполнение точки | `::after` с `@keyframes dot-fill 8s linear` | Carousel dots |
| 11 | Градиентный текст footer | `linear-gradient(180deg, #FFF, rgba(255,255,255,0.6))` + `background-clip: text` | Footer brand title |
| 12 | Animated nav underline | `@keyframes nav-underline` от центра к краям | Navbar active link |
| 13 | Scroll indicator line | `::before` с пульсирующей золотой вертикальной линией | Hero scroll indicator |
| 14 | Номера шагов Process | Playfair 120px, gold, opacity 0.05, absolute bottom-right | Process (01, 02, 03) |

### Усиленные hover-эффекты

| Элемент | Было | Стало |
|---------|------|-------|
| Стрелки карусели | `border-color: rgba(255,255,255,0.3)` | + gold border + gold glow + gold tint bg |
| Карточки коллекции | `translateY(-5px)` | + shimmer-полоса по визуальной зоне + `scale(1.05)` + `brightness(1.15)` |
| Карточки отзывов | `translateY(-5px)` | + `translateY(-8px)` + gold gradient overlay + `box-shadow: 0 20px 50px` |
| CTA glass | `background: rgba(gold, 0.25)` | + `box-shadow: 0 0 60px` glow |
| Footer contact | `background: rgba(gold, 0.2)` | + `translateY(-2px)` + glow |
| Footer links | `color: white` | + `padding-left: 8px` сдвиг |
| Ritual CTA | `gap: 14px` | + `color: #F5E6A3` светло-золотой |

### Обновлённый useReveal.ts

Теперь обрабатывает все типы reveal-классов:
- `.reveal` (translateY)
- `.reveal-left` (translateX отрицательный)
- `.reveal-right` (translateX положительный)
- `.reveal-scale` (scale)
- `.reveal-clip` (clip-path)
- `.section-divider` (stroke-dashoffset)

### Адаптивность

- Частицы скрыты на мобильном (`display: none` при <=768px)
- Clip-path reveal отключён на мобильном для Ritual видео
- Номера шагов: 80px / bottom-right: 24px на мобильном
- Волновые разделители: высота 30px на мобильном (60px desktop)
- Логотип: 22px на мобильном (28px desktop)
- Hero headline: 32px на мобильном (clamp 48-96px desktop)

### Accessibility

- Все новые декоративные элементы имеют `aria-hidden="true"`
- `pointer-events: none` на частицах и разделителях
- `prefers-reduced-motion` отключает все анимации
- Семантика не изменена

### Сборка

- 0 ошибок TypeScript
- 0 console.error
- Build: 175ms
- CSS: 23KB (5KB gzip)
- JS: 211KB (67KB gzip)

---

## v1.0 — Initial Implementation

Полная реализация по спецификации:
- React 18 + TypeScript + Vite
- 7 компонентов: Navbar, HeroCarousel, RitualSection, Testimonials, CollectionSection, ProcessSection, Footer
- Единый `global.css` с CSS-переменными
- `content.ts` — все тексты и данные
- `useReveal.ts` — IntersectionObserver scroll-reveal
- `useCarousel.ts` — авто-переключение 8s, touch swipe, циклическая навигация
- Видео с fallback-градиентами и ленивой загрузкой
- Адаптив: breakpoint 768px
- Accessibility: aria-labels, role="tablist", focus-visible, prefers-reduced-motion, lang="ru"
