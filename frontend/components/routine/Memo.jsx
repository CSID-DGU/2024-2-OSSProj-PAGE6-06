import React, { useState } from 'react';
import * as S from './Styled';

export default function Memo() {
    const [memoText, setMemoText] = useState('');

    const handleChange = (e) => {
        setMemoText(e.target.value);
        localStorage.setItem('memoText', memoText)
    };

    return (
        <S.InputContainer>
            <S.Label>Memo</S.Label>
            <S.Textarea
                value={memoText}
                onChange={handleChange}
                placeholder="메모를 입력해 주세요"
            />
        </S.InputContainer>
    );
}