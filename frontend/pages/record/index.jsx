import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as RS from "../../components/_styled/recordStyled";
import { useState } from "react";
import RecordCalendar from "@/components/record/RecordCalendar";

export default function Record() {
  const [currentTap, setCurrentTap] = useState("month");
  const tapList = [
    { type: "month", content: "월" },
    { type: "routine", content: "루틴" },
  ];
  const handleCurrentTap = (type) => {
    setCurrentTap(type);
  };

  const calendar_data = [
    {
      date: "Sat Oct 19 2024 00:00:00 GMT+0900",
      percent: 100,
      routines: [],
    },
    {
      date: "Sun Oct 20 2024 00:00:00 GMT+0900",
      percent: 70,
      routines: [],
    },
    {
      date: "Mon Oct 21 2024 00:00:00 GMT+0900",
      percent: 60,
      routines: [],
    },
    {
      date: "Tus Oct 22 2024 00:00:00 GMT+0900",
      percent: 50,
      routines: [],
    },
    {
      date: "Wed Oct 23 2024 00:00:00 GMT+0900",
      percent: 40,
      routines: [],
    },
  ];

  return (
    <MS.MainWrapper>
      <Header path="My Record" />
      <MS.MainContainer>
        {/* type 선택 */}
        <RS.RecordTap>
          {tapList.map((tap, idx) => (
            <RS.RecordTapButton
              key={idx}
              $isActive={tap.type === currentTap}
              onClick={() => handleCurrentTap(tap.type)}
            >
              {tap.content}별 루틴
            </RS.RecordTapButton>
          ))}
        </RS.RecordTap>

        {/* type별 루틴 */}
        <RS.RecordContents>
          {currentTap === "month" ? (
            <RecordCalendar data={calendar_data} />
          ) : null}
        </RS.RecordContents>
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}
