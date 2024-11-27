import * as RCS from "../record/Styled";
import * as S from "./Styled";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";
import { useEffect, useState } from "react";
import { API } from "@/pages/api";

export default function ClubRoutineCard({ routine }) {
  const formattedDate = routine.date.split("T")[0];

  const [profileImage, setProfileImage] = useState("");

  const fetchUserImage = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/profile`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setProfileImage(response.data.profile_image);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserImage();
  }, []);

  return (
    <RCS.RecordCardContainer>
      <S.ClubRoutineCardUser>
        {profileImage === "image1" ? (
          <S.ClubRoutineCardUserImage src={profile1} alt="profile_image" />
        ) : (
          <>
            {profileImage === "image2" ? (
              <S.ClubRoutineCardUserImage src={profile2} alt="profile_image" />
            ) : (
              <>
                {profileImage === "image3" ? (
                  <S.ClubRoutineCardUserImage
                    src={profile3}
                    alt="profile_image"
                  />
                ) : (
                  <S.ClubRoutineCardUserImage
                    src={profile4}
                    alt="profile_image"
                  />
                )}
              </>
            )}
          </>
        )}
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
