import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Styled";
import Image from "next/image";
import { API } from "@/pages/api";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/userprofile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  }, []);

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
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <S.UserInfoContainer>
      <S.UserProfile>
        <Image
          width={90}
          height={90}
          src={getProfileImage(userInfo.profileImage)}
          alt="프로필 이미지"
        />
      </S.UserProfile>
      <S.UserInfoTextContainer>
        <S.LabelText>유저 정보</S.LabelText>
        <S.UserInfoTextWrapper>
          <S.DetailTextWrapper>
            <S.InfoTag>이름</S.InfoTag>
            <S.InfoText>{userInfo.name}</S.InfoText>
          </S.DetailTextWrapper>
          <S.DetailTextWrapper>
            <S.InfoTag>닉네임</S.InfoTag>
            <S.InfoText>{userInfo.nickname}</S.InfoText>
          </S.DetailTextWrapper>
          <S.DetailTextWrapper>
            <S.InfoTag>이메일</S.InfoTag>
            <S.InfoText>{userInfo.username}</S.InfoText>
          </S.DetailTextWrapper>
        </S.UserInfoTextWrapper>
        <S.LogoutTextWrapper>
          <S.LogoutText>리딩 루틴 로그아웃</S.LogoutText>
        </S.LogoutTextWrapper>
        <S.LogoutTextWrapper>
          <S.QuitText>리딩 루틴 회원 탈퇴</S.QuitText>
        </S.LogoutTextWrapper>
      </S.UserInfoTextContainer>
    </S.UserInfoContainer>
  );
}