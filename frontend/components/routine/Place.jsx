import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PlaceModal from './PlaceModal'; 
import * as S from './Styled';
import { useKakaoLoader } from 'react-kakao-maps-sdk'; 

export default function Place() {
    useKakaoLoader();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = KAKAO_SDK_URL;
        document.body.appendChild(script);
    
        return () => document.body.removeChild(script);
      }, []);
    

    return (
        <S.PlaceContainer>
            <S.InputContainer>
                <S.Label>Where</S.Label>
                <S.SearchBox />
                <S.SearchIcon icon={faSearch} onClick={openModal} /> 
            </S.InputContainer>

            {isModalOpen && (
                <PlaceModal 
                    onClose={closeModal}  
                />
            )}
        </S.PlaceContainer>
    );
}