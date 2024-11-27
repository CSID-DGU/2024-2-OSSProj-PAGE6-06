import Header from "@/components/layout/Header";
import Book from "@/components/library/Book";
import RecordModal from "@/components/library/RecordModal";

import * as MS from "../../components/_styled/mainStyled";
import * as LS from "../../components/_styled/libraryStyled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookDelete from "@/components/library/BookDelete";
import { API } from "../api";

export default function Library() {
  const router = useRouter();

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await API.get(`/mylibrary/booklist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = response.data;
      setBooks(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Book Record Modal
  const [currentBook, setCurrentBook] = useState({});
  const [isRecordOpen, setRecordOpen] = useState(false);
  const handleRecordOpen = () => {
    setRecordOpen(true);
  };
  const handleRecordClose = () => {
    setRecordOpen(false);
  };
  const handleRecordClick = (data) => {
    const current = data;
    setCurrentBook(current);
    handleRecordOpen();
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedDeleteBook, setSelectedDeleteBook] = useState(null);

  return (
    <LS.LibraryWrapper>
      {isRecordOpen && (
        <LS.LibraryRecordModalOverlay>
          <RecordModal
            book={currentBook}
            handleRecordClose={handleRecordClose}
          />
        </LS.LibraryRecordModalOverlay>
      )}
      {deleteModal && (
        <LS.LibraryRecordModalOverlay>
          <BookDelete
            selectedDeleteBook={selectedDeleteBook}
            setDeleteModal={setDeleteModal}
          />
        </LS.LibraryRecordModalOverlay>
      )}
      <LS.LibraryContainer>
        <Header path="My Library" />
        <LS.LibraryAdd>
          <LS.LibraryButtonBox
            onClick={() => {
              router.push(`/library/add`);
            }}
          >
            <LS.LibraryAddButton icon={faPlus} />
          </LS.LibraryButtonBox>
        </LS.LibraryAdd>
        {/* Library List Section */}
        <LS.LibraryList>
          {books.map((book, idx) => (
            <Book
              onClick={() => {
                handleRecordClick(book);
              }}
              key={idx}
              book={book}
              deleteModal={deleteModal}
              setDeleteModal={setDeleteModal}
              setSelectedDeleteBook={setSelectedDeleteBook}
            />
          ))}
        </LS.LibraryList>
      </LS.LibraryContainer>
    </LS.LibraryWrapper>
  );
}
