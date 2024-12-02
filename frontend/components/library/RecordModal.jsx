import { useState, useEffect } from "react";
import * as S from "./Styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { API } from "@/pages/api";
import RecordCard from "../record/RecordBookCard";
import { motion, AnimatePresence } from "framer-motion";

export default function RecordModal({ book, handleRecordClose }) {
  const [records, setRecords] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const fetchRecords = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/mylibrary/books/record/${book.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      setRecords(data);
    } catch (e) {
      console.log(e);
    }
  };

  const [routineList, setRoutineList] = useState([]);
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

  useEffect(() => {
    fetchRecords();
    fetchRoutineList();
  }, []);

  const handleDelayedClose = () => {
    setIsVisible(false); // isVisible을 false로 변경
    setTimeout(() => {
      handleRecordClose(); // 0.5초 뒤에 handleRecordClose 실행
    }, 500); // 500ms 지연
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }} // 모달이 아래에서 시작
          animate={{ y: 0, opacity: 1 }} // 모달이 중앙으로 이동
          exit={{ y: "100%", opacity: 0 }} // 모달이 아래로 사라짐
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <S.RecordModalContainer>
            <S.RecordBookTitle>
              {book.title}
              <S.RecordModalCloseButton
                icon={faXmark}
                onClick={handleDelayedClose}
              />
            </S.RecordBookTitle>
            <S.RecordList>
              {records.length === 0 ? (
                <>작성된 기록이 없습니다.</>
              ) : (
                <>
                  {records.map((record, idx) => {
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
                        <RecordCard
                          key={idx}
                          record={record}
                          routine={routine}
                        />
                      </motion.div>
                    );
                  })}
                </>
              )}
            </S.RecordList>
          </S.RecordModalContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
