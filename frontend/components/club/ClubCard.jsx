import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";
import { useRouter } from "next/router";

export default function ClubCard({ club }) {
  const router = useRouter();

  function shortenText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  const shortDescription = shortenText(club.description, 30);

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
          {club.count}명 참여중
        </S.ClubCardInfoText>
        <S.ClubCardInfoText>
          <S.ClubCardInfoIcon icon={faClock} />
          {club.time}분
        </S.ClubCardInfoText>
      </S.ClubCardInfo>
      <S.ClubCardTitle>{club.title}</S.ClubCardTitle>
      <S.ClubCardDescription>{shortDescription}</S.ClubCardDescription>
      <S.ClubCardButtonSection>
        <S.ClubCardButtonShow onClick={() => router.push(`/club/${club.id}`)}>
          구경하기
        </S.ClubCardButtonShow>
        <S.ClubCardButtonJoin>참여하기</S.ClubCardButtonJoin>
      </S.ClubCardButtonSection>
    </S.ClubCardContainer>
  );
}
