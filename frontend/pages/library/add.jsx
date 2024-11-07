import BookSearch from "@/components/library/BookSearch";
import * as LS from "../../components/_styled/libraryStyled";
import * as HCS from "../../components/layout/Styled";
import { useEffect, useState } from "react";

export default function AddLibrary() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const [selectedBook, setSelectedBook] = useState();
  const handleBookClick = (book) => {
    setSelectedBook(book);
    handleSearchClose();
  };

  useEffect(() => {}, [selectedBook]);

  return (
    <LS.LibraryWrapper>
      {isSearchOpen && (
        <LS.LibraryRecordModalOverlay>
          <BookSearch
            handleSearchClose={handleSearchClose}
            handleBookClick={handleBookClick}
          />
        </LS.LibraryRecordModalOverlay>
      )}
      <LS.AddBookContainer>
        <HCS.HeaderContainer>
          <HCS.HeaderPath>Add Book</HCS.HeaderPath>
        </HCS.HeaderContainer>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Title</LS.AddBookInputText>
          <LS.AddBookInput
            onClick={handleSearchOpen}
            placeholder={selectedBook ? selectedBook.title : "책 검색"}
            type="text"
            readOnly={true}
          />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Writer</LS.AddBookInputText>
          <LS.AddBookInput
            placeholder={selectedBook ? selectedBook.writer : "작가"}
            type="text"
          />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Publisher</LS.AddBookInputText>
          <LS.AddBookInput
            placeholder={selectedBook ? selectedBook.publisher : "출판사"}
            type="text"
          />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Summary</LS.AddBookInputText>
          <LS.AddBookTextArea
            type="text"
            placeholder={selectedBook ? selectedBook.summary : null}
          />
        </LS.AddBookInputSection>

        <LS.AddBookSubmitButton>완료</LS.AddBookSubmitButton>
      </LS.AddBookContainer>
    </LS.LibraryWrapper>
  );
}
