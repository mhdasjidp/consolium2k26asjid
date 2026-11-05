import React from 'react';
import { EVENT_CONTENT, NAV_LINKS, TEAM_COLOR_ORDER } from '../theme';
import { BrandWordmark } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* 5-team color bar across the top of the footer */}
      <div className="colour-bars" aria-hidden="true">
        {TEAM_COLOR_ORDER.map((team) => (
          <i key={team.id} style={{ background: `var(${team.cssVar})` }} />
        ))}
      </div>

      {/* Regional decorative graphic (Kathakali face image/SVG) completely removed */}
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <BrandWordmark className="footer__wordmark" />
            </div>
            <p className="footer__tag">
              {EVENT_CONTENT.headline}
              <br />
              <em>Signs &amp; divine patterns woven into the universe.</em>
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__col-h">Navigate</div>
              <ul>
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-h">Explore</div>
              <ul>
                {NAV_LINKS.slice(4).map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-h">Teams</div>
              <ul>
                {TEAM_COLOR_ORDER.map((team) => (
                  <li key={team.id}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: `var(${team.cssVar})`,
                        marginRight: 8,
                      }}
                    />
                    <span>{team.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__Serialize">
          <div className="footer__big" aria-hidden="true">
            CONSOULIUM · 2K26
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 {EVENT_CONTENT.brand} · {EVENT_CONTENT.headline}</div>
          <div className="footer__legal">
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
