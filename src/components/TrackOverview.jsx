import { stats } from '../data/curriculum';
import styles from './TrackOverview.module.css';
export default function TrackOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2>What Students Build Over 12 Days</h2>
          <p>The SP Track starts with databases and SQL queries, then moves into Python and data analysis with Pandas. Days 1 through 6 cover relational databases and SQL inside MySQL. Days 7 through 12 introduce Python, data structures, Pandas, and data visualization. Every day ends with a file the student keeps.</p>
        </div>
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.card}>
              <div className={styles.number}>{s.number}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
