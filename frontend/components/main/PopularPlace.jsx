import React, { useState,useEffect } from 'react';
import * as S from './Styled';
import ClubImage from '@/components/common/image/profile1.png';
import { API } from "@/pages/api";

function PopularPlace() {
    const[places, setPlaces] = useState([])
    const fetchPlaces = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await API.get(`/mainpage`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
    
          setPlaces(response.data.topplaces);
        } catch (error) {
          console.error("요청 중 오류 발생:", error);
          setErrorMessage("데이터를 불러오는 데 실패했습니다.");
        }
      };
      useEffect(() => {
        fetchPlaces(); 
    }, []);
    
    return (
        <S.PopularPlaceContainer>
        <S.Title>뜨고 있는 장소</S.Title>
        <S.PlaceCardContainer>
                {places.map((place, index) => (
                    <S.PlaceCard key={index}>
                        <S.PlaceImage src={ClubImage} alt={`${place.location} 이미지`} />
                        <S.PlaceTextContainer>
                            <S.PlaceNameText>{place.location}</S.PlaceNameText>
                            <S.PlacePeopleText>{`${place.location_count}명이 읽는 중`}</S.PlacePeopleText>
                        </S.PlaceTextContainer>
                    </S.PlaceCard>
                ))}
        </S.PlaceCardContainer>
    </S.PopularPlaceContainer>
    );
}

export default PopularPlace;