import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

export default function RoutineList(props) {
    const router = useRouter();
    const [selectedRoutine, setSelectedRoutine] = useState(null);
    const [isClient, setIsClient] = useState(false); 

    // 임시 데이터
    const routines = [
        {
            id: 2,
            title: "자기 전 책 20분 읽기",
            time: "20",
            content: "간단한 독서 습관",
            user: 1
        },
        {
            id: 3,
            title: "기상 후 10분 읽기",
            time: "10",
            content: "간단한 독서 습관",
            user: 1
        },
        {
            id: 4,
            title: "기상 후 10분 읽기",
            time: "1",
            content: "간단한 독서 습관",
            user: 1
        }

    ];

    useEffect(() => {
        setIsClient(true); 
    }, []);

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
                        <S.RoutineText>{routine.title}</S.RoutineText>
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