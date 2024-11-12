import React, { useState, useEffect } from 'react';
import * as S from '../Styled';

export default function TimerInfo(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTitle(localStorage.getItem('routineTitle'));
            setContent(localStorage.getItem('routineContent'));
        }
    }, []);
    return (
        <S.TimerInfoContainer>
            <S.TitleText>{title}</S.TitleText>
            <S.ContentText>{content}</S.ContentText>
        </S.TimerInfoContainer>
    );
}

