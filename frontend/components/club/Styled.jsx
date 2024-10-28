import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";

// ClubCard
export const ClubCardContainer = styled.div`
  width: 160px;
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

export const ClubCardInfoIcon = styled(FontAwesomeIcon)``;

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
