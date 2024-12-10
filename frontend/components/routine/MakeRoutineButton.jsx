import React from "react";
import * as S from "./Styled";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function MakeRoutine(props) {
  return (
    <Link
      href="/routine/makeRoutine"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <S.MakeRoutineButton>
        <S.MakeRoutineButtonText>Make Reading Routine</S.MakeRoutineButtonText>
        <S.PlusIcon icon={faPlus} />
      </S.MakeRoutineButton>
    </Link>
  );
}
