import ForgetPasswordComponent from "../components/ForgetPassword/forgetPass";
import styles from "./../styles/PasswordForm.module.css";
export default function ForgetPassword() {
  return (
    <div className={styles.container}>
      <ForgetPasswordComponent></ForgetPasswordComponent>
    </div>
  );
}
