import Image from "next/image";
import styles from "./../styles/Home.module.css";
export default function Logo() {
  const imgSrc = require("./../public/testeeLogo.svg");
  return (
    <div className={styles.logoImg}>
      <Image src={imgSrc}></Image>
    </div>
  );
}
