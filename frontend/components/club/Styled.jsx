import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";

// ClubCard
export const ClubCardContainer = styled.div`
  width: 160px;
  height: 235px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 15px 0;
`;

export const ClubCardImage = styled(Image)`
  object-fit: cover;
  width: 160px;
  border-radius: 10px 10px 0 0;
`;

export const ClubCardInfo = styled.div`
  width: 100%;
  display: flex;
  color: #64748b;
  font-size: 10px;
  justify-content: space-between;
  padding: 8%;
`;

export const ClubCardInfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;
`;

export const ClubCardInfoIcon = styled(FontAwesomeIcon)`
  width: 10px;
`;

export const ClubCardTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding: 0 8%;
  width: 100%;
`;

export const ClubCardDescription = styled.div`
  font-size: 10px;
  padding: 8%;
  width: 100%;
  line-height: 12px;
  height: 50px;
`;

export const ClubCardButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8% 8% 8%;
  font-size: 10px;
  font-weight: 500;
  background-color: transparent;
`;

export const ClubCardButtonShow = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  background-color: #cbd5e1;
  color: #475569;
  padding: 5%;
  border-radius: 5px;
`;

export const ClubCardButtonJoin = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  background-color: #64748b;
  color: #f1f5f9;
  padding: 5%;
  border-radius: 5px;
`;

// ClubSearch
export const ClubSearchContainer = styled.div`
  width: 100%;
  padding: 3% 5%;
  display: flex;
  gap: 3%;
  align-items: center;
  justify-content: space-between;
`;

export const ClubSearchSection = styled.form`
  width: 70%;
  padding: 3%;
  background-color: #f1f4f7;
  color: #9ca3af;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 3%;
`;

export const ClubSearchIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  width: 12px;
`;

export const ClubSearchInput = styled.input`
  font-size: 12px;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-weight: 500;
`;

export const ClubCreateButton = styled.div`
  width: 30%;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #64748b;
  color: #f8fafc;
  font-size: 12px;
  font-weight: 500;
`;

// Club Routine Card
export const ClubRoutineCardUser = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 3%;
  gap: 3%;
`;

export const ClubRoutineCardUserImage = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;

export const ClubRoutineCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClubRoutineCardUserInfoName = styled.div`
  font-size: 12px;
  color: #0f172a;
  padding-bottom: 5%;
`;

export const ClubRoutineCardUserInfoDate = styled.div`
  font-size: 10px;
  color: #64748b;
`;

// Error
export const Error = styled.div`
  background-color: #fff;
  color: #0f172a;
  top: 30vh;
  z-index: 400;
  width: 90%;
  margin: 5%;
  padding: 7% 0;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const ErrorButton = styled.div`
  width: 100%;
  margin-top: 7%;
  padding-top: 5%;
  border-top: 1px solid #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
