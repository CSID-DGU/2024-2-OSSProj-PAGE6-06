import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as RS from "../../components/_styled/recordStyled";
import { useEffect, useState } from "react";
import RecordCalendar from "@/components/record/RecordCalendar";
import RecordCard from "@/components/record/RecordCard";

import { motion } from "framer-motion";
import RecordMonthList from "@/components/record/RecordMonthList";
import { API } from "../api";

export default function Record() {
  const [currentTap, setCurrentTap] = useState("month");
  const tapList = [
    { type: "month", content: "월" },
    { type: "routine", content: "루틴" },
  ];
  const handleCurrentTap = (type) => {
    setCurrentTap(type);
  };

  const [calendarData, setCalendarData] = useState([]);
  const [isSelect, setIsSelect] = useState(new Date());

  const fetchCalendarData = async () => {
    try {
      const token = localStorage.getItem("token");
      const year = new Date(isSelect).getFullYear();
      const month = new Date(isSelect).getMonth() + 1;

      const response = await API.get(`/record/month/${year}/${month}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      setCalendarData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDateClick = (date) => {
    setIsSelect(date);
  };

  const selectedCalendarData = calendarData.filter(
    (item) => new Date(item.date).getDate() === isSelect.getDate()
  );

  useEffect(() => {
    fetchCalendarData();
  }, []);

  const [routineList, setRoutineList] = useState([]);
  const [currentRoutine, setCurrentRoutine] = useState(0);

  const fetchRoutineList = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/routinelist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      setRoutineList(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCurrentRoutine = (id) => {
    setCurrentRoutine(id);
  };

  const [routineData, setRoutineData] = useState([]);
  const [filteredRoutineData, setFilteredRoutineData] = useState([]);

  const fetchRoutineData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/record/all`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      const mergedCompletions = data
        .reduce((acc, routine) => acc.concat(routine.completions), [])
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      setRoutineData(mergedCompletions);
      setFilteredRoutineData(mergedCompletions);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRoutineList();
    fetchRoutineData();
  }, []);

  useEffect(() => {
    if (currentRoutine === 0) {
      setFilteredRoutineData(routineData);
    } else {
      const filterdData = routineData.filter(
        (record) => record.routine === currentRoutine
      );
      setFilteredRoutineData(filterdData);
    }
  }, [currentRoutine]);

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
              data={calendarData}
              isSelect={isSelect}
              setIsSelect={handleDateClick}
            />
          ) : (
            <RecordMonthList
              routine_list={routineList}
              currentRoutine={currentRoutine}
              setCurrentRoutine={handleCurrentRoutine}
            />
          )}
        </RS.RecordContents>
        <RS.RecordList>
          {currentTap === "month" && selectedCalendarData?.length > 0 ? (
            selectedCalendarData.map((record, idx) => {
              const routine = routineList.find(
                (routine) => routine.id === record.routine
              );
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} // 초기 상태: 투명하고 아래에서 시작
                  animate={{ opacity: 1, y: 0 }} // 애니메이션: 불투명해지고 원래 위치로 올라옴
                  exit={{ opacity: 0, y: 20 }} // 종료 상태: 투명하고 아래로
                  transition={{ duration: 0.3, delay: idx * 0.1 }} // 각 항목에 지연을 주어 순차적으로 나타남
                >
                  <RecordCard record={record} routine={routine} />
                </motion.div>
              );
            })
          ) : currentTap === "routine" ? (
            filteredRoutineData.map((record, idx) => {
              const routine = routineList.find(
                (routine) => routine.id === record.routine
              );
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <RecordCard record={record} routine={routine} />
                </motion.div>
              );
            })
          ) : (
            <></>
          )}
        </RS.RecordList>
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}
