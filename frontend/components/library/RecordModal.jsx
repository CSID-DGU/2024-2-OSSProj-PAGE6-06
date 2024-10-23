import { useState, useEffect } from "react";
import * as S from "./Styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { API } from "@/pages/api";
import RecordCard from "../record/RecordBookCard";

export default function RecordModal({ book, handleRecordClose }) {
  // const [records, setRecords] = useState([]);
  // dummy
  const records = [
    {
      id: 1,
      routine_title: "통학의 서러움",
      description:
        "이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지",
    },
    {
      id: 2,
      routine_title: "통학의 서러움",
      description: "그렇다",
    },
    {
      id: 3,
      routine_title: "하교의 즐거움",
      description: "그렇다",
    },
    {
      id: 4,
      routine_title: "통학의 서러움",
      description:
        "이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지 300자는 어느 정도?? 이 편지는 어쩌구 저쩌구 행운의 편지",
    },
  ];

  const fetchRecords = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;
      // setBooks(data);
      // console.log(records, book);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <S.RecordModalContainer>
      <S.RecordBookTitle>
        {book.title}
        <S.RecordModalCloseButton icon={faXmark} onClick={handleRecordClose} />
      </S.RecordBookTitle>
      <S.RecordList>
        {records.map((record, idx) => (
          <RecordCard key={idx} record={record} />
        ))}
      </S.RecordList>
    </S.RecordModalContainer>
  );
}
