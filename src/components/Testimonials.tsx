import { testimonials, testimonialsHeadline, verifiedBadgeText, ariaLabels } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Testimonials() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="testimonials" aria-label={ariaLabels.testimonials} ref={sectionRef}>
      <h2 className="testimonials-header reveal">{testimonialsHeadline}</h2>
      <div className="testimonials-track">
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial-card">
            <div className="testimonial-header">
              <span className="testimonial-name">{t.name}</span>
              {t.verified && (
                <span className="testimonial-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {verifiedBadgeText}
                </span>
              )}
            </div>
            <div className="testimonial-stars" aria-label={`${ariaLabels.ratingPrefix} ${t.rating} ${ariaLabels.ratingSuffix}`}>
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <time className="testimonial-date">{t.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
