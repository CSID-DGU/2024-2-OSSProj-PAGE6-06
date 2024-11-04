import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";

export const ClubContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding-bottom: 80px;
  /* margin-bottom: 80px; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: none; // Width of the scrollbar
    display: none;
  }
`;

export const ClubPopularContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ClubPopularTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  padding: 1% 5%;
`;

export const ClubPopularCardSection = styled.div`
  width: auto;
  margin: 3% 0 5% 0;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 6%;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: none; // Width of the scrollbar
    display: none;
  }
`;

export const ClubAllCardSection = styled.div`
  display: grid;
  width: 100%;
  gap: 3%;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: start;
  padding: 0 5% 5% 5%;
`;

// Club Detail Page
export const ClubDetailContainer = styled.div`
  width: 100%;
  height: calc(100vh);
  /* margin-bottom: 80px; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: none; // Width of the scrollbar
    display: none;
  }
  font-weight: 500;
`;

export const ClubDetailTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
  padding: 5%;
`;

export const ClubDetailImage = styled(Image)`
  width: 90%;
  margin: 0 5%;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ClubDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5%;
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
  gap: 10%;
  width: 50%;
  align-items: center;
`;

export const ClubDetailInfoEach = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ClubDetailInfoIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const ClubDetailDescription = styled.div`
  width: 100%;
  padding: 0 5% 5% 5%;
  font-size: 14px;
  color: #334155;
  font-weight: 500;
  line-height: 20px;
`;

export const ClubDetailRoutineSection = styled.div`
  width: 100%;
  padding: 5%;
`;
