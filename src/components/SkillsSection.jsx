import { skills } from '../data/curriculum';
import styles from './SkillsSection.module.css';
export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2>Skills Students Leave With</h2>
        <p className={styles.sub}>Verified by GitHub commits and live project work, not just attendance.</p>
        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.num} className={styles.block}>
              <div className={[styles.num, s.type === 'sql' ? styles.sqlNum : styles.pyNum].join(' ')}>{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
