import styles from "./../../styles/Quiz.module.css";
import Button from "../FormFields/button";
export default function ConfirmLog() {
  const cancelBtn = {
    width: "157pt",
    backgroundColor: "#CCCCCC",
    marginTop: "15px",
    textTransform: "Capitalize",
    color: "#666666",
    marginRight: "15px",
  };
  const saveBtn = {
    width: "157pt",
    margin: "15px",
    textTransform: "Capitalize",
    backgroundColor: "#36B732",
  };
  const pStyle = {
    fontSize: "14pt",
  };
  const hStyle = {
    fontSize: "18pt",
  };
  return (
    <div className={styles.confirmContainer}>
      <div style={{ textAlign: "center" }}>
        <h3 style={hStyle}>Confirm Submission ?</h3>
        <p style={pStyle}>
          By submitting the test you can't edit or resubmit the test any more.
        </p>
      </div>
      <div className={styles.feedBackButtons}>
        <Button buttonName={"Cancel"} style={cancelBtn}></Button>
        <Button buttonName={"Save"} style={saveBtn}></Button>
      </div>
    </div>
  );
}
