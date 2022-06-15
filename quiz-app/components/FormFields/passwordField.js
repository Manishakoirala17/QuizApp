import styles from "./../../styles/Form.module.css";
import Image from "next/image";
import { useState } from "react";
export default function Password(props) {
  const { isPrefix, placeholder, onChange, name, required } = props;
  const [toggle, setToggle] = useState(true);
  const [type, setType] = useState("password");
  const lockicon = require("./../../public/lockIcon.svg");
  const eyeShowIcon = require("./../../public/eyeIcon.svg");
  const eyeCloseIcon = require("./../../public/eyeCloseIcon.svg");
  const [icon, setIcon] = useState(eyeShowIcon);
  function clickeyeIcon() {
    if (toggle) {
      setToggle(false);
      setType("text");
      setIcon(eyeCloseIcon);
    } else {
      setToggle(true);
      setType("password");
      setIcon(eyeShowIcon);
    }
  }
  return (
    <div className={styles.inputBox}>
      {isPrefix ? (
        <span className={styles.prefix}>
          <Image src={lockicon}></Image>
        </span>
      ) : (
        ""
      )}

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required={required}
      ></input>
      <span className={styles.suffix} onClick={clickeyeIcon}>
        <Image src={icon}></Image>
      </span>
    </div>
  );
}
