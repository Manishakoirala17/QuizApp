import { useState } from "react";
import styles from "./../../../styles/Card.module.css";
export default function Tabs({ handleTab1Click, handleTab2Click, activetab }) {
  return (
    <div className={styles.tabContainer}>
      <div
        className={activetab == "activeTests" ? styles.tabActive : styles.tab}
        onClick={handleTab1Click}
      >
        <p>Active Tests</p>
      </div>
      <div
        className={activetab == "history" ? styles.tabActive : styles.tab}
        onClick={handleTab2Click}
      >
        <p>History</p>
      </div>
    </div>
  );
}
