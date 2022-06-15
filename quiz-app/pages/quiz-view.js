import QuizView from "../components/StartQuiz/quizView";
import Card from "../components/Card/card";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navbar/navigation";
export default function view() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation></Navigation>
      </header>
      <main className={styles.main}>
        <Card>
          <QuizView></QuizView>
        </Card>
      </main>
    </div>
  );
}
