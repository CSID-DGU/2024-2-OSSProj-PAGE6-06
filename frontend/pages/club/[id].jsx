import * as CS from "@/components/_styled/clubStyled";
import * as MS from "@/components/_styled/mainStyled";
import ClubRoutineCard from "@/components/club/ClubRoutineCard";
import {
  faClock,
  faCrown,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { API } from "../api";
import { motion } from "framer-motion";

export default function ClubDetail({}) {
  const router = useRouter();

  const [club, setClub] = useState([]);
  const [routines, setRoutines] = useState([]);

  const fetchClubDetail = useCallback(async () => {
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
  }, [router.query.id]);

  useEffect(() => {
    if (router.query.id) {
      fetchClubDetail();
    }
  }, [router.query.id]);

  const formattedContent = club.content
    ?.split("\n")
    .map((line, idx) => <p key={idx}>{line}</p>);

  return (
    <MS.MainWrapper>
      {club.length === 0 ? (
        <CS.ClubDetailContainer>
          <CS.ClubDetailRoutineSection>Loading...</CS.ClubDetailRoutineSection>
        </CS.ClubDetailContainer>
      ) : (
        <CS.ClubDetailContainer>
          <CS.ClubDetailTitle>{club.title}</CS.ClubDetailTitle>

          <CS.ClubDetailImage
            src={club?.image || ""}
            width={400}
            height={200}
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
          <CS.ClubDetailDescription>
            {formattedContent}
          </CS.ClubDetailDescription>
          <CS.ClubPopularTitle>루틴 완료 기록</CS.ClubPopularTitle>
          <CS.ClubDetailRoutineSection>
            {routines.length === 0 ? (
              <>작성된 기록이 없습니다.</>
            ) : (
              <>
                {routines.map((routine, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} // 초기 상태: 투명하고 아래에서 시작
                    animate={{ opacity: 1, y: 0 }} // 애니메이션: 불투명해지고 원래 위치로 올라옴
                    exit={{ opacity: 0, y: 20 }} // 종료 상태: 투명하고 아래로
                    transition={{ duration: 0.3, delay: idx * 0.1 }} // 각 항목에 지연을 주어 순차적으로 나타남
                  >
                    <ClubRoutineCard key={idx} routine={routine} />
                  </motion.div>
                ))}
              </>
            )}
          </CS.ClubDetailRoutineSection>
        </CS.ClubDetailContainer>
      )}
    </MS.MainWrapper>
  );
}
