import { useState } from "react";
import * as S from "./Styled.jsx";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function BookCard({
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
        src={book.coverImage}
        alt="book_image"
        width={100}
        height={150}
      />
      <S.BookInformation>
        <S.BookTitle>
          <S.BookTitleText>{book.title}</S.BookTitleText>
          <S.BookMore icon={faDeleteLeft} onClick={handleDelete} />
        </S.BookTitle>

        <S.BookWriter>{book.author}</S.BookWriter>
      </S.BookInformation>
    </S.BookContainer>
  );
}
