import styles from "./../../../styles/Card.module.css";
export default function TabContainer({ children }) {
  return <div className={styles.contentContainer}>{children}</div>;
}
