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
