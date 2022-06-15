import Card from "../components/Card/card";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navbar/navigation";
import Testinfo from "./../components/StartQuiz/QuestionsView/info/infopage";
export default function view() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation></Navigation>
      </header>
      <main className={styles.main}>
        <Card>
          <Testinfo></Testinfo>
        </Card>
      </main>
    </div>
  );
}
