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
