import React, { useState, useEffect, useCallback } from 'react';
import * as S from './Styled';
import { faGear, faCirclePlay, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";
import { API } from "@/pages/api";

export default function RoutineList() {
    const router = useRouter();
    const [routines, setRoutines] = useState([]);
    const [selectedRoutine, setSelectedRoutine] = useState(null);
    const [isClient, setIsClient] = useState(false);

    const fetchRoutine = useCallback(async () => {
        try {
            const token = localStorage.getItem("token");
            const routines = await API.get(`/routinelist`, {
                headers: {
                    Authorization: `Token ${token}`
                },
            });
            setRoutines(routines.data);
            console.log(routines);
        } catch (err) {
            console.error("Failed to fetch routines:", err);
        }
    }, []);

    useEffect(() => {
        fetchRoutine();
        setIsClient(true); 
    }, [fetchRoutine]);

    const handleStartButtonClick = () => {
        if (selectedRoutine && isClient) {
            localStorage.setItem("routineId", selectedRoutine.id);
            localStorage.setItem("routineTitle", selectedRoutine.title);
            localStorage.setItem("routineContent", selectedRoutine.content);
            localStorage.setItem("routineTime", selectedRoutine.time);
            router.push("/routine/routineIng").then(() => {
                window.location.reload();
            });
        }
    };

    return (
        <S.RoutineListContainer>
            <S.RoutineListWrapper>
                <S.SettingIconWrapper>
                    <S.SettingIcon icon={faGear} />
                </S.SettingIconWrapper>
                {routines.map((routine) => (
                    <S.RoutineContainer
                        key={routine.id}
                        onClick={() => setSelectedRoutine(routine)}
                    >
                        <S.RoutineTextContainer>
                            {routine.is_club && (
                                <S.ClubIcon icon={faUserGroup} />
                            )}
                            <S.RoutineText>{routine.title}</S.RoutineText>
                        </S.RoutineTextContainer>
                        <S.MinuteTextContainer>
                            <S.VerticalLine />
                            <S.MinuteText>{routine.time}분</S.MinuteText>
                        </S.MinuteTextContainer>
                    </S.RoutineContainer>
                ))}
            </S.RoutineListWrapper>
            <S.StartButton onClick={handleStartButtonClick}>
                <S.StartIcon icon={faCirclePlay} />
            </S.StartButton>
        </S.RoutineListContainer>
    );
}