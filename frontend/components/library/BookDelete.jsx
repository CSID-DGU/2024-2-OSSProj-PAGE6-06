import { useRouter } from "next/router";
import * as S from "./Styled";
import { API } from "@/pages/api";

export default function BookDelete({ selectedDeleteBook, setDeleteModal }) {
  const router = useRouter();
  const fetchDeleteBook = async () => {
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
      setDeleteModal(false);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.DeleteDropboxContainer>
      "{selectedDeleteBook.title}"을/를 삭제하시겠습니까?
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
