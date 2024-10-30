import React, { useState, useEffect } from 'react';
import * as S from "./Styled.jsx";
import { useRouter } from 'next/router';
import Link from 'next/link.js';

export default function SigninInput(props) {
    const router = useRouter();
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
                <S.SigninForm onSubmit={handleSubmit}>
                    <S.SigninInputLabel>이메일</S.SigninInputLabel>
                    <S.SigninInputBox
                        name="email"
                        type="email"
                        value={values.email}
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
                    <S.SubmitButton type="submit" disabled={!isValid}>로그인</S.SubmitButton> 
                    
                </S.SigninForm>
                <Link href='/sign/up'>
                        <S.SingupLink>회원가입</S.SingupLink>
                </Link>
        </S.InputFormContainer>
    );
}