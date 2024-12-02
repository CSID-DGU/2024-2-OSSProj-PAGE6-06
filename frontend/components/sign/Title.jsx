import * as S from "./Styled.jsx";
import React from 'react';

export default function Title(props) {
    return (
        <S.TitleContainer>
            <S.MainTitle>Reading Routine</S.MainTitle>
            <S.SubTitle>I read every day</S.SubTitle>
        </S.TitleContainer>
    );
}
