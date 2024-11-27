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
  width: 30px;
  height: 30px;
  background-color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LibraryAddButton = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export const LibraryList = styled.div`
  width: 90%;
  margin: 0 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
`;

// add book
export const AddBookContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh);
`;

export const AddBookInputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
`;

export const AddBookInputText = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5%;
`;

export const AddBookInput = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 5%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #f1f4f7;
  color: #64748b;
  font-weight: 500;

  ::placeholder {
    color: #64748b;
  }

  &:focus {
    color: #0f172a;
  }
`;

export const AddBookTextArea = styled.textarea`
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  min-height: 20vh;
  padding: 5%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #f1f4f7;
  color: #64748b;
  font-weight: 500;
  resize: none;

  ::placeholder {
    color: #64748b;
  }

  &:focus {
    color: #0f172a;
  }
`;

export const AddBookSubmitButton = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 5%;
  padding: 5%;
  background-color: #cbd5e1;
  color: #0f172a;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;

  background-color: ${(props) => (props.$isActive ? "#cbd5e1" : "#64748B")};
  color: ${(props) => (props.$isActive ? "#0f172a" : "#F8FAFC")};
  ${(props) => props.$isActive && "pointer-events: none;"}
`;
