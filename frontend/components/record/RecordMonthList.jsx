import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";
import { useState } from "react";
import RecordMonthListModal from "./RecordMonthListModal";

export default function RecordMonthList({
  routine_list,
  currentRoutine,
  setCurrentRoutine,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrentRoutine = (id) => {
    setCurrentRoutine(id);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <S.RecordMonthListContainer>
      <S.RecordMonthListSearch
        onClick={() => setIsOpen(!isOpen)}
        $isActive={currentRoutine === 0}
      >
        {currentRoutine === 0 ? (
          <>루틴을 선택하세요.</>
        ) : (
          <>{routine_list.filter((r) => r.id === currentRoutine)[0].title}</>
        )}

        <S.RecordMonthListIcon icon={!isOpen ? faAngleUp : faAngleDown} />
      </S.RecordMonthListSearch>

      {isOpen && (
        <RecordMonthListModal
          routine={routine_list}
          handleCurrentRoutine={handleCurrentRoutine}
          handleModalClose={handleModalClose}
        />
      )}
    </S.RecordMonthListContainer>
  );
}
