import * as CS from "@/components/_styled/clubStyled";
import * as MS from "@/components/_styled/mainStyled";
import ClubRoutineCard from "@/components/club/ClubRoutineCard";
import {
  faClock,
  faCrown,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API } from "../api";

export default function ClubDetail({}) {
  const router = useRouter();

  const [club, setClub] = useState([]);
  const [routines, setRoutines] = useState([]);

  const fetchClubDetail = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/${router.query.id}/clublist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setClub(response.data.club);
      setRoutines(response.data.routineCompleteRecords);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchClubDetail();
    }
  }, []);

  const formattedContent = club.content
    ?.split("\n")
    .map((line, idx) => <p key={idx}>{line}</p>);

  return (
    <MS.MainWrapper>
      <CS.ClubDetailContainer>
        <CS.ClubDetailTitle>{club.title}</CS.ClubDetailTitle>
        <CS.ClubDetailImage
          width={400}
          height={200}
          src={club.image}
          alt="club_image"
        />
        <CS.ClubDetailInfo>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faCrown} />
            {club.userNickname}
          </CS.ClubDetailInfoEach>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faUserGroup} />
            {club.participantCount}명 참여중
          </CS.ClubDetailInfoEach>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faClock} />
            {club.time}분
          </CS.ClubDetailInfoEach>
        </CS.ClubDetailInfo>
        <CS.ClubDetailDescription>{formattedContent}</CS.ClubDetailDescription>
        <CS.ClubPopularTitle>루틴 완료 기록</CS.ClubPopularTitle>
        <CS.ClubDetailRoutineSection>
          {routines.map((routine, idx) => (
            <ClubRoutineCard key={idx} routine={routine} />
          ))}
        </CS.ClubDetailRoutineSection>
      </CS.ClubDetailContainer>
    </MS.MainWrapper>
  );
}
