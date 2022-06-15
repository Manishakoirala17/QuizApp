import styles from "./../../../styles/Quiz.module.css";
export default function Options({ options }) {
  return (
    <div className={styles.optionContainer}>
      {options.map((item) => (
        <div>
          <input type="radio" name="option" className={styles.radio}></input>
          <label style={{ marginLeft: "15px" }}>{item.option}</label>
        </div>
      ))}
    </div>
  );
}
