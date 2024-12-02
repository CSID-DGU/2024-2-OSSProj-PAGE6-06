import BookSearch from "@/components/library/BookSearch";
import * as LS from "../../components/_styled/libraryStyled";
import * as HCS from "../../components/layout/Styled";
import { useEffect, useState } from "react";
import { API } from "../api";
import { useRouter } from "next/router";

export default function AddLibrary() {
  const router = useRouter();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const [selectedBook, setSelectedBook] = useState(null);
  const handleBookClick = (book) => {
    setSelectedBook(book);
    handleSearchClose();
  };

  const handleSubmit = async () => {
    if (!selectedBook) return;

    const token = localStorage.getItem("token");

    try {
      const response = await API.post(
        `/mylibrary/books/add`,
        {
          title: selectedBook.title,
          author: selectedBook.author,
          publisher: selectedBook.publisher,
          coverImage: selectedBook.coverImage,
          summary: selectedBook.summary,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      router.push(`/library`);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {}, [selectedBook]);

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
            placeholder={selectedBook ? selectedBook.author : "작가"}
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

        <LS.AddBookSubmitButton
          onClick={handleSubmit}
          $isActive={!selectedBook}
        >
          완료
        </LS.AddBookSubmitButton>
      </LS.AddBookContainer>
    </LS.LibraryWrapper>
  );
}
