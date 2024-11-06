import Header from "@/components/layout/Header";
import * as RS from "@/components/_styled/routineStyled";
import MakeRoutine from "@/components/routine/MakeRoutine";
import RoutineList from "@/components/routine/RoutineList";
export default function Routine() {
  return (
    <RS.RoutineContainer>
        <Header path="My Reading Routine" />
        <RS.RoutineContentContainer>
          <MakeRoutine />
          <RS.Line />
          <RoutineList />
        </RS.RoutineContentContainer>
    </RS.RoutineContainer>
  );
}
