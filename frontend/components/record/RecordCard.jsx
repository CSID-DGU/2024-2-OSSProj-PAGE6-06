import { useEffect, useRef, useState } from "react";
import * as S from "./Styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import RecordEditDropbox from "./RecordEditDropbox";

export default function RecordCard({ record, routine }) {
  const [editModal, setEditModal] = useState(false);
  const editModalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editModalRef.current && !editModalRef.current.contains(e.target)) {
        setEditModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const date = record.date;
  const date_ = date?.split("T")[0];
  const formmatedDate = date_?.replace(/-/g, ".");

  return (
    <S.RecordCardWrapper ref={editModalRef}>
      <S.RecordCardContainer>
        <S.RecordCardRoutine>
          {routine?.title}
          <S.RecordCardMore
            icon={faEllipsisVertical}
            onClick={() => setEditModal(!editModal)}
          />
          {editModal && <RecordEditDropbox editModalRef={editModalRef} />}
        </S.RecordCardRoutine>
        <S.RecordCardRoutineInfo>
          <S.RecordCardRoutineInfoText>
            {formmatedDate}
          </S.RecordCardRoutineInfoText>
          <S.RecordCardRoutineInfoText>
            {routine?.time}분
          </S.RecordCardRoutineInfoText>
          <S.RecordCardRoutineInfoText>
            # {record.location}
          </S.RecordCardRoutineInfoText>
        </S.RecordCardRoutineInfo>
        <S.RecordDescription>
          <S.RecordCardBookTitle>{record.book_title}</S.RecordCardBookTitle>
          {record.memo}
        </S.RecordDescription>
      </S.RecordCardContainer>
    </S.RecordCardWrapper>
  );
}
