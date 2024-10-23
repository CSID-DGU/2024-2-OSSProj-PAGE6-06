import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  console.log(routine_list);

  return (
    <S.RecordMonthListContainer>
      <S.RecordMonthListSearch
        onClick={() => setIsOpen(!isOpen)}
        $isActive={currentRoutine === "all"}
      >
        {currentRoutine === "all" ? (
          <>루틴을 선택하세요.</>
        ) : (
          <>{currentRoutine}</>
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
