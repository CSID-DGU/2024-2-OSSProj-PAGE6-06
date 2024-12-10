import React, { useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Timer from '@/components/routine/routineIng/Timer';
import TimerInfo from '@/components/routine/routineIng/TimerInfo';
import router from "next/router";
export default function RoutineIng() {
    useEffect(() => {
        const handlePopState = () => {
            localStorage.removeItem("routineContent");
            localStorage.removeItem("routineId");
            localStorage.removeItem("routineTime");
            localStorage.removeItem("routineTitle");
            localStorage.removeItem("isRoutineFinished"); 
        };

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        const routineId = localStorage.getItem("routineId");
        if (routineId == null) {
          alert("루틴을 선택하세요");
          router.replace("/routine");
          return;
        }
      },[])
    return (
        <RS.RoutineIngPage>
          <RS.RoutineIngContainer>
            <TimerInfo />
            <Timer />
          </RS.RoutineIngContainer>
        </RS.RoutineIngPage>
    );
}