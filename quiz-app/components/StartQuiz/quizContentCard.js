import styles from "./../../styles/Quiz.module.css";
export default function QuizContent(props) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <p>Electromagnetic and electro waves {props.title}</p>
        <div className={styles.titletext}>
          <div style={{ textTransform: "uppercase" }}>Physics</div>
          <div> 26 may</div>
        </div>
      </div>
      <div className={styles.contentDetails}>
        <div>
          <p>1h 30 min</p>
        </div>
        <div>
          <p>15 questions</p>
        </div>
      </div>
      <div className={styles.expiredDiv}>Expired</div>
    </div>
  );
}
