import styles from "./../../../styles/Quiz.module.css";
import Image from "next/image";
export default function QuestionHeader({ infoBtnCLick }) {
  const closeIcon = require("./../../../public/closeIcon.svg");

  return (
    <div className={styles.header}>
      <div className={styles.close}>
        <Image src={closeIcon}></Image>
      </div>
      <div className={styles.timer}>
        <div>
          01 <span className={styles.timerText}>H</span>
        </div>
        <div>
          29 <span className={styles.timerText}>M</span>
        </div>
        <div>
          45 <span className={styles.timerText}>S</span>
        </div>
      </div>
      <div className={styles.info} onClick={infoBtnCLick}>
        <div>i</div>
      </div>
    </div>
  );
}
