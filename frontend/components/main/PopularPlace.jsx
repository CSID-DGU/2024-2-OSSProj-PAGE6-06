import React from 'react';
import * as S from './Styled';
import ClubImage from '@/components/common/image/profile1.png';

function PopularPlace() {
    const data = {
        "topplaces": [
            { "location": "우리집", "location_count": 9 },
            { "location": "스타벅스 충무로점", "location_count": 124 },
            { "location": "스타벅스 충무로점", "location_count": 124 },
            { "location": "스타벅스 충무로점", "location_count": 124 },
            { "location": "스타벅스 충무로점", "location_count": 124 },

        ],
    };
    return (
        <S.PopularPlaceContainer>
        <S.Title>뜨고 있는 장소</S.Title>
        <S.PlaceCardContainer>
                {data.topplaces.map((place, index) => (
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