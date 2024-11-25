import { useState, useEffect } from "react";
import * as S from "./Styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { API } from "@/pages/api";
import RecordCard from "../record/RecordBookCard";

export default function RecordModal({ book, handleRecordClose }) {
  const [records, setRecords] = useState([]);
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

  return (
    <S.RecordModalContainer>
      <S.RecordBookTitle>
        {book.title}
        <S.RecordModalCloseButton icon={faXmark} onClick={handleRecordClose} />
      </S.RecordBookTitle>
      <S.RecordList>
        {records.map((record, idx) => {
          const routine = routineList.find(
            (routine) => routine.id === record.routine
          );
          return <RecordCard key={idx} record={record} routine={routine} />;
        })}
      </S.RecordList>
    </S.RecordModalContainer>
  );
}
