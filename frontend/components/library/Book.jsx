import { useState } from "react";
import * as S from "./Styled.jsx";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Book({
  book,
  onClick,
  deleteModal,
  setDeleteModal,
  setSelectedDeleteBook,
}) {
  const handleDelete = () => {
    setSelectedDeleteBook(book);
    setDeleteModal(!deleteModal);
  };
  return (
    <S.BookContainer>
      <S.BookImage
        onClick={onClick}
        src={book.image}
        alt="book_image"
        width={100}
        height={150}
      />
      <S.BookInfomaion>
        <S.BookTitle>
          {book.title}
          <S.BookMore icon={faDeleteLeft} onClick={handleDelete} />
        </S.BookTitle>

        <S.BookWriter>{book.writer}</S.BookWriter>
      </S.BookInformation>
    </S.BookContainer>
  );
}
