import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as RS from "../../components/_styled/recordStyled";
import { useEffect, useState } from "react";
import RecordCalendar from "@/components/record/RecordCalendar";
import RecordCard from "@/components/record/RecordCard";

import { motion } from "framer-motion";
import RecordMonthList from "@/components/record/RecordMonthList";

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
      routines: [
        {
          routine_title: "루틴명",
          routine_time: "30분",
          routine_place: "운동장",
          created_date: "2024.10.19",
          book_title: "책 제목",
          description: "루틴 설명",
        },
        {
          routine_title: "루틴명222",
          routine_time: "30분",
          routine_place: "운동장",
          created_date: "2024.10.19",
          book_title: "책 제목",
          description:
            "계속 살아가야 하므로 우리는 어떤 모습을 오래 붙잡아서는 안 되었다. 사라지는 것은 좀처럼 지체하는 법이 없기 때문에, 사라지는 것을 가장 정확하게 표현하는 소리는 뿅 정도이기 때문에. 하지만 순간이 쌓인다는 사실만큼이나 마음이 놓이는 것은 없었다",
        },
      ],
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

  const [currentRoutine, setCurrentRoutine] = useState("all");
  const routine_list = [
    {
      id: 1,
      title: "루틴명",
      time: "30분",
      place: "운동장",
    },
    {
      id: 2,
      title: "루틴명222",
      time: "30분",
      place: "운동장",
    },
    {
      id: 3,
      title: "루틴명22233",
      time: "30분",
      place: "운동장",
    },
  ];

  const fetchRoutineList = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;
      // setRoutineList(data);
      console.log(currentRoutine);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCurrentRoutine = (id) => {
    setCurrentRoutine(id);
  };

  const [routineData, setRoutineData] = useState([]);
  const routine_data = [
    {
      routine_title: "루틴명",
      routine_time: "30분",
      routine_place: "운동장",
      created_date: "2024.10.19",
      book_title: "책 제목",
      description: "루틴 설명",
    },
    {
      routine_title: "루틴명",
      routine_time: "30분",
      routine_place: "운동장",
      created_date: "2024.10.19",
      book_title: "책 제목",
      description: "루틴 설명2",
    },
  ];

  const fetchRoutineData = async () => {
    try {
      // const response = await API.get(``); // 선택한 루틴별로 요청
      // const data = response.data;
      // setRoutineData(data);
      console.log(routine_data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRoutineList();
    fetchRoutineData();
  }, [currentRoutine]);

  const [isSelect, setIsSelect] = useState(new Date());
  const handleDateClick = (date) => {
    setIsSelect(date);
  };
  const selectedCalendarData = calendar_data.find(
    (item) => new Date(item.date).getDate() === isSelect.getDate()
  );
  const selectedCalendarRoutine = selectedCalendarData
    ? selectedCalendarData.routines
    : [];

  // const [editModal, setEditModal] = useState(false);

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
            <RecordCalendar
              data={calendar_data}
              isSelect={isSelect}
              setIsSelect={handleDateClick}
            />
          ) : (
            <RecordMonthList
              routine_list={routine_list}
              currentRoutine={currentRoutine}
              setCurrentRoutine={handleCurrentRoutine}
            />
          )}
        </RS.RecordContents>
        <RS.RecordList>
          {currentTap === "month" && selectedCalendarRoutine.length > 0 ? (
            selectedCalendarRoutine.map((routine, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} // 초기 상태: 투명하고 아래에서 시작
                animate={{ opacity: 1, y: 0 }} // 애니메이션: 불투명해지고 원래 위치로 올라옴
                exit={{ opacity: 0, y: 20 }} // 종료 상태: 투명하고 아래로
                transition={{ duration: 0.3, delay: idx * 0.1 }} // 각 항목에 지연을 주어 순차적으로 나타남
              >
                <RecordCard record={routine} />
              </motion.div>
            ))
          ) : currentTap === "routine" ? (
            routine_data.map((routine, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <RecordCard record={routine} />
              </motion.div>
            ))
          ) : (
            <></>
          )}
        </RS.RecordList>
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}
