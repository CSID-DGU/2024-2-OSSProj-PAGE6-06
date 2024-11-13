import React, { useState } from 'react';
import * as S from './Styled';

export default function MakeRoutineForm() {
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
            for (let minute = 0; minute < 60; minute += 5) {
                const formattedHour = String(hour).padStart(2, '0');
                const formattedMinute = String(minute).padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinute}`);
            }
        }
        return times;
    };

    const selectTime = (timeOption) => {
        setTime(timeOption);
        setIsOpen(false);
    };

    const handleSubmit = () => {
        if (!title || !time || !memo) {
            alert("모든 값을 입력해주세요.");
            return;
        }
        console.log("제출된 루틴 정보:", { title, time, memo });
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
                    <S.SelectedTime onClick={toggleDropdown}>
                        {time || "시간을 선택하세요"}
                    </S.SelectedTime>
                    {isOpen && (
                        <S.DropdownList>
                            {generateTimeOptions().map((timeOption) => (
                                <S.DropdownItem
                                    key={timeOption}
                                    onClick={() => selectTime(timeOption)}
                                >
                                    {timeOption}
                                </S.DropdownItem>
                            ))}
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