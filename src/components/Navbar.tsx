import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EVENT_CONTENT, NAV_LINKS, TEAM_COLOR_ORDER } from '../theme';

export const BrandWordmark: React.FC<{ className?: string }> = ({ className = 'nav__wordmark' }) => (
  <span className={className} style={{ fontWeight: 700, letterSpacing: '-0.03em' }}>
    {EVENT_CONTENT.brand}
  </span>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  // Active state permanently locked to 'Home' ('home')
  const [activeSection] = useState<string>('home');
  const [open, setOpen] = useState(false);

  const navLinksRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  const isCompact = scrolled || open;

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Preserve ONLY Navbar compact background-blur transition and top scroll progress bar;
  // all scroll-spy section-tracking logic has been completely removed.
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 64);

      if (progressRef.current) {
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
        progressRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Keep the active indicator pill (.nav__indicator) permanently anchored to the "Home" item
  useEffect(() => {
    const navEl = navLinksRef.current;
    const indicatorEl = indicatorRef.current;
    if (!navEl || !indicatorEl) return;

    const homeLinkEl = navEl.querySelector<HTMLElement>('[data-id="home"]');
    if (!homeLinkEl) return;

    const lockIndicatorToHome = () => {
      indicatorEl.style.opacity = '1';
      indicatorEl.style.width = `${homeLinkEl.offsetWidth}px`;
      indicatorEl.style.transform = `translate3d(${homeLinkEl.offsetLeft}px, 0, 0) scale(1)`;
    };

    lockIndicatorToHome();
    const timerId = window.setTimeout(lockIndicatorToHome, 650);
    window.addEventListener('resize', lockIndicatorToHome, { passive: true });

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener('resize', lockIndicatorToHome);
    };
  }, [activeSection, isCompact]);

  return (
    <>
      <header className={`nav ${isCompact ? 'is-compact' : ''} ${open ? 'is-menu' : ''}`}>
        <div className="nav__shell">
          <a
            href="#top"
            className="nav__brand"
            aria-label={`${EVENT_CONTENT.brand}, back to top`}
            onClick={closeMenu}
          >
            <BrandWordmark className="nav__wordmark" />
            <span className="nav__mark" aria-hidden="true">
              {TEAM_COLOR_ORDER.map((team) => (
                <i
                  key={team.id}
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: `var(${team.cssVar})`,
                  }}
                />
              ))}
              <span className="nav__mark-text">{EVENT_CONTENT.brand}</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Sections" ref={navLinksRef}>
            <span
              className="nav__indicator"
              ref={indicatorRef}
              aria-hidden="true"
              style={{
                transition:
                  'transform 0.55s var(--ease-out), width 0.55s var(--ease-out), opacity 0.3s var(--ease-out)',
              }}
            />
            {NAV_LINKS.map((item) => {
              const isHomeItem = item.id === 'home' || item.label === 'Home';
              return (
                <a
                  key={item.id}
                  data-id={item.id}
                  href={item.href}
                  className={`nav__link ${isHomeItem ? 'is-active' : ''}`}
                  aria-current={isHomeItem ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a href="#register" className="nav__cta" onClick={closeMenu}>
            <span className="nav__cta-roll">
              <span>Register</span>
              <span aria-hidden="true">Register</span>
            </span>
            <span className="nav__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>

          <button
            type="button"
            ref={menuBtnRef}
            className={`nav__menu ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="nav__menu-icon" aria-hidden="true">
              {TEAM_COLOR_ORDER.map((team) => (
                <i key={team.id} style={{ background: `var(${team.cssVar})` }} />
              ))}
            </span>
            <span className="nav__menu-label" aria-hidden="true">
              <span>Menu</span>
              <span>Close</span>
            </span>
          </button>

          <span className="nav__progress" aria-hidden="true">
            <span ref={progressRef} />
          </span>
        </div>
      </header>

      <div
        id="site-menu"
        className={`menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div className="menu__bands" aria-hidden="true">
          {TEAM_COLOR_ORDER.map((team) => (
            <i
              key={team.id}
              className="menu__band"
              style={{ '--c': `var(${team.cssVar})` } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="menu__sheet">
          <div className="menu__inner">
            <nav className="menu__pages" aria-label="Pages">
              <span className="eyebrow menu__eyebrow">Pages</span>
              <ol className="menu__list">
                {NAV_LINKS.map((item, idx) => {
                  const isHomeItem = item.id === 'home' || item.label === 'Home';
                  const team = TEAM_COLOR_ORDER[idx % TEAM_COLOR_ORDER.length];
                  return (
                    <li
                      key={item.id}
                      className={`menu__item ${isHomeItem ? 'is-here' : ''}`}
                      style={{ '--c': team.hex } as React.CSSProperties}
                    >
                      <a
                        href={item.href}
                        className="menu__link"
                        aria-current={isHomeItem ? 'page' : undefined}
                        onClick={closeMenu}
                      >
                        <span className="menu__no">{item.num}</span>
                        <span className="menu__label">
                          <span className="menu__mask">
                            <span className="menu__text">
                              {item.label}
                              <span className="menu__trail" aria-hidden="true" />
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
