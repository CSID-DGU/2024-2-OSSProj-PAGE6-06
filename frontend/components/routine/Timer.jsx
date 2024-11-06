import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import ProgressBar from './ProgressBar';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTime = localStorage.getItem('routineTime');
            const timeInMs = storedTime ? parseInt(storedTime, 10) * 60 * 1000 : 90 * 60 * 1000;
            setTimeLeft(timeInMs);
            setTotalTime(timeInMs);
        }
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !isPaused) {
            const intervalID = setInterval(() => {
                setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1000, 0));
            }, 1000);

            return () => clearInterval(intervalID);
        }
    }, [timeLeft, isPaused]); 

    const progress = ((totalTime - timeLeft) / totalTime) * 100;

    const handlePauseButtonClick = () => {
        setIsPaused(!isPaused);
    };

    // 남은 시간을 시, 분, 초로 변환
    const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    return (
        <S.TimerContainer>
            <S.ContentText>{(totalTime/ 1000 / 60) % 60}분</S.ContentText>
            <ProgressBar
                children={
                    <S.TimerText>
                        {hours} : {minutes} : {seconds}
                    </S.TimerText>
                }
                value={progress}
            />
            <S.PauseButton onClick={handlePauseButtonClick}>
                <S.PauseIcon icon={isPaused ? faCirclePlay : faCirclePause} />
            </S.PauseButton>
        </S.TimerContainer>
    );
}