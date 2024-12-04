import React, { useState, useEffect } from "react";
import * as S from "./Styled.jsx";
import Image from "next/image";
import { useRouter } from "next/router";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";
import { API } from "@/pages/api";

export default function SignupInput() {
  const router = useRouter();
  const profileImgList = [profile1, profile2, profile3, profile4];
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    image: "",
    email: "",
    nickname: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

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
      // console.log("회원가입 성공:", response);
      // console.log(values);
      router.push("/sign/in");
    } catch (error) {
      console.error("회원가입 요청 중 오류 발생:", error);
      setErrorMessage("회원가입 요청 중 오류가 발생했습니다.");
    }
  };

  const isFormValid = () => {
    return (
      values.email.trim() !== "" &&
      values.password.trim() !== "" &&
      values.nickname.trim() !== "" &&
      values.name.trim() !== ""
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    if (isValid) {
      fetchSignup();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageSelect = (imageNumber) => {
    setValues((prevValues) => ({
      ...prevValues,
      image: `image${imageNumber + 1}`,
    }));
  };

  useEffect(() => {
    if (values.email.trim() !== "") {
      setIsEmailValid(validateEmail(values.email));
    }
    setIsPasswordMatch(values.password === values.passwordConfirm);
    setIsValid(isFormValid() && isEmailValid && isPasswordMatch);
  }, [values]);

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
        <S.SignupInputLabel>이메일</S.SignupInputLabel>
        <S.SignupInputBox
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          required
        />
        {!isEmailValid && (
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
        {!isPasswordMatch && (
          <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        )}
        <S.SubmitButton type="submit" disabled={!isValid}>
          회원가입
        </S.SubmitButton>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.SignupForm>
    </S.InputFormContainer>
  );
}
