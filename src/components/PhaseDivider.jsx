import styles from './PhaseDivider.module.css';
export default function PhaseDivider({ phase, dayRange }) {
  const isSql = phase === 'SQL';
  return (
    <div className={[styles.wrap, isSql ? styles.sql : styles.python].join(' ')}>
      <div className={styles.inner}>
        <div className={styles.label}>{isSql ? 'Phase 1' : 'Phase 2'} &nbsp; {phase}</div>
        <div className={styles.line} />
        <div className={styles.days}>{dayRange}</div>
      </div>
    </div>
  );
}
