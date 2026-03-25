/* ===================================================================
   content.ts — Единый источник данных для Maison Noire
   =================================================================== */

// ─── Видео + fallback ───────────────────────────────────────────────

export interface VideoAsset {
  src: string;
  fallbackGradient: string;
}

export const heroVideos: VideoAsset[] = [
  {
    src: 'https://videos.pexels.com/video-files/5765290/5765290-uhd_2560_1440_24fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #0A0A0A 100%)',
  },
  {
    src: 'https://videos.pexels.com/video-files/4488286/4488286-uhd_2560_1440_25fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #1A0A0A 0%, #2E1A1A 50%, #0A0A0A 100%)',
  },
  {
    src: 'https://videos.pexels.com/video-files/5765284/5765284-uhd_2560_1440_24fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #0A0A00 0%, #2E2A1A 50%, #0A0A0A 100%)',
  },
];

export const ritualVideo: VideoAsset = {
  src: 'https://videos.pexels.com/video-files/7517568/7517568-uhd_2560_1440_25fps.mp4',
  fallbackGradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1520 50%, #0A0A0A 100%)',
};

export const processVideos: VideoAsset[] = [
  {
    src: 'https://videos.pexels.com/video-files/5765274/5765274-uhd_2560_1440_24fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #0A100A 0%, #1A2E1A 50%, #0A0A0A 100%)',
  },
  {
    src: 'https://videos.pexels.com/video-files/8721946/8721946-uhd_2560_1440_24fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #0A0A10 0%, #1A1A2E 50%, #0A0A0A 100%)',
  },
  {
    src: 'https://videos.pexels.com/video-files/7517562/7517562-uhd_2560_1440_25fps.mp4',
    fallbackGradient: 'linear-gradient(135deg, #100A0A 0%, #2E1A1A 50%, #0A0A0A 100%)',
  },
];

// ─── Hero Slides ────────────────────────────────────────────────────

export interface HeroSlide {
  label: string;
  headline: string;
  tagline: string;
  description: string;
  price: string;
  unit: string;
  cta: string;
  video: VideoAsset;
}

export const heroSlides: HeroSlide[] = [
  {
    label: 'ЭКСКЛЮЗИВ',
    headline: 'Oud Noir',
    tagline: 'Глубокий, бархатный, магнетичный.',
    description:
      'Драгоценный уд из сердца Лаоса, обрамлённый чёрной розой и дымкой ладана. Аромат, который остаётся в памяти.',
    price: '₽12 900',
    unit: '50 мл · Eau de Parfum',
    cta: 'Открыть Oud Noir',
    video: heroVideos[0],
  },
  {
    label: 'HAUTE PARFUMERIE',
    headline: 'Rose Velvet',
    tagline: 'Нежный, чувственный, обволакивающий.',
    description:
      'Турецкая роза, пион и кашемировый мускус сплетаются в аромат утончённой женственности и тихой силы.',
    price: '₽8 900',
    unit: '50 мл · Eau de Parfum',
    cta: 'Открыть Rose Velvet',
    video: heroVideos[1],
  },
  {
    label: 'НОВИНКА СЕЗОНА',
    headline: 'Amber Santal',
    tagline: 'Тёплый, древесный, завораживающий.',
    description:
      'Индийский сандал, амбра и ваниль Мадагаскара — роскошный вечерний аромат для тех, кто ценит глубину.',
    price: '₽9 900',
    unit: '50 мл · Eau de Parfum',
    cta: 'Открыть Amber Santal',
    video: heroVideos[2],
  },
];

// ─── Ritual Section ─────────────────────────────────────────────────

export const ritualContent = {
  label: 'РИТУАЛ',
  headline: 'Искусство нанесения',
  text: 'Парфюм — это не аксессуар, это продолжение вашей личности. Каждое нанесение — ритуал, каждый вдох — новая глава истории, написанной на вашей коже.',
  cta: 'Узнать больше \u2192',
  video: ritualVideo,
};

// ─── Testimonials ───────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  text: string;
  date: string;
}

export const testimonialsHeadline = 'Впечатления наших клиентов';

export const testimonials: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Виктория Лебедева',
    verified: true,
    rating: 5,
    text: '«Oud Noir — это нечто невероятное. Шлейф держится весь день, комплименты не прекращаются. Нашла свой идеальный аромат.»',
    date: '3 дня назад',
  },
  {
    id: 'review-2',
    name: 'Андрей Морозов',
    verified: true,
    rating: 5,
    text: '«Amber Santal — тёплый, обволакивающий. Надеваю на важные встречи. Каждый раз чувствую себя увереннее.»',
    date: '1 неделю назад',
  },
  {
    id: 'review-3',
    name: 'Елена Соколова',
    verified: true,
    rating: 5,
    text: '«Rose Velvet стал моим повседневным ароматом. Лёгкий, но стойкий. Муж в восторге, подруги спрашивают, что за парфюм.»',
    date: '1 неделю назад',
  },
  {
    id: 'review-4',
    name: 'Максим Волков',
    verified: true,
    rating: 5,
    text: '«Качество на уровне нишевых домов за вдвое меньшую цену. Упаковка безупречна, доставка быстрая. Буду заказывать ещё.»',
    date: '2 недели назад',
  },
];

// ─── Collection ─────────────────────────────────────────────────────

export const collectionContent = {
  label: 'КОЛЛЕКЦИЯ',
  headline: 'Откройте наши ароматы',
  subtext:
    'От глубоких удовых композиций до нежных цветочных вуалей — найдите аромат, который станет вашей визитной карточкой.',
  cardCta: 'Подробнее \u2192',
};

// ─── Process Steps ──────────────────────────────────────────────────

export interface ProcessStep {
  label: string;
  headline: string;
  text: string;
  video: VideoAsset;
}

export const processSteps: ProcessStep[] = [
  {
    label: 'ПРОИСХОЖДЕНИЕ',
    headline: 'Сбор ингредиентов',
    text: 'От лавандовых полей Прованса до плантаций иланг-иланга на Коморских островах. Мы отбираем лучшее сырьё у проверенных поставщиков, чтобы каждая нота звучала безупречно.',
    video: processVideos[0],
  },
  {
    label: 'МАСТЕРСТВО',
    headline: 'Дистилляция',
    text: 'Медные аламбики, точный контроль температуры, часы терпеливого ожидания. Из тонн лепестков — считанные литры драгоценного абсолю, хранящего душу цветка.',
    video: processVideos[1],
  },
  {
    label: 'ИСКУССТВО',
    headline: 'Купаж',
    text: 'Парфюмер-композитор соединяет верхние, сердечные и базовые ноты в единую гармонию. Каждая формула — результат сотен проб, где интуиция встречается с точной наукой.',
    video: processVideos[2],
  },
];

// ─── Navbar ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'АРОМАТЫ', href: '#hero' },
  { label: 'КОЛЛЕКЦИЯ', href: '#collection' },
  { label: 'ИСТОРИЯ', href: '#process' },
  { label: 'БУТИКИ', href: '#footer' },
];

export const navLogo = 'MAISON NOIRE';

// ─── Footer ─────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Бутики',
    links: [
      { label: 'Москва', href: '#footer' },
      { label: 'Санкт-Петербург', href: '#footer' },
      { label: 'Дубай', href: '#footer' },
      { label: 'Онлайн', href: '#footer' },
    ],
  },
  {
    title: 'Информация',
    links: [
      { label: 'О бренде', href: '#process' },
      { label: 'Персональный подбор', href: '#collection' },
      { label: 'Доставка и возврат', href: '#footer' },
    ],
  },
  {
    title: 'Мы в соцсетях',
    links: [
      { label: 'Instagram', href: '#footer' },
      { label: 'Telegram', href: '#footer' },
      { label: 'WhatsApp', href: '#footer' },
    ],
  },
  {
    title: 'Оплата',
    links: [
      { label: 'VISA', href: '#footer' },
      { label: 'MC', href: '#footer' },
      { label: 'AMEX', href: '#footer' },
      { label: 'MIR', href: '#footer' },
    ],
  },
];

export const footerBrandTitle = 'MAISON NOIRE';
export const footerCopyright = '© 2026 Maison Noire. Все права защищены.';
export const footerContactCta = 'Написать нам ✉';

// ─── Общие тексты ───────────────────────────────────────────────────

export const scrollIndicatorText = 'Листайте вниз';
export const verifiedBadgeText = 'ПРОВЕРЕННЫЙ ПОКУПАТЕЛЬ';

// ─── Aria-labels ────────────────────────────────────────────────────

export const ariaLabels = {
  mainNav: 'Главная навигация',
  cart: 'Корзина',
  heroCarousel: 'Карусель ароматов',
  prevSlide: 'Предыдущий слайд',
  nextSlide: 'Следующий слайд',
  slideDots: 'Навигация по слайдам',
  slidePrefix: 'Слайд',
  ritual: 'Ритуал нанесения',
  testimonials: 'Отзывы клиентов',
  collection: 'Коллекция ароматов',
  footer: 'Контакты и информация',
  ratingPrefix: 'Рейтинг:',
  ratingSuffix: 'из 5',
};
