import styles from "./../../styles/Form.module.css";
import Image from "next/image";
export default function EmailField({
  placeholder,
  showIcon,
  onChange,
  name,
  required,
}) {
  const emailIcon = require("./../../public/emailIcon.svg");
  return (
    <div className={styles.inputBox}>
      {showIcon ? (
        <span className={styles.prefix}>
          <Image src={emailIcon}></Image>
        </span>
      ) : (
        ""
      )}
      <input
        type="email"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required={required}
      ></input>
    </div>
  );
}
