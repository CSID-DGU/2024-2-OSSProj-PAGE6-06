import React, { useState, useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Timer from '@/components/routine/Timer';
import TimerInfo from '@/components/routine/TimerInfo';
export default function routineIng() {

    return (
        <RS.RoutineIngPage>
          <RS.RoutineIngContainer>
            <TimerInfo />
            <Timer />
          </RS.RoutineIngContainer>
          
        </RS.RoutineIngPage>
    );
}

