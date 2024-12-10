import * as RCS from "../record/Styled";
import * as S from "./Styled";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";

export default function ClubRoutineCard({ routine }) {
  const formattedDate = routine.date.split("T")[0];

  const getProfileImage = (profileImage) => {
    switch (profileImage) {
      case "image1":
        return profile1;
      case "image2":
        return profile2;
      case "image3":
        return profile3;
      case "image4":
        return profile4;
      default:
        return profile1;
    }
  };

  return (
    <RCS.RecordCardContainer>
      <S.ClubRoutineCardUser>
        <S.ClubRoutineCardUserImage
          src={getProfileImage(routine.userImage)}
          alt="profile_image"
        />
        <S.ClubRoutineCardUserInfo>
          <S.ClubRoutineCardUserInfoName>
            {routine.userNickname}
          </S.ClubRoutineCardUserInfoName>
          <S.ClubRoutineCardUserInfoDate>
            {formattedDate}
          </S.ClubRoutineCardUserInfoDate>
        </S.ClubRoutineCardUserInfo>
      </S.ClubRoutineCardUser>
      <RCS.RecordDescription>
        <RCS.RecordCardBookTitle>{routine.book.title}</RCS.RecordCardBookTitle>
        {routine.memo}
      </RCS.RecordDescription>
    </RCS.RecordCardContainer>
  );
}
