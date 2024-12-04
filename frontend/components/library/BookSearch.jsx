import { useEffect, useState } from "react";
import BookSearchCard from "./BookSearchCard";
import * as S from "./Styled";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { API } from "@/pages/api";

export default function BookSearch({ handleSearchClose, handleBookClick }) {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  const fetchBooks = async () => {
    if (!searchBook.trim()) return; // Prevent empty searches
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/mylibrary/books/search/${searchBook}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <S.SearchContainer>
      <S.RecordBookTitle>
        <S.RecordModalCloseButton icon={faXmark} onClick={handleSearchClose} />
      </S.RecordBookTitle>
      <S.SearchBookInputSection onSubmit={handleSubmit}>
        <S.SearchBookInputIcon icon={faSearch} onClick={handleSubmit} />
        <S.SearchBookInput
          placeholder="검색할 도서를 입력해주세요."
          type="text"
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
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
