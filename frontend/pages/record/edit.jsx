import * as RTS from "@/components/_styled/routineStyled";
import Book from "@/components/routine/routineFinish/Book";
import * as CRTS from "@/components/routine/Styled";
import { useEffect, useState } from "react";
import { API } from "../api";
import { useRouter } from "next/router";
import Memo from "@/components/routine/routineFinish/Memo";

export default function Edit() {
  const router = useRouter();
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("record"))
  );

  const [routine, setRoutine] = useState({});
  const fetchRoutine = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/routinelist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      setRoutine(data.find((routine) => routine.id === record.routine));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRoutine();
  }, []);

  const [book, setBook] = useState(record.book.title);
  const [memo, setMemo] = useState(record.memo);

  const fetchRecordEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.put(
        `/record/delete/${router.query.id}`,
        {
          title: book,
          memo: memo,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      router.push("/record");
    } catch (e) {
      console.log(e);
    }
  };

  const date = record.date;
  const formatedDate = date.split("T")?.[0];
  const year = formatedDate?.split("-")[0];
  const month = formatedDate?.split("-")[1];
  const day = formatedDate?.split("-")[2];

  return (
    <RTS.RoutineFinishPage>
      <RTS.RoutineFinishContentContainer>
        <RTS.RoutineInfo>
          <RTS.Date>
            {year}년 {month}월 {day}일
          </RTS.Date>
          <RTS.Title>{routine.title}</RTS.Title>
        </RTS.RoutineInfo>

        <Book setBook={setBook} initial={book} />

        <CRTS.InputContainer>
          <CRTS.Label>Where</CRTS.Label>
          <CRTS.DropdownContainer style={{ color: "darkgray" }}>
            {record.location}
          </CRTS.DropdownContainer>
        </CRTS.InputContainer>

        <Memo setMemo={setMemo} initial={memo} />

        <RTS.SubmitButton onClick={fetchRecordEdit} $isActive={!memo}>
          완료
        </RTS.SubmitButton>
      </RTS.RoutineFinishContentContainer>
    </RTS.RoutineFinishPage>
  );
}
