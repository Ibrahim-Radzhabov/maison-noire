import { useRef, useEffect, useCallback } from 'react';
import { processSteps } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import GoldParticles from './GoldParticles';

function ProcessStep({ step, index }: { step: typeof processSteps[number]; index: number }) {
  const sectionRef = useReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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

  // Parallax effect on background
  useEffect(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const offset = (clampedProgress - 0.5) * 80;
      bg.style.transform = `translateY(${offset}px) translateZ(0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef]);

  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.style.display = 'none';
  }, []);

  return (
    <section
      id={index === 0 ? 'process' : undefined}
      className="process-section"
      aria-label={step.headline}
      ref={sectionRef}
    >
      <div className="process-bg" ref={bgRef} style={{ background: step.video.fallbackGradient }}>
        <video
          ref={videoRef}
          src={step.video.src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          onError={handleVideoError}
        />
        <div className="process-overlay" />
      </div>
      <div className="process-content">
        <span className="label reveal label-shimmer">{step.label}</span>
        <h2 className="reveal stagger-1">{step.headline}</h2>
        <p className="reveal stagger-2">{step.text}</p>
      </div>
      <span className="process-step-number" aria-hidden="true">
        {`0${index + 1}`}
      </span>
      <GoldParticles count={10} />
    </section>
  );
}

export default function ProcessSection() {
  return (
    <>
      {processSteps.map((step, index) => (
        <ProcessStep key={step.label} step={step} index={index} />
      ))}
    </>
  );
}
