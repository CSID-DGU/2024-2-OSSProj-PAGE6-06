import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.48px;
`;

export const SubTitle = styled.div`
    color: #0F172A;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 132%; /* 19.8px */
    letter-spacing: -0.3px;
`;

//SigninInput
export const InputFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const SigninForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    gap: 15px;
`;

export const SigninInputLabel = styled.label`
    color: var(--gray900, #0F172A);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 132%; 
    letter-spacing: -0.32px;
`;
export const SigninInputBox = styled.input`
    width:100%;
    height:57px;
    border:none;
    border-radius: 10px;
    background: var(--gray100, #F1F5F9);
    padding: 2% 5%;
    font-size: 14px;
    &::placeholder {
        color: var(--gray500, #64748B);
        font-size: 14px;
        font-weight: 500;
        line-height: 132%; /* 21.12px */
        letter-spacing: -0.32px;
    }
    &:focus {
        outline-color: #64748B;
        outline-width:0.6ßpx;
    }  
`;

export const SubmitButton = styled.button`
    width: 100%;
    height:61px;
    margin-top:27px;
    border:none;
    border-radius: 10px;
    background: var(--gray300, #64748B);

    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 132%; 
    letter-spacing: -0.4px;

    &:disabled {
        background-color: #CBD5E1;
    }   
    
`;

export const SingupLink = styled.div`
    color: #0F172A;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 132%; 
    letter-spacing: -0.28px;
    text-decoration:underline;
    
`;
//SignupInput
export const ErrorMessage = styled.span`
    color: #f74747;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
`;

export const SignupForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    gap: 14px;
`;

export const SignupInputLabel = styled(SigninInputLabel)`
    font-size: 14px;
`;
export const SignupInputBox = styled(SigninInputBox)`
    height:46px;
    font-size: 12px;
    &::placeholder {
        font-size: 12px;
    } 
`;

export const ImageSelectionContainer = styled.div`
    width:100%;
    display:flex;
    gap:15px;
`;
export const ImageOption = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:60px;
    height:60px;
    border-radius:95px;
    border: ${props => (props.selected ? '1px solid #64748B' : 'none')};
    background: var(--gray100, );
`;

//UserInfo
export const UserInfoContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:31px;
`;
export const UserProfile = styled.div`
    width:90px;
    height:90px;
    border-radius: 90px;
`;
export const UserInfoTextContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    gap:20px;
`;
export const LabelText = styled.div`
    color: #0F172A;
    font-size: 14px;
    font-weight: 600;
    line-height: 132%; 
    letter-spacing: -0.28px;
`;
export const UserInfoTextWrapper = styled.div`
    width:100%;
    border-radius: 10px;
    background: #F1F5F9;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 12px;
    padding:5%;

`;
export const DetailTextWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`;
export const InfoTag = styled.div`
    color: #0F172A;
    font-size: 14px;
    font-weight: 700;
    line-height: 132%;
    letter-spacing: -0.28px;
`
export const InfoText = styled(InfoTag)`
    font-weight:500;
`;
export const LogoutText = styled(InfoTag)`
`;
export const QuitText = styled(InfoTag)`
    align-items: flex-start;    
    color: #FF4830;
`;
export const LogoutTextWrapper = styled.div`
    width:100%;
    border-radius: 10px;
    background: #F1F5F9;
    display:flex;
    flex-direction:column;
    gap: 12px;
    padding:5%;
`;