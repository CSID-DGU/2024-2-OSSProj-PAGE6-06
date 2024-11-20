import styled from "styled-components";

export const SignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const SignContentContainer = styled.div`
  width:90%;
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:32px;
  margin-top:50px;
`;

export const SigninContentContainer = styled(SignContentContainer)`
  margin-top:109px;
  gap:80px;
`;

//userInfo
export const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserInfoContentContainer = styled(SignContentContainer)`
  margin-top:56px;
  gap:31px;
`;