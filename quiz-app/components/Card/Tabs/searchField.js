import styles from "./../../../styles/Form.module.css";
import Image from "next/image";
export default function Search({ handleChange }) {
  const searchicon = require("./../../../public/search.svg");
  return (
    <div className={styles.inputBox}>
      <span className={styles.prefix}>
        <Image src={searchicon}></Image>
      </span>

      <input type="text" onChange={handleChange} name="search"></input>
    </div>
  );
}
