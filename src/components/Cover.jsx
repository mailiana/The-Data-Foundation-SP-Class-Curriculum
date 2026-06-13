import styles from './Cover.module.css';
export default function Cover() {
  return (
    <header className={styles.cover}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} />
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <span className={styles.dot} />
          <span className={styles.brandName}>The Digital College / Data with Miss Mailiana</span>
        </div>
        <div className={styles.badgeRow}>
          <span className={styles.badge}>SP Track</span>
          <span className={styles.badgeSub}>12-Day Teaching Guide</span>
        </div>
        <h1 className={styles.title}>SQL &amp; <span className={styles.accent}>Python</span><br />Curriculum</h1>
        <p className={styles.subtitle}>The Data Foundation Class -- From zero to GitHub-published portfolio projects</p>
        <div className={styles.meta}>
          <div className={styles.metaItem}><label>Duration</label><span>12 Days</span></div>
          <div className={styles.metaItem}><label>Schedule</label><span>Tue / Wed / Thu</span></div>
          <div className={styles.metaItem}><label>Session Time</label><span>6 PM - 8 PM | 7 PM - 9 PM</span></div>
          <div className={styles.metaItem}><label>Prerequisite</label><span>No prior coding experience required</span></div>
        </div>
      </div>
    </header>
  );
}
