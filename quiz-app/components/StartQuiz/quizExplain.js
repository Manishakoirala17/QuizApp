import styles from "./../../styles/Quiz.module.css";
export default function QuizExplain() {
  return (
    <div style={{ marginLeft: "12px" }}>
      <div className={styles.testTopic}>
        <h4>Test Topics</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Nonumy eirmode et</li>
          <li>Olore magna aliquyam erat, sed diam volup</li>
        </ul>
      </div>
      <div className={styles.testGuide}>
        <h4>Test Guidelines</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </li>
          <li>Nonumy eirmod tempor invidunt ut labore et</li>
          <li>
            Olore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum
          </li>
        </ul>
      </div>
    </div>
  );
}
