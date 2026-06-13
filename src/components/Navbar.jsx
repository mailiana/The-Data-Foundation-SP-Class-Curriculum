import { useState, useEffect, useCallback } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'SQL Phase', href: '#sql-phase' },
  { label: 'Python Phase', href: '#python-phase' },
  { label: 'Capstone', href: '#capstone' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    let current = '';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 80) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')} aria-label="Main navigation">
        <div className={styles.inner}>
          <a href="#top" className={styles.brand} onClick={(e) => scrollTo(e, '#top')}>
            <span className={styles.dot} />
            <span className={styles.brandText}><span className={styles.accent}>SP</span> Track</span>
            <span className={styles.brandSub}>Data Foundation</span>
          </a>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[styles.link, activeSection === link.href.slice(1) ? styles.active : ''].join(' ')}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.pills}>
            <span className={styles.pillSql}>SQL</span>
            <span className={styles.pillPy}>Python</span>
            <span className={styles.pillDays}>12 Days</span>
          </div>
          <button
            className={[styles.burger, menuOpen ? styles.burgerOpen : ''].join(' ')}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={[styles.drawer, menuOpen ? styles.drawerOpen : ''].join(' ')}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.drawerLink} onClick={(e) => scrollTo(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.drawerPills}>
            <span className={styles.pillSql}>SQL</span>
            <span className={styles.pillPy}>Python</span>
            <span className={styles.pillDays}>12 Days</span>
          </div>
        </div>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}
