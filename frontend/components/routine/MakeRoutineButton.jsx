import React from 'react';
import * as S from './Styled';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function MakeRoutine(props) {
    return (
        <Link href='/routine/makeRoutine'> 
            <S.MakeRoutineButton>
                <S.MakeRoutineButtonText>Make Reading Routine</S.MakeRoutineButtonText>
                <S.PlusIcon icon={faPlus} />
            </S.MakeRoutineButton>
        </Link>
        
    );
}
