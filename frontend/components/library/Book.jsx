import * as S from "./Styled.jsx";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function Book({ book, onClick }) {
  return (
    <S.BookContainer onClick={onClick}>
      <S.BookImage src={book.image} alt="book_image" width={100} height={150} />
      <S.BookInfomaion>
        <S.BookTitle>
          {book.title}
          <S.BookMore icon={faEllipsisVertical} />
        </S.BookTitle>

        <S.BookWriter>{book.writer}</S.BookWriter>
      </S.BookInfomaion>
    </S.BookContainer>
  );
}
