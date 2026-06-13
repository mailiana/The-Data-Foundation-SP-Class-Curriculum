import DayCard from './DayCard';
import styles from './DaysGrid.module.css';
export default function DaysGrid({ days, type }) {
  return (
    <div className={styles.grid}>
      {days.map((d) => <DayCard key={d.day} {...d} type={type} />)}
    </div>
  );
}
