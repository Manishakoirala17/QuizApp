import SignupComponent from "./../components/signupComponent";
import styles from "./../styles/PasswordForm.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <SignupComponent></SignupComponent>
      </div>
    </div>
  );
}
