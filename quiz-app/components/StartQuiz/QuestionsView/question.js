import styles from "./../../../styles/Quiz.module.css";
import Image from "next/image";
import Options from "./options";
import Dialog from "../../Overlay/Dialog";
import Feedback from "./../../FeedbackForm/Feedback";
import { useState } from "react";
export default function Question(props) {
  const { count, question } = props;
  const [isFeedbackOpen, setOpen] = useState(false);
  const feedbackIcon = require("./../../../public/feedback.svg");
  function handleClose() {
    setOpen(false);
  }
  function clickFeedback() {
    setOpen(true);
  }

  function saveFeedback() {
    handleClose();
  }
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
          <div className={styles.feedBacktext} onClick={clickFeedback}>
            <p style={{ fontSize: "12pt" }}>FEEDBACK</p>
          </div>
          <Dialog visible={isFeedbackOpen}>
            <Feedback handleClose={handleClose} saveFeedback={saveFeedback} />
          </Dialog>
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
