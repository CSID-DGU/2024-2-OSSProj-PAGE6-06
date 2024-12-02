import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { faUserGroup, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ClubImage from '@/components/common/image/profile1.png';
import { API } from "@/pages/api";

export default function JoinClub() {
    const [userClubs, setUserClubs] = useState([]);
    const fetchClubs = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await API.get(`/mainpage`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
    
          setUserClubs(response.data.userclubs);
        } catch (error) {
          console.error("요청 중 오류 발생:", error);
          setErrorMessage("데이터를 불러오는 데 실패했습니다.");
        }
      };
    
    
      useEffect(() => {
        fetchClubs(); 
      }, []);

    const formatTime = (createdAt) => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const diffInMinutes = Math.floor((now - createdDate) / (1000 * 60)); 

        const hours = Math.floor(diffInMinutes / 60);
        const remainingMinutes = diffInMinutes % 60;

        if (hours > 0) {
            return `${hours}시간 ${remainingMinutes > 0 ? `${remainingMinutes}분` : ''} 전`;
        }
        return `${remainingMinutes}분 전`;
    };

    return (
        <S.JoinClubContainer>
            <S.Title>참여중인 리딩클럽</S.Title>
            {userClubs.length === 0 ? (
                <p>참여 중인 리딩 클럽이 없습니다.</p> // 디자인 수정 필요
            ) : (
                userClubs.map((club) => (
                    <S.ClubCard key={club.id}>
                        <S.ClubCardContent>
                            <S.ClubImage 
                                src={club.imageURL || ClubImage} 
                                alt={`${club.title} 이미지`}
                                width={82}
                                height={82}
                                />
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
                                        <S.ClubSubInfoText>{formatTime(club.createdAt)}</S.ClubSubInfoText> {/*시간 받아오는값 수정필요*/}
                                    </S.ClubIconTextWrapper>
                                </S.ClubSubWrapper>
                            </S.ClubInfoContainer>
                        </S.ClubCardContent>
                        <S.GoClubIcon icon={faChevronRight} />
                    </S.ClubCard>
                ))
            )}
        </S.JoinClubContainer>
    );
}