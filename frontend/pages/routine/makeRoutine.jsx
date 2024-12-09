import React from "react";
import * as RS from "@/components/_styled/routineStyled";
import MakeRoutineForm from "@/components/routine/makeRoutine/MakeRoutineForm";

export default function makeRoutine() {
  return (
    <RS.RoutineContainer>
      <RS.MakeRoutineContentContainer>
        <RS.PageTitle>Make reading routine</RS.PageTitle>
        <MakeRoutineForm />
      </RS.MakeRoutineContentContainer>
    </RS.RoutineContainer>
  );
}
