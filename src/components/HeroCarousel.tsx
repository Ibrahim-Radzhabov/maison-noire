import { useRef, useEffect, useCallback, useState } from 'react';
import { heroSlides, scrollIndicatorText, ariaLabels } from '../data/content';
import { useCarousel } from '../hooks/useCarousel';
import GoldParticles from './GoldParticles';

function SplitHeadline({ text, Tag, isActive }: { text: string; Tag: 'h1' | 'p'; isActive: boolean }) {
  const words = text.split(' ');
  return (
    <Tag className="headline" aria-hidden={Tag === 'p' ? true : undefined}>
      {words.map((word, wi) => (
        <span key={`w-${wi}`} className="headline-word">
          {word.split('').map((char, ci) => {
            const globalIndex = words.slice(0, wi).join(' ').length + (wi > 0 ? 1 : 0) + ci;
            return (
              <span
                key={`${char}-${ci}`}
                className="headline-char"
                style={{
                  transitionDelay: isActive ? `${0.3 + globalIndex * 0.04}s` : '0s',
                }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}

export default function HeroCarousel() {
  const { currentSlide, goTo, goNext, goPrev, onTouchStart, onTouchEnd } = useCarousel({
    total: heroSlides.length,
  });

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentSlide) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.style.display = 'none';
  }, []);

  return (
    <section id="hero" className="hero" aria-label={ariaLabels.heroCarousel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.headline}
            className={`slide${isActive ? ' active' : ''}`}
            aria-hidden={!isActive}
          >
            <div className="slide-bg" style={{ background: slide.video.fallbackGradient }}>
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={slide.video.src}
                autoPlay
                loop
                muted
                playsInline
                preload={index === 0 ? 'auto' : 'none'}
                aria-hidden="true"
                onError={handleVideoError}
              />
              <div className="slide-overlay" />
            </div>
            <div className="slide-content">
              <div className="slide-top-left">
                <span className="label label-shimmer">{slide.label}</span>
                <SplitHeadline
                  text={slide.headline}
                  Tag={isActive ? 'h1' : 'p'}
                  isActive={isActive}
                />
                <p className="tagline">{slide.tagline}</p>
              </div>
              <div className="slide-bottom-right">
                <p className="description">{slide.description}</p>
                <span className="price">{slide.price}</span>
                <span className="unit">{slide.unit}</span>
                <button className="cta-glass cta-magnetic">{slide.cta}</button>
              </div>
            </div>
          </div>
        );
      })}

      <GoldParticles count={15} />

      <button className="carousel-arrow carousel-arrow--prev" onClick={goPrev} aria-label={ariaLabels.prevSlide}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel-arrow carousel-arrow--next" onClick={goNext} aria-label={ariaLabels.nextSlide}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="carousel-dots" role="tablist" aria-label={ariaLabels.slideDots}>
        {heroSlides.map((slide, index) => (
          <button
            key={slide.headline}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`${ariaLabels.slidePrefix} ${index + 1}`}
            className={`carousel-dot${index === currentSlide ? ' active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div className={`scroll-indicator${scrolled ? ' hidden' : ''}`}>
        <span>{scrollIndicatorText}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
