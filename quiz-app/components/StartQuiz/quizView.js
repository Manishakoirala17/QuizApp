import Card from "./../Card/card.js";
import QuizContent from "./quizContentCard";
import styles from "./../../styles/Quiz.module.css";
import QuizExplain from "./quizExplain.js";
import Image from "next/image";
import Button from "./../FormFields/button";
import { useRouter } from "next/router.js";

export default function QuizView({ backClick }) {
  const arrowIcon = require("./../../public/arrow.svg");
  const router = useRouter();
  function onStartTestClick() {
    router.push("/questions");
  }

  return (
    <div>
      <header>
        <div>
          <Image
            src={arrowIcon}
            onClick={backClick}
            style={{ cursor: "pointer" }}
          ></Image>
        </div>
      </header>
      <main>
        <QuizContent></QuizContent>
        <div className={styles.guideContainer}>
          <QuizExplain></QuizExplain>
        </div>
      </main>
      <footer className={styles.footer}>
        <Button
          buttonName={"Start Test"}
          handleClick={onStartTestClick}
        ></Button>
      </footer>
    </div>
  );
}
