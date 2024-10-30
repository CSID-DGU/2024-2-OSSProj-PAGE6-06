import styled from "styled-components";

//Title
export const TitleContainer = styled.div`
    width: 185px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
`;

export const MainTitle = styled.div`
    color: #0F172A;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.48px;
`;

export const SubTitle = styled.div`
    color: #0F172A;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 132%; /* 19.8px */
    letter-spacing: -0.3px;
`;

//Input
export const InputFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 42px;
`;
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 21px;
`;



export const SignInForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    gap: 15px;
`;

export const InputLabel = styled.label`
    color: var(--gray900, #0F172A);
    text-align: center;
    font-family: var(--font-pretendard);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 132%; 
    letter-spacing: -0.32px;
`;
export const InputBox = styled.input`
    width:100%;
    height:57px;
    border:none;
    border-radius: 10px;
    background: var(--gray100, #F1F5F9);
    padding: 2% 5%;
    font-size: 16px;
    &::placeholder {
        color: var(--gray500, #64748B);
        font-size: 16px;
        font-weight: 500;
        line-height: 132%; /* 21.12px */
        letter-spacing: -0.32px;
    }
    
`;

export const LoginButton = styled.button`
    width: 100%;
    height:61px;
    margin-top:27px;
    border:none;
    border-radius: 10px;
    background: var(--gray300, #CBD5E1);

    color: #0F172A;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 132%; /* 26.4px */
    letter-spacing: -0.4px;
`;