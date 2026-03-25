import { useMemo } from 'react';

interface GoldParticlesProps {
  count?: number;
}

export default function GoldParticles({ count = 20 }: GoldParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: `p-${i}`,
      left: `${Math.random() * 100}%`,
      bottom: `${-(Math.random() * 20)}%`,
      size: 2 + Math.random() * 3,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      drift: -40 + Math.random() * 80,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
            opacity: p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
