import React, { useCallback, useState } from 'react';
import * as S from './Styled';
import { API } from "@/pages/api";  
import { useRouter } from 'next/router';

export default function MakeRoutineForm() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [time, setTime] = useState(''); 
    const [memo, setMemo] = useState('');
    const [isOpen, setIsOpen] = useState(false); 

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleMemoChange = (e) => setMemo(e.target.value);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 5; minute < 60; minute += 5) { 
                times.push(hour * 60 + minute); 
            }
        }
        return times;
    };

    const convertToTimeString = (minutes) => {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        if (minutes < 60) {
            return `${minute}분`;
        } 
        return `${hour}시간 ${minute}분`;
    };


    const selectTime = (timeInMinutes) => {
        setTime(timeInMinutes); 
        setIsOpen(false);
    };

    const postRoutine = useCallback(async (routineData) => {
        try {
            const token = localStorage.getItem("token");
            const response = await API.post(
                `/makeroutine`, 
                routineData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            router.push('/routine')
            console.log("루틴 생성 완료", response.data);
        } catch (error) {
            console.error("루틴 생성 에러:", error);
        }
    }, []);

    const handleSubmit = () => {
        if (!title || time === '' || !memo) {
            alert("모든 값을 입력해주세요.");
            return;
        }
        const routineData = {
            title: title,
            time: time, 
            content: memo,
        };

        postRoutine(routineData);
        console.log("Submitted routine:", routineData);
    };

    return (
        <S.FormContainer>
            <S.InputContainer>
                <S.Label>Title</S.Label>
                <S.Input
                    type="text"
                    placeholder="루틴 제목을 입력하세요"
                    value={title}
                    onChange={handleTitleChange}
                />
            </S.InputContainer>

            <S.InputContainer>
                <S.Label>Time</S.Label>
                <S.DropdownContainer>
                    <S.SelectedTime 
                        onClick={toggleDropdown}
                        style={{ color: time === '' ? '#94A3B8' : '#0F172A' }}>
                        {time === '' ? "시간을 선택하세요" : convertToTimeString(time)}
                    </S.SelectedTime>
                    {isOpen && (
                        <S.DropdownList>
                            {generateTimeOptions().map((timeInMinutes) => {
                                return (
                                    <S.DropdownItem
                                        key={timeInMinutes}
                                        onClick={() => selectTime(timeInMinutes)}
                                    >
                                        {convertToTimeString(timeInMinutes)} 
                                    </S.DropdownItem>
                                );
                            })}
                        </S.DropdownList>
                    )}
                </S.DropdownContainer>
            </S.InputContainer>

            <S.InputContainer>
                <S.Label>Memo</S.Label>
                <S.MemoInput
                    placeholder="루틴에 대한 메모를 입력하세요"
                    value={memo}
                    onChange={handleMemoChange}
                />
            </S.InputContainer>

            <S.SubmitButton onClick={handleSubmit}>확인</S.SubmitButton>
        </S.FormContainer>
    );
}