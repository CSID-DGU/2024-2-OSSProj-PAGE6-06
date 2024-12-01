import React, { useEffect, useState } from "react";
import * as S from "../Styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { API } from "@/pages/api";

export default function Book({ initial, setBook }) {
  const [selectedBook, setSelectedBook] = useState(initial || "책을 선택하세요");
  const [isOpen, setIsOpen] = useState(false);
  const [bookList, setBookList] = useState([]);

  const fetchBookList = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/mylibrary/booklist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setBookList(response.data);
    } catch (e) {
      console.error("책 목록을 불러오는 중 오류 발생:", e);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const truncateText = (text, maxLength = 20) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const selectBook = (book) => {
    setSelectedBook(truncateText(book.title));
    setIsOpen(false);
  };

  return (
    <S.InputContainer>
      <S.Label>What</S.Label>
      <S.DropdownContainer onClick={toggleDropdown}>
        <S.BookText>{truncateText(selectedBook)}</S.BookText> {/* 말줄임표 적용 */}
        <S.DownIcon icon={faChevronDown} />
      </S.DropdownContainer>

      {isOpen && (
        <S.DropdownListContainer>
          {bookList.map((book, index) => (
            <S.DropdownListItem
              key={index}
              onClick={() => selectBook(book)}
            >
              {truncateText(book.title)} 
            </S.DropdownListItem>
          ))}
        </S.DropdownListContainer>
      )}
    </S.InputContainer>
  );
}