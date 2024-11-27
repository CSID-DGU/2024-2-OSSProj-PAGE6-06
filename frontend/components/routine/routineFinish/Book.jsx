import React, { useEffect, useState } from "react";
import * as S from "../Styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { API } from "@/pages/api";

export default function Book({ initial, setBook }) {
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
      const data = response.data;
      setBookList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectBook = (book) => {
    setBook(book);
    setIsOpen(false);
  };

  return (
    <S.InputContainer>
      <S.Label>What</S.Label>
      <S.DropdownContainer onClick={toggleDropdown}>
        <S.BookText>{initial || "책을 선택하세요"}</S.BookText>
        <S.DownIcon icon={faChevronDown} onClick={toggleDropdown} />
      </S.DropdownContainer>

      {isOpen && (
        <S.DropdownListContainer>
          {bookList.map((book, index) => (
            <S.DropdownListItem
              key={index}
              onClick={() => selectBook(book.title)}
            >
              {book.title}
            </S.DropdownListItem>
          ))}
        </S.DropdownListContainer>
      )}
    </S.InputContainer>
  );
}
