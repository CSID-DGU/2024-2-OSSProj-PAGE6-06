import * as S from "./Styled";

export default function BookSearchCard({ book, onClick }) {
  return (
    <S.SearchCardContainer onClick={onClick}>
      <S.SearchCardImageSection>
        <S.SearchCardImage
          src={book.image}
          layout="fill"
          objectFit="cover"
          alt="book_image"
        />
      </S.SearchCardImageSection>
      <S.SearchCardInformation>
        <S.SearchCardTitle>{book.title}</S.SearchCardTitle>
        <S.SearchCardWriter>
          {book.writer} | {book.publisher}
        </S.SearchCardWriter>
        <S.SearchCardWriter>
          {book.summary.length > 20
            ? `${book.summary.slice(0, 20)}...`
            : book.summary}
        </S.SearchCardWriter>
      </S.SearchCardInformation>
    </S.SearchCardContainer>
  );
}
