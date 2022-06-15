import Tab from "./Tab";
import Image from "next/image";
import { useState } from "react";
import ActivityTests from "./ActiveTests";
import History from "./History";
export default function TabList() {
  const [activetab, setActiveTab] = useState("activeTests");
  const clockIcon = require("./../../../public/clock.svg");
  const activityList = [
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      time: "1h 30m",
      noQuestion: "15",
      status: "todayExpire",
    },
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      time: "1h 30m",
      noQuestion: "15",
      status: "",
    },
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      time: "1h 30m",
      noQuestion: "15",
      status: "",
    },
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      time: "1h 30m",
      noQuestion: "15",
      status: "",
    },
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      time: "1h 30m",
      noQuestion: "15",
      status: "",
    },
  ];
  const history = [
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      status: "completed",
      noattendQuestion: "10",
      noQuestion: "15",
      testAttendDate: "20 may",
    },
    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      status: "completed",
      noattendQuestion: "10",
      noQuestion: "15",
      testAttendDate: "20 may",
    },

    {
      title: "Electromagnetic & electro waves",
      subject: "PHYSICS",
      date: "26 May",
      status: "expired",
      noattendQuestion: "10",
      noQuestion: "15",
      testAttendDate: "20 may",
    },
  ];
  function handleTab1Click() {
    setActiveTab("activeTests");
  }
  function handleTab2Click() {
    setActiveTab("history");
  }
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "auto", gridGap: "40px" }}
    >
      <Tab
        handleTab1Click={handleTab1Click}
        handleTab2Click={handleTab2Click}
        activetab={activetab}
      ></Tab>
      {activetab == "activeTests" ? (
        <ActivityTests
          list={activityList}
          clockIcon={clockIcon}
          activetab={activetab}
        ></ActivityTests>
      ) : (
        <History
          list={history}
          clockIcon={clockIcon}
          activetab={activetab}
        ></History>
      )}
    </div>
  );
}
