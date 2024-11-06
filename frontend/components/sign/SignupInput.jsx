import React, { useState, useEffect } from 'react';
import * as S from "./Styled.jsx";
import Image from 'next/image'
import { useRouter } from 'next/router';
import profile1 from '../common/image/profile1.png';
import profile2 from '../common/image/profile2.png';
import profile3 from '../common/image/profile3.png';
import profile4 from '../common/image/profile4.png';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


export default function SignupInput(props) {
    const router = useRouter();
    const profileImgList = [profile1, profile2, profile3, profile4];
    const [isValid, setIsValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [values, setValues] = useState({
        image: '',
        username: '',
        nickname:'',
        name:'',
        password: '',
        passwordConfirm: ''
    });

    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const validateEmail = (username) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(username);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        console.log(values);
        router.push('/sign/in');
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
            image: imageNumber,
        }));
    };

    useEffect(() => {
        setIsEmailValid(validateEmail(values.username));
        setIsPasswordMatch(values.password === values.passwordConfirm);
        
        setIsValid(isFormValid() && isEmailValid && isPasswordMatch);
    }, [values, isEmailValid, isPasswordMatch]);

    return (
        <S.InputFormContainer>
            <S.SignupForm onSubmit={handleSubmit}>
                <S.SigninInputLabel>프로필 이미지</S.SigninInputLabel>
                <S.ImageSelectionContainer>
                    {profileImgList.map((imgSrc, index) => (
                        <S.ImageOption 
                            key={index}
                            selected={values.image === index}
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
                    name="username"
                    type="email"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                    required
                />
                {!isEmailValid && (
                    <S.ErrorMessage>올바른 이메일 형식을 입력해주세요.</S.ErrorMessage>
                )}
                <S.SignupInputLabel>비밀번호</S.SignupInputLabel>
                <S.SignupInputBox
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력해주세요"
                    required
                />
                <S.SignupInputLabel>비밀번호 확인</S.SignupInputLabel>
                <S.SignupInputBox
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    placeholder="비밀번호를 다시 한번 입력해주세요"
                    required
                />
                {!isPasswordMatch && (
                    <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
                )}
                <S.SubmitButton type="submit" disabled={!isValid}>회원가입</S.SubmitButton>
            </S.SignupForm>
        </S.InputFormContainer>
    );
}