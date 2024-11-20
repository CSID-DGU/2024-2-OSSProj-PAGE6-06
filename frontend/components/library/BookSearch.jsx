import { useEffect, useState } from "react";
import BookSearchCard from "./BookSearchCard";
import * as S from "./Styled";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function BookSearch({ handleSearchClose, handleBookClick }) {
  const books = [
    {
      id: 1,
      title: "채식주의자",
      writer: "한강",
      publisher: "창비",
      summary:
        "이미예 장편소설. 잠들어야만 입장할 수 있는 독특한 마을. 그곳에 들어온 잠든 손님들에게 가장 인기 있는 곳은, 온갖 꿈을 한데 모아 판매하는 '달러구트의 꿈 백화점'이다. 긴 잠을 자는 사람들은 물론이고, 짧은 낮잠을 자는 사람들과 동물들로 매일매일 대성황을 이룬다.",
      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
    },
    {
      id: 2,
      title: "그대의 차가운 손",
      writer: "한강",
      publisher: "창비",
      summary:
        "이미예 장편소설. 잠들어야만 입장할 수 있는 독특한 마을. 그곳에 들어온 잠든 손님들에게 가장 인기 있는 곳은, 온갖 꿈을 한데 모아 판매하는 '달러구트의 꿈 백화점'이다. 긴 잠을 자는 사람들은 물론이고, 짧은 낮잠을 자는 사람들과 동물들로 매일매일 대성황을 이룬다.",

      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932013046.jpg",
    },
    {
      id: 3,
      title: "채식주의자",
      writer: "한강",
      publisher: "창비",
      summary:
        "이미예 장편소설. 잠들어야만 입장할 수 있는 독특한 마을. 그곳에 들어온 잠든 손님들에게 가장 인기 있는 곳은, 온갖 꿈을 한데 모아 판매하는 '달러구트의 꿈 백화점'이다. 긴 잠을 자는 사람들은 물론이고, 짧은 낮잠을 자는 사람들과 동물들로 매일매일 대성황을 이룬다.",

      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
    },
    {
      id: 4,
      title: "그대의 차가운 손",
      writer: "한강",
      publisher: "창비",
      summary:
        "이미예 장편소설. 잠들어야만 입장할 수 있는 독특한 마을. 그곳에 들어온 잠든 손님들에게 가장 인기 있는 곳은, 온갖 꿈을 한데 모아 판매하는 '달러구트의 꿈 백화점'이다. 긴 잠을 자는 사람들은 물론이고, 짧은 낮잠을 자는 사람들과 동물들로 매일매일 대성황을 이룬다.",

      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932013046.jpg",
    },
  ];
  return (
    <S.SearchContainer>
      <S.RecordBookTitle>
        <S.RecordModalCloseButton icon={faXmark} onClick={handleSearchClose} />
      </S.RecordBookTitle>
      <S.SearchBookInputSection>
        <S.SearchBookInputIcon icon={faSearch} />
        <S.SearchBookInput
          placeholder="검색할 도서를 입력해주세요."
          type="text"
        />
      </S.SearchBookInputSection>
      <S.SearchBookList>
        {books.map((book, index) => (
          <BookSearchCard
            key={index}
            book={book}
            onClick={() => handleBookClick(book)}
          />
        ))}
      </S.SearchBookList>
    </S.SearchContainer>
  );
}
