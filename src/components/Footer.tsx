import React from 'react';
import { BrandWordmark } from './Navbar';

export const FOOTER_NAV_LINKS = [
  { label: 'results', href: '/results' },
  { label: 'standings', href: '/standings' },
  { label: 'schedule', href: '/schedule' },
  { label: 'gallery', href: '/gallery' },
  { label: 'news', href: '/news' },
  { label: 'media', href: '/media' },
  { label: 'brochure', href: '/brochure' },
] as const;

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__big">
        <p className="footer__line">
          See you on{' '}
          <span className="footer__date text-blue-500">Nov 26th.</span>
        </p>
      </div>

      <div className="footer__row">
        <div className="footer__brand">
          <BrandWordmark className="footer__wordmark" />
        </div>

        <nav className="footer__links" aria-label="Footer">
          {FOOTER_NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} data-cursor>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__base">
        <span>Organised by Consoulium 2k26, Consoulium 2k26 · Ayatic Codex</span>
        <span className="colour-bars bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
    </footer>
  );
};

export default Footer;


