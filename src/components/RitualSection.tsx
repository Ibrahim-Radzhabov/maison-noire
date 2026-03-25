import { useRef, useEffect, useCallback } from 'react';
import { ritualContent, ariaLabels } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function RitualSection() {
  const sectionRef = useReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const ritualRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = 'auto';
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Clip-path reveal for video
  useEffect(() => {
    const section = ritualRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('video-revealed');
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.style.display = 'none';
  }, []);

  return (
    <section
      id="ritual"
      className="ritual"
      aria-label={ariaLabels.ritual}
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (ritualRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
    >
      <div className="ritual-text">
        <span className="label reveal-left stagger-1 label-shimmer">{ritualContent.label}<span className="gold-divider" /></span>
        <h2 className="reveal-left stagger-2">{ritualContent.headline}</h2>
        <p className="body reveal stagger-3">{ritualContent.text}</p>
        <a href="#collection" className="ritual-cta reveal stagger-4">
          {ritualContent.cta}
        </a>
      </div>
      <div className="ritual-video" style={{ background: ritualContent.video.fallbackGradient }}>
        <video
          ref={videoRef}
          src={ritualContent.video.src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          onError={handleVideoError}
        />
      </div>
    </section>
  );
}
