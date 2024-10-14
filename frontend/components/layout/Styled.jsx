import styled from "styled-components";

// Layout
export const LayoutWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid black;
  overflow: hidden;
`;

export const LayoutContent = styled.div`
  flex: 1 0 auto;
  width: 90%;
  margin: 5%;
`;

// Header
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  z-index: 150;
  padding: 3% 5%;
  position: relative;
`;

// Footer
export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  z-index: 150;
  padding: 3% 5%;
  bottom: 0;
  position: absolute;
`;
