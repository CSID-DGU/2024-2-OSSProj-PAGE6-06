import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  height: calc(100vh);
  align-items: center;
  gap: 10px;
  padding-bottom: 80px;
  background-color: #fff;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;
