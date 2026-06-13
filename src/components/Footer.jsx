import styles from './Footer.module.css';
const LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'SQL Phase', href: '#sql-phase' },
  { label: 'Python Phase', href: '#python-phase' },
  { label: 'Capstone', href: '#capstone' },
  { label: 'Skills', href: '#skills' },
];
const scrollTo = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
};
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>The Digital College <span className={styles.slash}>/</span> Data with Miss Mailiana</div>
            <p className={styles.tagline}>Building the next generation of data professionals, one cohort at a time.</p>
          </div>
          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navLabel}>Navigate</div>
            <ul>
              {LINKS.map((l) => <li key={l.href}><a href={l.href} className={styles.link} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a></li>)}
            </ul>
          </nav>
          <div className={styles.info}>
            <div className={styles.navLabel}>Track Info</div>
            {[['Track','SP - SQL & Python'],['Duration','12 Days'],['Schedule','Tue / Wed / Thu'],['Sessions','6 PM - 8 PM | 7 PM - 9 PM']].map(([k,v]) => (
              <div key={k} className={styles.infoItem}><span className={styles.key}>{k}</span><span className={styles.val}>{v}</span></div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>SP Track &bull; SQL &amp; Python &bull; 12-Day Curriculum &bull; The Data Foundation Class</span>
          <button className={styles.toTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11V3M7 3L3.5 6.5M7 3L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
