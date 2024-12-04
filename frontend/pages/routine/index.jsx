import Header from "@/components/layout/Header";
import * as RS from "@/components/_styled/routineStyled";
import MakeRoutineButton from "@/components/routine/MakeRoutineButton";
import RoutineList from "@/components/routine/RoutineList";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import RoutineDelete from "@/components/routine/routineDelete";

export default function Routine() {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedDeleteRoutine, setSelectedDeleteRoutine] = useState(null);

  const openModal = (routine) => {
    setSelectedDeleteRoutine(routine);
    setDeleteModal(true);
  };

  const handleSelectRoutine = (routine) => {
    setSelectedRoutine(routine);
    // console.log(selectedRoutine);
  };

  return (
    <RS.RoutineContainer>
      <Header path="My Reading Routine" />
      <RS.RoutineContentContainer>
        <MakeRoutineButton />
        <RS.Line />

        <RS.DeleteIconWrapper>
          <RS.DeleteIcon
            icon={faTrash}
            onClick={() => openModal(selectedRoutine)}
          />
        </RS.DeleteIconWrapper>

        <RoutineList
          onSelectRoutine={handleSelectRoutine}
          routines={routines}
        />
      </RS.RoutineContentContainer>

      {deleteModal && selectedDeleteRoutine && (
        <RS.RoutineModalOverlay>
          <RoutineDelete
            selectedDeleteRoutine={selectedDeleteRoutine}
            setDeleteModal={setDeleteModal}
            setRoutines={setRoutines}
          />
        </RS.RoutineModalOverlay>
      )}
    </RS.RoutineContainer>
  );
}
