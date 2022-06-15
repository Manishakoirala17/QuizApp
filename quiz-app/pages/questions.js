import Card from "../components/Card/card";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navbar/navigation";
import QuestionPage from "../components/StartQuiz/QuestionsView/questionPage";
export default function view() {
  const questionList = [
    {
      questionNo: 1,
      question:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam lorem ips ?",
      options: [
        {
          optionNo: 1,
          option: "Lorem ipsum",
          isCorrect: false,
        },
        {
          optionNo: 2,
          option: "Lorem ipsum dolor sit amet, consetetur sadips",
          isCorrect: false,
        },
        {
          optionNo: 3,
          option: "Lorem ipsum dolor sit amet dolor sit",
          isCorrect: true,
        },
        {
          optionNo: 4,
          option: "Dolor lorem nsetetur sadips",
          isCorrect: false,
        },
      ],
    },
    {
      questionNo: 2,
      question:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam lorem ips ?",
      options: [
        {
          optionNo: 1,
          option: "Lorem ipsum",
          isCorrect: false,
        },
        {
          optionNo: 2,
          option: "Lorem ipsum dolor sit amet, consetetur sadips",
          isCorrect: false,
        },
        {
          optionNo: 3,
          option: "Lorem ipsum dolor sit amet dolor sit",
          isCorrect: true,
        },
        {
          optionNo: 4,
          option: "Dolor lorem nsetetur sadips",
          isCorrect: false,
        },
      ],
    },
    {
      questionNo: 3,
      question:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam lorem ips ?",
      options: [
        {
          optionNo: 1,
          option: "Lorem ipsum",
          isCorrect: false,
        },
        {
          optionNo: 2,
          option: "Lorem ipsum dolor sit amet, consetetur sadips",
          isCorrect: false,
        },
        {
          optionNo: 3,
          option: "Lorem ipsum dolor sit amet dolor sit",
          isCorrect: true,
        },
        {
          optionNo: 4,
          option: "Dolor lorem nsetetur sadips",
          isCorrect: false,
        },
      ],
    },
    {
      questionNo: 4,
      question:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam lorem ips ?",
      options: [
        {
          optionNo: 1,
          option: "Lorem ipsum",
          isCorrect: false,
        },
        {
          optionNo: 2,
          option: "Lorem ipsum dolor sit amet, consetetur sadips",
          isCorrect: false,
        },
        {
          optionNo: 3,
          option: "Lorem ipsum dolor sit amet dolor sit",
          isCorrect: true,
        },
        {
          optionNo: 4,
          option: "Dolor lorem nsetetur sadips",
          isCorrect: false,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation></Navigation>
      </header>
      <main className={styles.main}>
        <Card>
          <QuestionPage list={questionList}></QuestionPage>
        </Card>
      </main>
    </div>
  );
}
