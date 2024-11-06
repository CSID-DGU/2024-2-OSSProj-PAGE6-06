import React from 'react';
import * as S from './Styled';
import ProfileImage from '@/components/common/image/profile1.png';
import Image from 'next/image'

export default function UserInfo(props) {
    return (
        <S.UserInfoContainer>
            <S.UserProfile>
                <Image 
                    width={90}
                    height={90}
                    src={ProfileImage} 
                    alt="프로필 이미지"  />
            </S.UserProfile>
            <S.UserInfoTextContainer>
                <S.LabelText>유저 정보</S.LabelText>
                <S.UserInfoTextWrapper>
                    <S.DetailTextWrapper>
                        <S.InfoTag>이름</S.InfoTag>
                        <S.InfoText>김감자</S.InfoText>
                    </S.DetailTextWrapper>
                    <S.DetailTextWrapper>
                        <S.InfoTag>닉네임</S.InfoTag>
                        <S.InfoText>김당근</S.InfoText>
                    </S.DetailTextWrapper>
                    <S.DetailTextWrapper>
                        <S.InfoTag>이메일</S.InfoTag>
                        <S.InfoText>1234@naver.com</S.InfoText>
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

