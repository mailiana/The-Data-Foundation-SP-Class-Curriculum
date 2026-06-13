import { capstoneItems } from '../data/curriculum';
import styles from './CapstoneSection.module.css';
export default function CapstoneSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2>Final Project Brief</h2>
          <p>Students pick a dataset on Day 1. By Day 12, they have queried it in SQL, analyzed it in Python, visualized it with Matplotlib and Seaborn, and published everything to GitHub. Both capstone projects go on their profile.</p>
        </div>
        <div className={styles.right}>
          {capstoneItems.map((item) => (
            <div key={item.label} className={styles.item}>
              <div className={styles.itemLabel}>{item.label}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
