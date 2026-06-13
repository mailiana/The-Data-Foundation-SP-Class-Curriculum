import styles from './TeacherNote.module.css';
export default function TeacherNote() {
  return (
    <aside className={styles.wrap}>
      <div className={styles.inner}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.icon}>
          <circle cx="10" cy="10" r="9" stroke="#f8d618" strokeWidth="1.5"/>
          <rect x="9.25" y="8.5" width="1.5" height="6" rx="0.75" fill="#f8d618"/>
          <circle cx="10" cy="6.25" r="0.875" fill="#f8d618"/>
        </svg>
        <div>
          <div className={styles.label}>Teacher Note: GitHub Setup</div>
          <p>Day 6 requires students to have a GitHub account. Prompt students to create accounts before Day 5 so Day 6 is not blocked by setup. Walk through git init, git add, git commit, and git push as a group before students push independently. GitHub is a portfolio asset students keep after the cohort ends.</p>
        </div>
      </div>
    </aside>
  );
}
