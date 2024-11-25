import * as S from "./Styled";

export default function RecordMonthListModal({
  routine,
  handleCurrentRoutine,
  handleModalClose,
}) {
  const handleClick = (r) => {
    handleCurrentRoutine(r.id);
    handleModalClose();
  };
  return (
    <S.RecordMonthListModalContainer>
      {routine?.map((r, idx) => (
        <S.RecordMonthListModalText
          key={idx}
          $isBorder={idx === routine.length - 1}
          onClick={() => handleClick(r)}
        >
          {r.title}
        </S.RecordMonthListModalText>
      ))}
    </S.RecordMonthListModalContainer>
  );
}
