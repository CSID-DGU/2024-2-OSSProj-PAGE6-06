import * as S from "./Styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function RecordCard({ record, routine }) {
  return (
    <S.RecordCardContainer>
      <S.RecordCardRoutine>
        {routine?.title}
        {/* <S.RecordCardMore icon={faEllipsisVertical} /> */}
      </S.RecordCardRoutine>
      <S.RecordDescription>{record.memo}</S.RecordDescription>
    </S.RecordCardContainer>
  );
}
