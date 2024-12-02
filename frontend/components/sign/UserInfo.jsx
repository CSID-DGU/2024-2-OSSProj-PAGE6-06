import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import * as S from "./Styled";
import Image from "next/image";
import { API } from "@/pages/api";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  const getProfileImage = (profileImage) => {
    const images = {
      image1: profile1,
      image2: profile2,
      image3: profile3,
      image4: profile4,
    };
    return images[profileImage] || profile1;
  };

  const fetchUserInfo = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      
      const response = await API.get("/profile/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  }, []);

  const handleLogout = async () => {
      localStorage.removeItem("token");
      router.push("/sign/in"); 
  };

  const handleQuit = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      await API.delete("/userquit/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      localStorage.removeItem("token");
      router.push("/sign/up"); 
    } catch (err) {
      console.error("Failed to quit:", err);
    }
  };


  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <S.UserInfoContainer>
      {userInfo ? (
        <>
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

            <S.LogoutTextWrapper onClick={handleLogout}>
              <S.LogoutText>
                리딩 루틴 로그아웃
              </S.LogoutText>
            </S.LogoutTextWrapper>

            <S.LogoutTextWrapper onClick={handleQuit}>
              <S.QuitText>리딩 루틴 회원 탈퇴</S.QuitText>
            </S.LogoutTextWrapper>
          </S.UserInfoTextContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    
    </S.UserInfoContainer>
  );
}