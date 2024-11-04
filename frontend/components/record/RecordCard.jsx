import * as S from "./Styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function RecordCard({ record }) {
  return (
    <S.RecordCardContainer>
      <S.RecordCardRoutine>
        {record.routine_title}
        <S.RecordCardMore icon={faEllipsisVertical} />
      </S.RecordCardRoutine>
      <S.RecordCardRoutineInfo>
        <S.RecordCardRoutineInfoText>
          {record.created_date}
        </S.RecordCardRoutineInfoText>
        <S.RecordCardRoutineInfoText>
          {record.routine_time}
        </S.RecordCardRoutineInfoText>
        <S.RecordCardRoutineInfoText>
          #{record.routine_place}
        </S.RecordCardRoutineInfoText>
      </S.RecordCardRoutineInfo>
      <S.RecordDescription>
        <S.RecordCardBookTitle>{record.book_title}</S.RecordCardBookTitle>
        {record.description}
      </S.RecordDescription>
    </S.RecordCardContainer>
  );
}
