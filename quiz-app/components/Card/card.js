import styles from "./../../styles/Card.module.css";
export default function Card({ children, style }) {
  return (
    <div className={styles.cardContainer} style={style}>
      {children}
    </div>
  );
}
