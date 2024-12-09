import { useCallback } from "react";
import * as S from "./Styled";
import { useRouter } from "next/router";
import { API } from "@/pages/api";

export default function RoutineDelete({ selectedDeleteRoutine, setDeleteModal }) {
  const router = useRouter();

  const fetchDeleteRoutine = useCallback(async (selectedDeleteRoutine) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("토큰이 존재하지 않습니다.");
        return;
      }
      const response = await API.delete(`/routinedelete/${selectedDeleteRoutine.id}`, {});
      console.log("삭제 성공", response.data);
      setDeleteModal(false);
      router.reload();
    } catch (error) {
      console.error("루틴 삭제 중 오류 발생:", error);
    }
  }, [router, setDeleteModal]);

  return (
    <S.DeleteDropboxContainer>
      <S.ModalText>
        &quot;{selectedDeleteRoutine?.title}&quot;<br/>루틴을/를 삭제하시겠습니까?
      </S.ModalText>
      <S.DeleteDropboxButtonSection>
        <S.DeleteDropboxButton
          onClick={() => fetchDeleteRoutine(selectedDeleteRoutine)}
          style={{ color: "red" }}
        >
          삭제
        </S.DeleteDropboxButton>
        <S.DeleteDropboxButtonLine />
        <S.DeleteDropboxButton
          onClick={() => setDeleteModal(false)}
        >
          취소
        </S.DeleteDropboxButton>
      </S.DeleteDropboxButtonSection>
    </S.DeleteDropboxContainer>
  );
}
