import QuizView from "../components/StartQuiz/quizView";
import Card from "../components/Card/card";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navbar/navigation";
import { useRouter } from "next/router";
export default function view() {
  const router = useRouter();

  function backClick() {
    router.back();
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation></Navigation>
      </header>
      <main className={styles.main}>
        <Card>
          <QuizView backClick={backClick}></QuizView>
        </Card>
      </main>
    </div>
  );
}
