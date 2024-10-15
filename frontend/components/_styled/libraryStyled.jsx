import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
