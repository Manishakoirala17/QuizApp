import TabContainer from "./TabContentContainer";
import TabCard from "./../Tabs/TabCard";
import Search from "./searchField";
import styles from "./../../../styles/Card.module.css";
import { useEffect, useState } from "react";
export default function history(props) {
  const { list, clockIcon, activetab } = props;
  const [searchVal, setSearchVal] = useState("");

  function handleChange(event) {
    setSearchVal(event.target.value);
  }
  const getFiltered = () =>
    searchVal != ""
      ? list.filter((item) => item.title.includes(searchVal))
      : list;
  return (
    <TabContainer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          gridGap: "12px",
        }}
      >
        <div align="right" style={{ marginBottom: "20px" }}>
          <Search handleChange={handleChange}></Search>
        </div>

        {getFiltered().map((item) => {
          return (
            <div>
              <TabCard
                title={item.title}
                subject={item.subject}
                date={item.date}
                testAttendDate={item.testAttendDate}
                noattendQuestion={item.noattendQuestion}
                noQuestion={item.noQuestion}
                clockIcon={clockIcon}
                activetab={activetab}
                status={item.status}
              ></TabCard>
            </div>
          );
        })}
      </div>
    </TabContainer>
  );
}
