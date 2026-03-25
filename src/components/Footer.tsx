import { footerColumns, footerBrandTitle, footerCopyright, footerContactCta, ariaLabels } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Footer() {
  const footerRef = useReveal<HTMLElement>();

  return (
    <footer id="footer" className="footer" aria-label={ariaLabels.footer} ref={footerRef}>
      <div className="footer-grid">
        {footerColumns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h3 className="footer-col-title">{col.title}</h3>
            {col.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-brand reveal">{footerBrandTitle}</div>

      <div className="footer-bottom">
        <span className="footer-copyright">{footerCopyright}</span>
        <button className="footer-contact">{footerContactCta}</button>
      </div>
    </footer>
  );
}
