import Password from "./FormFields/passwordField";
import styles from "./../styles/Form.module.css";
import Button from "./FormFields/button";
export default function CreatePasswordComponent() {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <p className={styles.title}>Create New Password</p>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consetetur dor
          </p>
        </div>

        <div>
          <Password isPrefix={false} placeholder={"Create password"}></Password>
        </div>
        <div>
          <Password isPrefix={false} placeholder={"Repeat password"}></Password>
        </div>
        <div></div>
        <div></div>
        <div>
          <Button buttonName="Create Password"></Button>
        </div>
      </div>
    </div>
  );
}
