import styled from "styled-components";

export const RoutineContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoutineContentContainer = styled.div`
    width: 346px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Line = styled.hr`
    width:345px;
    height:1px;
    background: #94A3B8;
    margin-top: 25px;
`;

//routineIng
export const RoutineIngPage = styled.div`
    width: 100%;
    height:100%;
    background: #F1F5F9;
    display:flex;
    gap:93px;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;
export const RoutineIngContainer = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    gap:20vh;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;

//routineFinish
export const RoutineFinishPage = styled(RoutineIngPage)`
    background:#fff;
    gap:21px;
    display:flex;
    width:100%;
`;
export const RoutineFinishContentContainer= styled.div`
    width: 346px;
    display:flex;
    flex-direction:column;
    margin-top:30px;
    gap: 30px;
`;
export const RoutineInfo = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10px;
`;
export const Date = styled.div`
    color: #0F172A;
    font-size: 24px;
    font-weight: 600;
    line-height: 132%; /* 31.68px */
    letter-spacing: -0.48px;
`;
export const Title = styled.div`
    color: #0F172A;
    font-size: 20px;
    font-weight: 600;
    line-height: 132%; /* 31.68px */
    letter-spacing: -0.48px;
`;
export const SubmitButton = styled.button`
    width: 346px;
    height: 61px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E2E8F0;
    border:none;
    color: #0F172A;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 132%;
    letter-spacing: -0.4px;

    &:hover{
        background: #CBD5E1;
    }

    position: absolute;
    bottom:35px;

`;

//makeRoutine

export const MakeRoutineContentContainer = styled(RoutineContentContainer)`
    display:flex;
    flex-direction:column;
    gap:21px;
    margin-top:22px;
`;
export const PageTitle = styled.div`
    width:100%;
    color: #0F172A;
    font-weight: 700;
    font-size: 24px;
    line-height: 132%; 
    letter-spacing: -0.48px;
`;