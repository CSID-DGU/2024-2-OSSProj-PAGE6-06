import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
//MakeRoutineButton
export const MakeRoutineButton = styled.button`
    width:345px;
    height:60px;
    border-radius: 10px;
    border:none;
    background: #CBD5E1;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 4%;

`;
export const MakeRoutineButtonText = styled.div`
    color: #0F172A;
    font-size: 20px;
    font-weight: 600;
    line-height: 132%;
    letter-spacing: -0.4px;
`;
export const PlusIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
`;
//RoutineList 
export const RoutineListContainer = styled.div`
    width: 346px;
    height: 546px;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;
`;
export const SettingIconWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

`;
export const SettingIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: #CBD5E1;
`;
export const RoutineListWrapper = styled.div`
    width:100%;
    height: 463px;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top:20px;
    gap: 20px;
`;
export const RoutineContainer = styled.button`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 4%;
    border-radius: 10px;
    border: none;
    background: #F1F4F7;
    &:focus {
        border: 1px solid #94A3B8;
    }
`;
export const RoutineText = styled.div`
    color: #0F172A;
    font-size: 16px;
    font-weight: 500;
    line-height: 132%; 
    letter-spacing: -0.32px;
`;
export const MinuteTextContainer = styled.div`
    width: 58px;
    display:flex;
    align-items: center;
    justify-content: space-around;

`;
export const VerticalLine = styled.div`
    width: 1px;
    height: 40px;
    background: #94A3B8;
`;
export const MinuteText = styled.div`
    color: #0F172A;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 132%; 
    letter-spacing: -0.32px;
`;

export const StartButton = styled.button`
    width: 70px;
    height: 70px;
    all: unset;
`;
export const StartIcon = styled(FontAwesomeIcon)`
    width: 70px;
    height: 70px;
    color:#CBD5E1;
    &:hover {
        color:#334155;
    }
`;

//Timer
export const TimerContainer = styled.div`
    width:334px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
`;
export const TimerText = styled.p`
    color: #0F172A;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    line-height: 132%;
    letter-spacing: -0.96px;
    position:relative;
    bottom:200px;
`;

//TimerInfo
export const TimerInfoContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    gap:12px;
`;
export const TitleText = styled.div`
    color: #0F172A;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 132%; 
    letter-spacing: -0.4px;
`;
export const ContentText = styled.div`
    color: var(--gray600, #475569);
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 132%;
    letter-spacing: -0.3px;
`;
//ProgressBar
export const ProgressBarContainer = styled.div`
    width:100%;
    position:relative;
    bottom:50px;
`;
export const PauseButton = styled.button`
    width: 70px;
    height: 70px;
    all: unset;
`;
export const PauseIcon = styled(FontAwesomeIcon)`
    width: 70px;
    height: 70px;
    color:#334155;
`;