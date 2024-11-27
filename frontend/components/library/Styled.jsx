import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Book
export const BookContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const BookImage = styled(Image)`
  width: 100px;
  border-radius: 5px;
`;

export const BookInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookTitle = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #1e293b;
  display: flex;
  justify-content: space-between;
  margin: 10% 0;
`;

export const BookMore = styled(FontAwesomeIcon)`
  padding-right: 5%;
  cursor: pointer;
  z-index: 150;
`;

export const BookWriter = styled.div`
  font-size: 14px;
  color: #64748b;
`;

// RecordModal
export const RecordModalContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  height: 70vh;
  z-index: 400;
  bottom: 0;
  width: 100%;
  /* padding: 5%; */
  position: absolute;
  border-radius: 10px 10px 0 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const RecordBookTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  width: 100%;
`;

export const RecordModalCloseButton = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export const RecordList = styled.div`
  width: 100%;
  height: 65vh;
  flex-direction: column;
  padding: 5%;
  overflow-y: auto;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;
