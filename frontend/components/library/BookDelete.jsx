import { useRouter } from "next/router";
import * as S from "./Styled";

export default function BookDelete({ selectedDeleteBook, setDeleteModal }) {
  const fetchDeleteBook = async () => {
    try {
      // const response = await API.delete(``);
      console.log("삭제다");
      setDeleteModal(false);
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
