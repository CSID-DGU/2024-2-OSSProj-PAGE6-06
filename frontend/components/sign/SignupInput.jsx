import React, { useState, useEffect, useCallback } from 'react';
import * as S from "./Styled.jsx";
import Image from 'next/image';
import { useRouter } from 'next/router';
import profile1 from '../common/image/profile1.png';
import profile2 from '../common/image/profile2.png';
import profile3 from '../common/image/profile3.png';
import profile4 from '../common/image/profile4.png';
import { API } from "@/pages/api"; 

export default function SignupInput() {
  const router = useRouter();
  const profileImgList = [profile1, profile2, profile3, profile4];
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [values, setValues] = useState({
    image: '',
    email: '',
    nickname: '',
    name: '',
    password: '',
    passwordConfirm: ''
  });

  const isFormValid = useCallback(() => {
    return (
      values.image.trim() !== '' &&
      values.email.trim() !== '' &&
      values.password.trim() !== '' &&
      values.nickname.trim() !== '' &&
      values.name.trim() !== ''
    );
  }, [values]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const fetchSignup = async () => {
    try {
      const response = await API.post(`/signup`, {
        username: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        name: values.name,
        nickname: values.nickname,
        profileImage: values.image,
      });
      console.log("회원가입 성공:", response);
      router.push('/sign/in');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage({
          username: error.response.data.username ? error.response.data.username[0] : '',
          nickname: error.response.data.nickname ? error.response.data.nickname[0] : '',
          password: error.response.data.password ? error.response.data.password[0] : '',
        });
      } else if (error.response && error.response.status === 500) {
        setErrorMessage({ general: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
      } else {
        setErrorMessage({ general: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid() && isEmailValid && isPasswordMatch) {
      fetchSignup();
    }
    console.log(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      setIsEmailValid(validateEmail(updatedValues.email));
      setIsPasswordMatch(updatedValues.password === updatedValues.passwordConfirm);

      return updatedValues;
    });
  };

  const handleImageSelect = (imageNumber) => {
    setValues((prevValues) => ({
      ...prevValues,
      image: `image${imageNumber + 1}`,
    }));
  };

  return (
    <S.InputFormContainer>
      <S.SignupForm onSubmit={handleSubmit}>
        <S.SigninInputLabel>프로필 이미지</S.SigninInputLabel>
        <S.ImageSelectionContainer>
          {profileImgList.map((imgSrc, index) => (
            <S.ImageOption
              key={index}
              selected={values.image === `image${index + 1}`}
              onClick={() => handleImageSelect(index)}
            >
              <Image
                width={46}
                height={46}
                src={imgSrc}
                alt={`프로필 이미지 ${index + 1}`}
              />
            </S.ImageOption>
          ))}
        </S.ImageSelectionContainer>
        <S.SignupInputLabel>이름</S.SignupInputLabel>
        <S.SignupInputBox
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="이름을 입력해주세요"
          required
        />
        <S.SignupInputLabel>닉네임</S.SignupInputLabel>
        <S.SignupInputBox
          name="nickname"
          type="text"
          value={values.nickname}
          onChange={handleChange}
          placeholder="닉네임을 입력해주세요"
          required
        />
        {errorMessage.nickname && (
          <S.ErrorMessage>{errorMessage.nickname}</S.ErrorMessage>
        )}
        <S.SignupInputLabel>이메일</S.SignupInputLabel>
        <S.SignupInputBox
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          required
        />
        {!isEmailValid && values.email.trim() && (
          <S.ErrorMessage>올바른 이메일 형식을 입력해주세요.</S.ErrorMessage>
        )}

        <S.SignupInputLabel>비밀번호</S.SignupInputLabel>
        <S.SignupInputBox
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <S.SignupInputLabel>비밀번호 확인</S.SignupInputLabel>
        <S.SignupInputBox
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          placeholder="비밀번호를 다시 입력해주세요"
          required
        />
        {!isPasswordMatch && values.passwordConfirm.trim() && (
          <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        )}
        {errorMessage.username && (
          <S.ErrorMessage>{errorMessage.username}</S.ErrorMessage>
        )}
      </S.SignupForm>
      <S.SubmitButtonWrapper>
          <S.SubmitButton
            type="submit"
            disabled={!(isFormValid() && isEmailValid && isPasswordMatch)}
          >
            회원가입
          </S.SubmitButton>
          {errorMessage.general && <S.ErrorMessage>{errorMessage.general}</S.ErrorMessage>}
        </S.SubmitButtonWrapper>
    </S.InputFormContainer>
  );
}