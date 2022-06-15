import styles from "./../../../styles/Quiz.module.css";
import Button from "./../../FormFields/button";

export default function Footer(props) {
  const {
    count,
    noOfQuestion,
    nextButnClick,
    previousButnClick,
    submitBtnClick,
  } = props;
  const nextBtn = {
    width: "106pt",
    textTransform: "Capitalize",
  };
  const prevBtn = {
    color: "#666666",
    backgroundColor: "#cccccc",
    width: "106pt",
    textTransform: "Capitalize",
  };
  const submitBtn = {
    color: "#ffffff",
    backgroundColor: "#36B732",
    width: "106pt",
    textTransform: "Capitalize",
  };
  return (
    <div className={styles.footerContainer}>
      {count != 1 ? (
        <div className={styles.prev}>
          <Button
            buttonName={"Previous"}
            style={prevBtn}
            handleClick={previousButnClick}
          ></Button>
        </div>
      ) : (
        ""
      )}
      <div className={styles.count}>
        <span style={{ fontSize: "24pt" }}>{count}</span>
        <span style={{ fontSize: "14pt", color: "#666666" }}>
          /{noOfQuestion}
        </span>
      </div>
      {count == noOfQuestion ? (
        <div className={styles.next}>
          <Button
            buttonName={"Submit"}
            style={submitBtn}
            handleClick={submitBtnClick}
          ></Button>
        </div>
      ) : (
        <div className={styles.next}>
          <Button
            buttonName={"Next"}
            style={nextBtn}
            handleClick={nextButnClick}
          ></Button>
        </div>
      )}
    </div>
  );
}
