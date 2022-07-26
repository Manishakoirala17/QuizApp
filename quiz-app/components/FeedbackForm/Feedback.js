import TextField from "../FormFields/textField";
import Card from "./../Card/card";
import Button from "./../FormFields/button";
import styles from "./../../styles/Quiz.module.css";
export default function FeedBack({ handleClose, saveFeedback }) {
  const cancelBtn = {
    width: "157pt",
    backgroundColor: "#CCCCCC",
    marginTop: "15px",
    textTransform: "Capitalize",

    marginRight: "15px",
  };
  const saveBtn = {
    width: "157pt",
    margin: "15px",
    textTransform: "Capitalize",
  };
  const fontstyle = {
    fontSize: "12pt",
    color: "#666666",
    fontFamily: "Poppins",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
  };
  const inputStyle = {
    fontSize: "14pt",
    fontFamily: "Poppins",
  };
  const textareaStyle = {
    width: "315pt",
    height: "100pt",
    border: "1px solid #a0a0a0",
    borderRadius: "8pt",
    padding: "6px",
    fontSize: "14pt",
    fontFamily: "Poppins",
  };
  return (
    <div className={styles.feedBackContainer}>
      <div style={{ textAlign: "center", fontSize: "18pt" }}>
        <h4>Feedback</h4>
      </div>
      <div className={styles.feedBackFields}>
        <div style={{ display: "grid", gridGap: "14px" }}>
          <label style={fontstyle}>Lorem ipsum</label>
          <TextField
            placeholder={"Dolor lorem ipsum sordl"}
            name={"feedback"}
            style={inputStyle}
          ></TextField>
        </div>
        <div style={{ display: "grid", gridGap: "14px" }}>
          <label style={fontstyle}>Description</label>
          <textarea row="6" style={textareaStyle}></textarea>
        </div>
      </div>
      <div className={styles.feedBackButtons}>
        <Button
          buttonName={"Cancel"}
          style={cancelBtn}
          handleClick={handleClose}
        ></Button>
        <Button
          buttonName={"Save"}
          style={saveBtn}
          handleClick={saveFeedback}
        ></Button>
      </div>
    </div>
  );
}
