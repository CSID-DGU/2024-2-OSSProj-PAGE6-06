import * as RTS from "@/components/_styled/routineStyled";
import Book from "@/components/routine/routineFinish/Book";
import * as CRTS from "@/components/routine/Styled";
import { useEffect, useState } from "react";
import { API } from "../api";
import { useRouter } from "next/router";
import Memo from "@/components/routine/routineFinish/Memo";

export default function Edit() {
  const router = useRouter();
  const record = {
    memo: "dddd",
    book: "ㅊ",
    where: "장소다!",
  };
  const [book, setBook] = useState(record.book);
  const [memo, setMemo] = useState(record.memo);

  const fetchRecordEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      //   const response = await API.put(
      //     `/record/delete/${router.query.id}`,
      //     {
      //       book: book,
      //       memo: memo,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Token ${token}`,
      //       },
      //     }
      //   );
      console.log({
        book: book,
        memo: memo,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <RTS.RoutineFinishPage>
      <RTS.RoutineFinishContentContainer>
        <RTS.RoutineInfo>
          <RTS.Date>날짜인디</RTS.Date>
          <RTS.Title>루틴인디</RTS.Title>
        </RTS.RoutineInfo>

        <Book setBook={setBook} initial={book} />

        <CRTS.InputContainer>
          <CRTS.Label>Where</CRTS.Label>
          <CRTS.DropdownContainer style={{ color: "darkgray" }}>
            {record.where}
          </CRTS.DropdownContainer>
        </CRTS.InputContainer>

        <Memo setMemo={setMemo} initial={memo} />

        <RTS.SubmitButton
          onClick={fetchRecordEdit}
          $isActive={book != "" && memo !== ""}
        >
          완료
        </RTS.SubmitButton>
      </RTS.RoutineFinishContentContainer>
    </RTS.RoutineFinishPage>
  );
}
