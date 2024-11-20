import * as RCS from "../record/Styled";
import * as S from "./Styled";
import profile_image from "../common/image/profile_image1.png";

export default function ClubRoutineCard({ routine }) {
  return (
    <RCS.RecordCardContainer>
      <S.ClubRoutineCardUser>
        <S.ClubRoutineCardUserImage src={profile_image} alt="profile_image" />
        <S.ClubRoutineCardUserInfo>
          <S.ClubRoutineCardUserInfoName>
            {routine.routine_writer}
          </S.ClubRoutineCardUserInfoName>
          <S.ClubRoutineCardUserInfoDate>
            {routine.created_date}
          </S.ClubRoutineCardUserInfoDate>
        </S.ClubRoutineCardUserInfo>
      </S.ClubRoutineCardUser>
      <RCS.RecordDescription>
        <RCS.RecordCardBookTitle>{routine.book_title}</RCS.RecordCardBookTitle>
        {routine.description}
      </RCS.RecordDescription>
    </RCS.RecordCardContainer>
  );
}
