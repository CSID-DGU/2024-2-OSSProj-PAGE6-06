import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Styled";
import { faCirclePlay, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { API } from "@/pages/api";

export default function RoutineList({ onSelectRoutine }) {
  const [routines, setRoutines] = useState([]);

  const fetchRoutine = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/routinelist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setRoutines(response.data);
    } catch (err) {
      console.error("Failed to fetch routines:", err);
    }
  }, []);

  useEffect(() => {
    fetchRoutine();
  }, [fetchRoutine]);

  return (
    <S.RoutineListContainer>
      <S.RoutineListWrapper>
        <S.RoutineListScrollWrapper>
          {routines.map((routine) => (
            <S.RoutineContainer
              key={routine.id}
              onClick={() => onSelectRoutine(routine)} 
            >
              <S.RoutineTextContainer>
                {routine.is_club && <S.ClubIcon icon={faUserGroup} />}
                <S.RoutineText>{routine.title}</S.RoutineText>
              </S.RoutineTextContainer>
              <S.MinuteTextContainer>
                <S.VerticalLine />
                <S.MinuteText>{routine.time}분</S.MinuteText>
              </S.MinuteTextContainer>
            </S.RoutineContainer>
          ))}
        </S.RoutineListScrollWrapper>
      </S.RoutineListWrapper>
      <S.StartButton>
        <S.StartIcon icon={faCirclePlay} />
      </S.StartButton>
    </S.RoutineListContainer>
  );
}