import styled from "styled-components";
import Image from "next/image";

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
  width: 100%;
  /* margin: 5%; */
`;

// Header
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
  background-color: white;
  z-index: 150;
  padding: 5%;
  position: relative;
`;

export const HeaderPath = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderMypage = styled(Image)`
  /* border: 1px solid black; */
  cursor: pointer;
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
