import styles from "./../../styles/Form.module.css";
import Image from "next/image";
export default function Button(props) {
  const { handleClick, buttonName, style, icon } = props;
  return (
    <div className={styles.btnContainer}>
      <button onClick={handleClick} className={styles.btn} style={style}>
        {icon ? <Image src={icon}></Image> : ""} {buttonName}
      </button>
    </div>
  );
}
