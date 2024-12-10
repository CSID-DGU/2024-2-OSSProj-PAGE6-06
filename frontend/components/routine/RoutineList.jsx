import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Styled";
import { useRouter } from "next/router";
import {
  faCirclePlay,
  faUserGroup,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { API } from "@/pages/api";

export default function RoutineList({ onSelectRoutine, onDeleteSuccess }) {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const router = useRouter();

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

  const handleRoutineClick = (routine) => {
    if (selectedRoutine?.id === routine.id) {
      setSelectedRoutine(null);
      onSelectRoutine(null);
    } else {
      setSelectedRoutine(routine);
      onSelectRoutine(routine);
    }
    // console.log(routine);
  };

  const handleStartButtonClick = () => {
    if (selectedRoutine) {
      localStorage.setItem("routineId", selectedRoutine.id);
      localStorage.setItem("routineTitle", selectedRoutine.title);
      localStorage.setItem("routineContent", selectedRoutine.content);
      localStorage.setItem("routineTime", selectedRoutine.time);
      router.push("/routine/routineIng").then(() => {
        window.location.reload();
      });
    } else {
      alert("루틴을 선택해주세요.");
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const remainingMinutes = time % 60;

    if (hours > 0) {
      return `${hours}시간 ${
        remainingMinutes > 0 ? `${remainingMinutes}분` : ""
      } `;
    }
    return `${remainingMinutes}분`;
  };

  useEffect(() => {
    fetchRoutine();
  }, [fetchRoutine]);

  return (
    <S.RoutineListContainer>
      <S.RoutineListWrapper>
        <S.RoutineListScrollWrapper>
          {routines.length > 0 ? (
            routines.map((routine) => (
              <S.RoutineContainer
                key={routine.id}
                onClick={() => handleRoutineClick(routine)}
                $isSelected={selectedRoutine?.id === routine.id}
              >
                <S.RoutineTextContainer>
                  {routine.is_club && <S.ClubIcon icon={faUserGroup} />}
                  <S.RoutineText>
                    {routine.title.slice(0, 18)}
                    {routine.title.length > 18 ? "..." : ""}
                  </S.RoutineText>
                </S.RoutineTextContainer>
                <S.MinuteTextContainer>
                  <S.VerticalLine />
                  <S.MinuteText>{formatTime(routine.time)}</S.MinuteText>
                </S.MinuteTextContainer>
              </S.RoutineContainer>
            ))
          ) : (
            <S.EmptyState>
              <S.EmptyIcon icon={faBookOpen} />
              <S.EmptyText>
                진행 중인 루틴이 없습니다.
                <br />
                새로운 루틴에 참여하거나 만들어보세요!
              </S.EmptyText>
            </S.EmptyState>
          )}
        </S.RoutineListScrollWrapper>
      </S.RoutineListWrapper>
      <S.StartButton onClick={handleStartButtonClick}>
        <S.StartIcon icon={faCirclePlay} />
      </S.StartButton>
    </S.RoutineListContainer>
  );
}
