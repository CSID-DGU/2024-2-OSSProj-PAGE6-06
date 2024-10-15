import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Book
export const BookContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;

export const BookImage = styled(Image)`
  width: 100px;
  border-radius: 5px;
`;

export const BookInfomaion = styled.div`
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
`;

export const BookWriter = styled.div`
  font-size: 14px;
  color: #64748b;
`;
