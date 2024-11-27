import React, { useState, useEffect } from 'react';
import * as RS from "@/components/_styled/routineStyled";
import Book from '@/components/routine/routineFinish/Book';
import Place from '@/components/routine/routineFinish/Place';
import Memo from '@/components/routine/routineFinish/Memo';

export default function RoutineFinish() {
    const [date, setDate] = useState('');
    const [routineTitle, setRoutineTitle] = useState('');
    const [record, setRecord] = useState({
        routine: null,
        title: '',
        location: '',
        memo: ''
    });

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
        setDate(formattedDate);
        setRoutineTitle(localStorage.getItem('routineTitle'));
    }, []);

    useEffect(() => {
        if (record.routine) { 
            console.log(record); 
        }
    }, [record]);

    const handleClick = () => {
        const routineId = localStorage.getItem('routineId');
        const book = localStorage.getItem('book');
        const place = localStorage.getItem('selectedPlaceName');
        const memo = localStorage.getItem('memoText');
        setRecord({
            routine: routineId,
            title: book,
            location: place,
            memo: memo
        });
        console.log({
            routine: routineId,
            title: book,
            location: place,
            memo: memo
        });

   
        localStorage.removeItem('routineId');
        localStorage.removeItem('book');
        localStorage.removeItem('selectedPlaceName');
        localStorage.removeItem('memoText');
    };

    return (
        <RS.RoutineFinishPage>
            <RS.RoutineFinishContentContainer>
                <RS.RoutineInfo>
                    <RS.Date>{date}</RS.Date>
                    <RS.Title>{routineTitle}</RS.Title>
                </RS.RoutineInfo>
                <Book />
                <Place />
                <Memo />
                <RS.SubmitButton onClick={handleClick}>확인</RS.SubmitButton>
            </RS.RoutineFinishContentContainer>
        </RS.RoutineFinishPage>
    );
}