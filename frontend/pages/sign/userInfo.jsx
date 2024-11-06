import React from 'react';
import * as US from '@/components/_styled/signStyled'; 
import Title from '@/components/sign/Title';
import UserInfo from '@/components/sign/UserInfo';
export default function userInfo(props) {
    return (
        <US.UserInfoContainer>
            <US.UserInfoContentContainer>
                <Title />
                <UserInfo />
            </US.UserInfoContentContainer>
            
        </US.UserInfoContainer>
    );
}

