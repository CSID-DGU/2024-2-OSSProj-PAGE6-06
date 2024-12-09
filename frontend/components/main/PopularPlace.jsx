import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import { API } from "@/pages/api";

function PopularPlace() {
    const [places, setPlaces] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("fade-in");

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
        }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    useEffect(() => {
        if (places.length > 0) {
            const interval = setInterval(() => {
                setAnimationClass("fade-out");
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
                    setAnimationClass("fade-in");
                }, 500); // fade-out 시간과 일치
            }, 3000); // 3초마다 변경

            return () => clearInterval(interval);
        }
    }, [places]);

    return (
        <S.PopularPlaceContainer>
            <S.Title>뜨고 있는 장소</S.Title>
            {places.length > 0 && (
                <S.PlaceCard className={animationClass}>
                    <S.PlaceTextContainer>
                        <S.PlaceNameText>{places[currentIndex].location}</S.PlaceNameText>
                        <S.PlacePeopleText>{`${places[currentIndex].location_count}명이 읽는 중`}</S.PlacePeopleText>
                    </S.PlaceTextContainer>
                </S.PlaceCard>
            )}
        </S.PopularPlaceContainer>
    );
}

export default PopularPlace;