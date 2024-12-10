import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Book
export const BookContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* margin-bottom: 5%; */
  margin: 5% 1vh 5%;
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
  align-items: flex-start;
  justify-content: space-between;
  margin: 10% 0;
`;

export const BookTitleText = styled.div`
  width: 70%;
  line-height: 18px;
`;

export const BookMore = styled(FontAwesomeIcon)`
  padding-right: 5%;
  font-size: 10px;
  width: 25px;
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
  /* flex-direction: row-reverse; */
  align-items: center;
  padding: 5%;
  width: 100%;
  line-height: 25px;
  background-color: transparent;
`;

export const RecordModalCloseButton = styled(FontAwesomeIcon)`
  font-size: 20px;
  width: 20px;
  cursor: pointer;
`;

export const RecordList = styled.div`
  width: 100%;
  height: 65vh;
  flex-direction: column;
  padding: 5%;
  overflow-y: auto;
  text-align: center;
  font-size: 14px;
  color: #334155;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;

// BookSearch
export const SearchContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  height: 60vh;
  top: 150px;
  z-index: 400;
  width: 90%;
  margin: 5%;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
`;

export const SearchBookInputSection = styled.form`
  width: 90%;
  margin: 0 5%;
  padding: 3%;
  background-color: #f1f4f7;
  color: #9ca3af;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 3%;
`;

export const SearchBookInputIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  width: 12px;
`;

export const SearchBookInput = styled.input`
  font-size: 12px;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: #64748b;
  font-weight: 500;
`;

export const SearchBookList = styled.div`
  width: 100%;
  height: calc(100%);
  margin-top: 3%;
  padding-bottom: 30%;
  flex-direction: column;
  overflow-y: auto;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;

// BookSearchCard
export const SearchCardContainer = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  padding: 5%;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;
  cursor: pointer;
`;

export const SearchCardImageSection = styled.div`
  width: 20%;
  height: 100px;
  display: block;
  position: relative;
`;

export const SearchCardImage = styled(Image)`
  border-radius: 5px;
  position: absolute;
`;

export const SearchCardInformation = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;

export const SearchCardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #1e293b;
  padding-bottom: 5%;
`;

export const SearchCardWriter = styled.div`
  font-size: 12px;
  color: #64748b;
  padding: 3% 0;
`;

// Book Delete Dropbox
export const DeleteDropboxContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  top: 30vh;
  z-index: 400;
  width: 90%;
  margin: 5%;
  padding-top: 7%;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
`;

export const DeleteDropboxButtonSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 7%;
  border-top: 1px solid #64748b;
  align-items: center;
  justify-content: center;
`;

export const DeleteDropboxButtonLine = styled.div`
  width: 0.5px;
  background-color: #64748b;
  align-self: stretch;
  display: flex;
  height: auto;
`;

export const DeleteDropboxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 60px;
  cursor: pointer;
`;

// Record Delete Dropbox
export const RecordDeleteDropboxContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  top: 40vh;
  left: 0;
  z-index: 1000;
  width: 90%;
  margin: 3% 5%;
  padding-top: 7%;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
