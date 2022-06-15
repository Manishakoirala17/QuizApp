import TabContainer from "./TabContentContainer";
import TabCard from "./../Tabs/TabCard";
import { useRouter } from "next/router";
export default function ActivityTests(props) {
  const { list, clockIcon, activetab } = props;
  const router = useRouter();

  return (
    <TabContainer>
      <p style={{ fontSize: "14pt", color: "#999999" }}>{list.length} Tests</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          gridGap: "12px",
        }}
      >
        {list.map((item) => {
          return (
            <TabCard
              title={item.title}
              subject={item.subject}
              date={item.date}
              time={item.time}
              noQuestion={item.noQuestion}
              clockIcon={clockIcon}
              activetab={activetab}
              status={item.status}
            ></TabCard>
          );
        })}
      </div>
    </TabContainer>
  );
}
