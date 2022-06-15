import EmailField from "./FormFields/emailField";
import Password from "./FormFields/passwordField";
import styles from "./../styles/Form.module.css";
import Button from "./FormFields/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function LoginComponent() {
  const router = useRouter();
  const [loginDetail, setLoginDetail] = useState({ name: "" });
  const [isLogin, setLogin] = useState(true);
  function clickSignUp() {
    router.push("./signup");
  }
  function clickForgetPassword() {
    router.push("./forget-password");
  }
  function clickLogin() {
    if (!isLogin) {
      alert("error occured");
      return;
    }
    router.push("./home");
  }
  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>
        <h3 style={{ fontSize: "18pt" }}>Login</h3>
      </div>
      <div>
        <EmailField placeholder={"Enter your email"}></EmailField>
      </div>
      <div>
        <Password isPrefix={true}></Password>
      </div>
      <div className={styles.forgetPasswordBox} align="right">
        <Link href={"./forget-password"}>Forget password?</Link>
      </div>
      <div>
        <Button buttonName="Login" handleClick={clickLogin}></Button>
      </div>
      <div className={styles.signUpBox}>
        <div className={styles.txt_1}>Don't have an account?</div>
        <div className={styles.txt_2} onClick={clickSignUp}>
          Signup
        </div>
      </div>
    </div>
  );
}
