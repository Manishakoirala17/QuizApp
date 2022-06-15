import styles from "./../../../styles/Card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
export default function TabCard(props) {
  const router = useRouter();
  const {
    title,
    subject,
    date,
    time,
    noQuestion,
    clockIcon,
    noattendQuestion,
    testAttendDate,
    activetab,
    status,
  } = props;
  console.log(status);
  function handleClick() {
    router.push("/quiz-view");
  }
  return (
    <div className={styles.contentbox} onClick={handleClick}>
      <div className={styles.cardTabContainer}>
        <div className={styles.contentDetails1}>
          <p className={styles.title}>{title}</p>
          <div className={styles.subtitle}>
            <div> {subject}</div>

            <div>{date}</div>
          </div>
        </div>

        {activetab == "activeTests" ? (
          <div className={styles.contentDetails2}>
            <div style={{ display: "flex" }}>
              <Image src={clockIcon}></Image>
              <p style={{ marginLeft: "4px" }}>{time}</p>
            </div>
            <div>
              <p>{noQuestion} Questions</p>
            </div>
          </div>
        ) : (
          <div className={styles.contentDetails2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: "10px",
              }}
            >
              <p
                style={
                  status == "completed"
                    ? {
                        backgroundColor: "#028F66",
                        color: "white",
                        padding: "4px",
                        textTransform: "Uppercase",
                      }
                    : {
                        backgroundColor: "#CB5542",
                        color: "white",
                        padding: "4px",
                        textTransform: "Uppercase",
                      }
                }
              >
                {status}
              </p>
              <p>
                {noattendQuestion}/{noQuestion}
              </p>
              <p>{testAttendDate}</p>
            </div>
          </div>
        )}
      </div>
      {status == "completed" || status == "" ? (
        ""
      ) : (
        <div
          className={
            status == "expired" ? styles.expiredDiv : styles.todayExpireDiv
          }
        >
          <p>Expired by {date}</p>
        </div>
      )}
    </div>
  );
}
