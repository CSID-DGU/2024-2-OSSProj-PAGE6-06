import React, { useState, useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Book from '@/components/routine/Book';
import Place from '@/components/routine/Place';

export default function routineFinish() {
    const [date, setDate] = useState();
    const [title, setTitle] = useState('');

    return (
        <RS.RoutineFinishPage>
            <RS.RoutineFinishContentContainer>
                <RS.Date></RS.Date>
                <Book />
                <Place />
            </RS.RoutineFinishContentContainer>
            
        </RS.RoutineFinishPage>
    );
}

