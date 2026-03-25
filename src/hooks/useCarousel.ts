import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  total: number;
  interval?: number;
}

interface UseCarouselReturn {
  currentSlide: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

export function useCarousel({ total, interval = 8000 }: UseCarouselOptions): UseCarouselReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, interval);
  }, [total, interval]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(((index % total) + total) % total);
      resetTimer();
    },
    [total, resetTimer]
  );

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
    resetTimer();
  }, [total, resetTimer]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
    resetTimer();
  }, [total, resetTimer]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return { currentSlide, goTo, goNext, goPrev, onTouchStart, onTouchEnd };
}
