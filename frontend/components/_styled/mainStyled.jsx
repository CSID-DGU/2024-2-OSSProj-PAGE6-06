import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  height: calc(100vh - 80px);

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;
