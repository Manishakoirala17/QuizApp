import CreatePasswordComponent from "../components/createPassword";
import styles from "./../styles/PasswordForm.module.css";

export default function CreatePassword() {
  return (
    <div className={styles.container}>
      <div className={styles.passwordForm}>
        <CreatePasswordComponent></CreatePasswordComponent>
      </div>
    </div>
  );
}
