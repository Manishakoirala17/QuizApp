import styles from "./../../styles/Dialog.module.css";
export default function Dialog({ children, visible }) {
  return (
    <div
      className={styles.dialogContainer}
      style={visible ? { display: "block" } : { display: "none" }}
    >
      <div className={styles.dialogContent}>{children}</div>
    </div>
  );
}
