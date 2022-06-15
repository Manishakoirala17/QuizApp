import styles from "./../../../../styles/Quiz.module.css";
import Image from "next/image";
export default function TestInfo() {
  const closeIcon = require("./../../../../public/closeIcon.svg");
  const feedBackIcon = require("./../../../../public/feedback2.svg");
  const answerStyle = {
    backgroundColor: "#F1FFFB",
    border: "1px solid #007251",
    color: "#007251",
  };
  const currentQuestion = {
    backgroundColor: "#007251",
    border: "1px solid #007251",
    color: "#FFFFFF",
  };
  return (
    <div>
      <main>
        <div
          className={styles.guideContainer}
          style={{ display: "grid", gridGap: "30px", paddingBottom: "500px" }}
        >
          <div className={styles.infoHeader}>
            <div>
              <Image src={closeIcon}></Image>
            </div>
            <div style={{ flex: 1, fontSize: "18pt", marginLeft: "50px" }}>
              Test Info
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.noBox}>
              1
              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "75%",
                  width: "100px",
                }}
              >
                <Image src={feedBackIcon}></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className={styles.infoFooter}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid #00000033 ",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                width: "20px",
              }}
            ></div>
            <div style={{ marginLeft: "10px" }}>- Not Answered</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid #007251 ",

                backgroundColor: "#007251",
                width: "20px",
              }}
            ></div>
            <div style={{ marginLeft: "10px" }}>- Current Question</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid #007251 ",
                backgroundColor: "#007251",
                width: "20px",
                height: "20px",
              }}
            ></div>
            <div style={{ marginLeft: "10px" }}>- Answered</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <Image src={feedBackIcon}></Image>
            </div>
            <div style={{ marginLeft: "10px" }}>- Feedback Provided</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
