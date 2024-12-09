import React, { useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Timer from '@/components/routine/routineIng/Timer';
import TimerInfo from '@/components/routine/routineIng/TimerInfo';

export default function RoutineIng() {

    useEffect(() => {
        const handlePopState = () => {
            // 뒤로 가기 시 로컬스토리지 값 삭제
            localStorage.removeItem("routineContent");
            localStorage.removeItem("routineId");
            localStorage.removeItem("routineTime");
            localStorage.removeItem("routineTitle");
        };

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <RS.RoutineIngPage>
          <RS.RoutineIngContainer>
            <TimerInfo />
            <Timer />
          </RS.RoutineIngContainer>
        </RS.RoutineIngPage>
    );
}