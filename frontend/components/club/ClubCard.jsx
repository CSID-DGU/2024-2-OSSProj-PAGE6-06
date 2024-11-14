import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";
import { useRouter } from "next/router";

export default function ClubCard({ club }) {
  const router = useRouter();

  const content = club.content;
  const shortContent =
    content.length > 30 ? content.slice(0, 30) + "..." : content;

  return (
    <S.ClubCardContainer>
      <S.ClubCardImage
        src={club.image}
        width={160}
        height={100}
        alt="club_image"
      />
      <S.ClubCardInfo>
        <S.ClubCardInfoText>
          <S.ClubCardInfoIcon icon={faUserGroup} />
          {club.participantCount}명 참여중
        </S.ClubCardInfoText>
        <S.ClubCardInfoText>
          <S.ClubCardInfoIcon icon={faClock} />
          {club.time}분
        </S.ClubCardInfoText>
      </S.ClubCardInfo>
      <S.ClubCardTitle>{club.title}</S.ClubCardTitle>
      <S.ClubCardDescription>{shortContent}</S.ClubCardDescription>
      <S.ClubCardButtonSection>
        <S.ClubCardButtonShow onClick={() => router.push(`/club/${club.id}`)}>
          구경하기
        </S.ClubCardButtonShow>
        <S.ClubCardButtonJoin>참여하기</S.ClubCardButtonJoin>
      </S.ClubCardButtonSection>
    </S.ClubCardContainer>
  );
}
