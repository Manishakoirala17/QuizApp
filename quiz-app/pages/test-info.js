import Card from "../components/Card/card";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navbar/navigation";
import Testinfo from "./../components/StartQuiz/QuestionsView/info/infopage";
import { useRouter } from "next/router";
export default function view() {
  const router = useRouter();

  function clickCloseIcon() {
    router.back();
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation></Navigation>
      </header>
      <main className={styles.main}>
        <Card>
          <Testinfo clickCloseIcon={clickCloseIcon}></Testinfo>
        </Card>
      </main>
    </div>
  );
}
