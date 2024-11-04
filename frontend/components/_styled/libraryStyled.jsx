import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LibraryWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100%;
  display: flex;
  position: relative;
`;

export const LibraryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 80px);
`;

export const LibraryRecordModalOverlay = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #9fa2a6b3;
  z-index: 200;
`;

export const LibraryAdd = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const LibraryButtonBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LibraryAddButton = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

export const LibraryList = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
