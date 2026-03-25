import { heroSlides, collectionContent, ariaLabels } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function CollectionSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section id="collection" className="collection" aria-label={ariaLabels.collection} ref={sectionRef}>
      <div className="collection-header reveal">
        <span className="label label-shimmer">{collectionContent.label}<span className="gold-divider" style={{ margin: '12px auto 0' }} /></span>
        <h2>{collectionContent.headline}</h2>
        <p className="subtext">{collectionContent.subtext}</p>
      </div>

      <div className="collection-grid">
        {heroSlides.map((slide, index) => (
          <article
            key={slide.headline}
            className={`collection-card reveal-scale stagger-${index + 1}`}
          >
            <div
              className="collection-card-visual"
              style={{ background: slide.video.fallbackGradient }}
            />
            <div className="collection-card-info">
              <span className="label">{slide.label}</span>
              <h3 className="name">{slide.headline}</h3>
              <p className="desc">{slide.tagline}</p>
              <div className="collection-card-bottom">
                <span className="card-price">{slide.price}</span>
                <a href="#hero" className="card-cta">
                  {collectionContent.cardCta}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
