import styles from './DayCard.module.css';
export default function DayCard({ day, title, objectives, syntax, deliverable, type }) {
  const isSql = type === 'sql';
  return (
    <article className={[styles.card, isSql ? styles.sql : styles.python].join(' ')}>
      <div className={styles.header}>
        <span className={styles.dayNum}>Day {day}</span>
        <span className={[styles.tag, isSql ? styles.tagSql : styles.tagPy].join(' ')}>{isSql ? 'SQL' : 'Python'}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.sectionLabel}>Learning Objectives</div>
        <ul className={styles.objectives}>
          {objectives.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
        <div className={styles.sectionLabel}>{isSql ? 'Syntax Covered' : 'Concepts Covered'}</div>
        <div className={styles.syntaxList}>
          {syntax.map((s, i) => <code key={i} className={[styles.code, isSql ? styles.codeSql : styles.codePy].join(' ')}>{s}</code>)}
        </div>
        <div className={styles.deliverable}>
          <div className={styles.delLabel}>Student Deliverable</div>
          <p>{deliverable}</p>
        </div>
      </div>
    </article>
  );
}
