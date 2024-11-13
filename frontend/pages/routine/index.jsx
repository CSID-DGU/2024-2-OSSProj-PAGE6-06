import Header from "@/components/layout/Header";
import * as RS from "@/components/_styled/routineStyled";
import MakeRoutineButton from "@/components/routine/MakeRoutineButton";
import RoutineList from "@/components/routine/RoutineList";
export default function Routine() {
  return (
    <RS.RoutineContainer>
        <Header path="My Reading Routine" />
        <RS.RoutineContentContainer>
          <MakeRoutineButton />
          <RS.Line />
          <RoutineList />
        </RS.RoutineContentContainer>
    </RS.RoutineContainer>
  );
}
