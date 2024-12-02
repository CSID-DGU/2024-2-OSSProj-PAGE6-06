import React, { useState, useEffect } from "react";
import * as S from "./Styled.jsx";
import { useRouter } from "next/router";
import Link from "next/link.js";
import { API } from "@/pages/api";

export default function SigninInput() {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const fetchSignIn = async () => {
    try {
      const response = await API.post(`/signin`, {
        username: values.username,
        password: values.password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      // console.log('로그인 성공', token);
      router.push("/main");
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
      setErrorMessage("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  const isFormValid = (values) => {
    return values.username.trim() !== "" && values.password.trim() !== "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid(values)) {
      setErrorMessage("모든 필드를 채워주세요.");
      return;
    }
    try {
      await fetchSignIn();
    } catch (error) {
      setErrorMessage("로그인에 실패했습니다.");
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  useEffect(() => {
    setIsValid(isFormValid(values));
  }, [values]);

  return (
    <S.InputFormContainer>
      <S.SigninForm onSubmit={handleSubmit}>
        <S.SigninInputLabel>이메일</S.SigninInputLabel>
        <S.SigninInputBox
          name="username"
          type="email"
          value={values.username}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          required
        />
        <S.SigninInputLabel>비밀번호</S.SigninInputLabel>
        <S.SigninInputBox
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <S.SubmitButton type="submit" disabled={!isValid}>
          로그인
        </S.SubmitButton>
      </S.SigninForm>
      <Link href="/sign/up">
        <S.SingupLink>회원가입</S.SingupLink>
      </Link>
    </S.InputFormContainer>
  );
}
