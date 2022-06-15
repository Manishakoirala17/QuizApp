import styles from "./../../styles/Navigation.module.css";
import Image from "next/image";
import { useState } from "react";
export default function Navigation() {
  const [isShowuserDetail, setToggle] = useState(false);
  function clickProfilePic() {
    setToggle(!isShowuserDetail);
  }
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <h2 style={{ color: "white" }}>Testee</h2>
      </div>
      <div className={styles.profileNav}>
        <div className={styles.profile} onClick={clickProfilePic}>
          <Image
            src={require("./../../public/contact.png")}
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          ></Image>
          {isShowuserDetail ? (
            <div className={styles.content}>
              <p>manishakoirala</p>
              <p>manishaganesh17@gmail.com</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.notification}>
          <Image
            src={require("./../../public/notification.svg")}
            style={{ borderRadius: "50%" }}
          ></Image>
        </div>
        <div className={styles.logout}>Logout</div>
      </div>
    </div>
  );
}
