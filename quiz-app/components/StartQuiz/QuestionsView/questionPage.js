import styles from "./../../../styles/Quiz.module.css";
import Question from "./question";
import QuestionHeader from "./QuestionHeader";
import Footer from "./QuestionFooter";
import { useState } from "react";
import { useRouter } from "next/router";
export default function QuestionPage({ list }) {
  const noOfQuestions = list.length;
  const [count, setCount] = useState(1);
  const router = useRouter();
  function nextButnClick() {
    setCount(count + 1);
  }
  function previousButnClick() {
    setCount(count - 1);
  }
  function infoBtnCLick() {
    router.push("/test-info");
  }
  function onSubmit() {}

  return (
    <div>
      <header style={{ marginBottom: "16px" }}>
        <QuestionHeader infoBtnCLick={infoBtnCLick}></QuestionHeader>
      </header>
      <main>
        <Question count={count} question={list[count - 1]}></Question>
      </main>
      <footer style={{ borderTop: "1px solid #cccccc" }}>
        <Footer
          count={count}
          noOfQuestion={noOfQuestions}
          nextButnClick={nextButnClick}
          previousButnClick={previousButnClick}
          submitBtnClick={onSubmit}
        ></Footer>
      </footer>
    </div>
  );
}
