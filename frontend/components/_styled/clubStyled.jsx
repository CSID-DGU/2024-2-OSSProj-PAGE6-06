import styled from "styled-components";

export const ClubPopularContainer = styled.div`
  width: 100%;
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
  gap: 8%;

  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;
