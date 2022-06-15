import styles from "./../../styles/Form.module.css";
import Image from "next/image";
export default function TextField({
  placeholder,
  onChange,
  name,
  required,
  style,
}) {
  return (
    <div className={styles.inputBox} style={style}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required={required}
      ></input>
    </div>
  );
}
