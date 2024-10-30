import React, { useState, useEffect } from 'react';
import * as S from "./Styled.jsx";

export default function Input(props) {
    const [isValid, setIsValid] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const isFormValid  = (values) => {
        return (values.email.trim() !== '' &&
                values.password.trim() !== '');
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid(values)) {
            return;
        }
        console.log(values);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    useEffect(() => {
        setIsValid(isFormValid(values));
    },[values]);

    return (
        <S.InputFormContainer>
            <S.InputContainer>
                <S.SignInForm onSubmit={handleSubmit}>
                    <S.InputLabel>이메일</S.InputLabel>
                    <S.InputBox
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력해주세요"
                        required
                    />
                    <S.InputLabel>비밀번호</S.InputLabel>
                    <S.InputBox
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="비밀번호를 입력해주세요"
                        required
                    />
                    <S.LoginButton type="submit" disabled={!isValid}>로그인</S.LoginButton> 
                </S.SignInForm>
            </S.InputContainer>
        </S.InputFormContainer>
    );
}