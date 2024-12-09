import React, { useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Timer from '@/components/routine/routineIng/Timer';
import TimerInfo from '@/components/routine/routineIng/TimerInfo';

export default function RoutineIng() {

    useEffect(() => {
        const handlePopState = () => {
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