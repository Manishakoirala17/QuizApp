import LoginComponent from "../components/loginComponent";
import Logo from "./../components/logo";
import styles from "./../styles/Form.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo></Logo>
      </div>
      <div className={styles.loginContainer}>
        <LoginComponent showIcon={true}></LoginComponent>
      </div>
    </div>
  );
}
