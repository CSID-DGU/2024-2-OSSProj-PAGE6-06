import React, { useEffect, useState } from "react";
import * as S from "./Styled";
import {
  faUserGroup,
  faClock,
  faChevronRight,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import ClubImage from "@/components/common/image/profile1.png";
import { useRouter } from "next/router";
import { API } from "@/pages/api";

export default function JoinClub() {
  const [userClubs, setUserClubs] = useState([]);
  const router = useRouter();

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
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const remainingMinutes = time % 60;

    if (hours > 0) {
      return `${hours}시간 ${
        remainingMinutes > 0 ? `${remainingMinutes}분` : ""
      }`;
    }
    return `${remainingMinutes}분`;
  };

  const handleGoClub = (id) => {
    router.push(`/club/${id}`);
  };

  return (
    <S.JoinClubContainer>
      <S.Title>참여중인 리딩클럽</S.Title>
      {userClubs.length === 0 ? (
        <S.EmptyState>
          <S.EmptyIcon icon={faBookOpen} />
          <S.EmptyText>참여 중인 리딩 클럽이 없습니다.</S.EmptyText>
        </S.EmptyState>
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
                    <S.ClubSubInfoText>
                      {formatTime(club.time)}
                    </S.ClubSubInfoText>
                  </S.ClubIconTextWrapper>
                </S.ClubSubWrapper>
              </S.ClubInfoContainer>
            </S.ClubCardContent>
            <S.GoClubIcon
              icon={faChevronRight}
              onClick={() => handleGoClub(club.id)}
            />
          </S.ClubCard>
        ))
      )}
    </S.JoinClubContainer>
  );
}
