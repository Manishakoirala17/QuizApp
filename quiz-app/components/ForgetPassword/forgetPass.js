import styles from "./../../styles/PasswordForm.module.css";
import Image from "next/image";
import Button from "./../FormFields/button";
import { useState } from "react";
export default function ForgetPasswordComponent() {
  const [isVerified, setIsVerified] = useState(false);
  const items = [];
  const otpDp = [];
  const [otp, setOtp] = useState([]);
  const backIcon = require("./../../public/arrow.svg");
  const tickIcon = require("./../../public/tickIcon.svg");
  function onChange(e) {
    otpDp[e.target.name] = e.target.value;
    setOtp(otpDp);
  }
  const verifiedBtn = {
    backgroundColor: "#36B732",
    color: "#FFFFFF",
  };
  function verifyOtp() {
    setIsVerified(true);
  }
  for (let index = 0; index < 5; index++) {
    items.push(
      <div>
        <input
          type={"text"}
          className={styles.fbBox}
          name={index}
          onChange={onChange}
        ></input>
      </div>
    );
  }
  return (
    <div className={styles.fpContainer}>
      <div className={styles.fpHeader}></div>
      <main>
        <div className={styles.fbMain}>
          <div>
            <h3 style={{ fontSize: "18pt" }}>Forgot password?</h3>
            <p style={{ fontSize: "14pt", color: "#666666" }}>
              To change password, enter the verification code to your mail id
            </p>
          </div>
          <div>
            <div className={styles.fbBoxContainer}>{items}</div>
            <p style={{ fontSize: "14pt", color: "#666666", display: "block" }}>
              Resend code in 2:57
            </p>
          </div>

          <div>
            {isVerified ? (
              <Button
                buttonName={"VERIFied"}
                icon={tickIcon}
                style={verifiedBtn}
              ></Button>
            ) : (
              <Button buttonName={"VERIFY"} handleClick={verifyOtp}></Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
