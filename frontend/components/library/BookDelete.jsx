import { useRouter } from "next/router";
import * as S from "./Styled";
import { API } from "@/pages/api";
import { useCallback } from "react";

export default function BookDelete({ selectedDeleteBook, setDeleteModal }) {
  const router = useRouter();
  const fetchDeleteBook = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.delete(
        `/mylibrary/books/delete/${selectedDeleteBook.id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setDeleteModal();
      router.reload();
    } catch (error) {
      console.log(error);
    }
  }, [selectedDeleteBook.id, router]);

  return (
    <S.DeleteDropboxContainer>
      &quot;{selectedDeleteBook.title}&quot;을/를
      <br />
      삭제하시겠습니까?
      <S.DeleteDropboxButtonSection>
        <S.DeleteDropboxButton
          onClick={fetchDeleteBook}
          style={{ color: "red" }}
        >
          삭제
        </S.DeleteDropboxButton>
        <S.DeleteDropboxButtonLine />
        <S.DeleteDropboxButton onClick={() => setDeleteModal(false)}>
          취소
        </S.DeleteDropboxButton>
      </S.DeleteDropboxButtonSection>
    </S.DeleteDropboxContainer>
  );
}