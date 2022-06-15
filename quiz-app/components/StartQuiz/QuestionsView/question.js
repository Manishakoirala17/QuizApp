import styles from "./../../../styles/Quiz.module.css";
import Image from "next/image";
import Options from "./options";

export default function Question(props) {
  const { count, question } = props;
  const feedbackIcon = require("./../../../public/feedback.svg");
  return (
    <div className={styles.questionContainer}>
      <div className={styles.topDiv}>
        <div
          style={{
            flex: 1,
          }}
        >
          <p>Question {count}</p>
        </div>
        <div align="right" className={styles.feedBack}>
          <div className={styles.feedBackimage}>
            <Image src={feedbackIcon}></Image>
          </div>
          <div className={styles.feedBacktext}>
            <p style={{ fontSize: "12pt" }}>FEEDBACK</p>
          </div>
        </div>
      </div>
      <div className={styles.question}>
        <p>{question.question}</p>
      </div>
      <div className={styles.guideContainer}>
        <Options options={question.options}></Options>
      </div>
    </div>
  );
}
