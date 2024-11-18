import React from 'react';
import * as S from './Styled';
import { faUserGroup, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ClubImage from '@/components/common/image/profile1.png';

export default function JoinClub(props) {
    const userclubs = [
        {
            id: 1,
            user: 7,
            participantCount: 1,
            title: "아침 독서 클럽",
            time: 130, 
            content: "아침마다 30분 독서",
            createdAt: "2024-11-11T23:03:57.861017",
            image: "http://127.0.0.1:8000/club_images/Django_MTV.png",
        },
        {
            id: 2,
            user: 7,
            participantCount: 5,
            title: "저녁 독서 모임",
            time: 90, 
            content: "저녁마다 1시간 30분 독서",
            createdAt: "2024-11-12T19:03:57.861017",
            image: "http://127.0.0.1:8000/club_images/Evening_Reading.png",
        },
    ];

  
    const formatTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (hours > 0) {
            return `${hours}시 ${remainingMinutes > 0 ? `${remainingMinutes}분` : ''}`;
        }
        return `${remainingMinutes}분`;
    };

    return (
        <S.JoinClubContainer>
            <S.Title>참여중인 리딩클럽</S.Title>
            {userclubs.map((club) => (
                <S.ClubCard key={club.id}>
                    <S.ClubCardContent>
                        <S.ClubImage src={ClubImage} alt={`${club.title} 이미지`} />
                        <S.ClubInfoContainer>
                            <S.ClubName>{club.title}</S.ClubName>
                            <S.ClubContent>{club.content}</S.ClubContent>
                            <S.ClubSubWrapper>
                                <S.ClubIconTextWrapper>
                                    <S.ClubIcon icon={faUserGroup} />
                                    <S.ClubSubInfoText>{`${club.participantCount}명 참여중`}</S.ClubSubInfoText>
                                </S.ClubIconTextWrapper>
                                <S.ClubIconTextWrapper>
                                    <S.ClubIcon icon={faClock} />
                                    <S.ClubSubInfoText>{formatTime(club.time)}</S.ClubSubInfoText>
                                </S.ClubIconTextWrapper>
                            </S.ClubSubWrapper>
                        </S.ClubInfoContainer>
                    </S.ClubCardContent>
                    <S.GoClubIcon icon={faChevronRight} />
                </S.ClubCard>
            ))}
        </S.JoinClubContainer>
    );
}