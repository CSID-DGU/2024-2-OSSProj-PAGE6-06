import * as S from "./Styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function RecordCard({ record }) {
  return (
    <S.RecordCardContainer>
      <S.RecordCardRoutine>
        {record.routine_title}
        <S.RecordCardMore icon={faEllipsisVertical} />
      </S.RecordCardRoutine>
      <S.RecordDescription>{record.description}</S.RecordDescription>
    </S.RecordCardContainer>
  );
}
