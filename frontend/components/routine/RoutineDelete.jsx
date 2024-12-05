import { useCallback } from "react";
import * as S from "./Styled";
import { useRouter } from "next/router";
import { API } from "@/pages/api";

export default function RoutineDelete({ selectedDeleteRoutine, setDeleteModal, setRoutines }) {
  const router = useRouter();
  const fetchDeleteRoutine = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(selectedDeleteRoutine);
      const response = await API.delete(`routinelist/routine/delete/${selectedDeleteRoutine.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
        setDeleteModal(false);
        router.reload();
        console.log("삭제 성공:", response.data);
    } catch (error) {
      console.error("루틴 삭제 실패:", error);
    }
  }, [setRoutines]);

  return (
    <S.DeleteDropboxContainer>
      <S.ModalText>
        "{selectedDeleteRoutine?.title}" 루틴을/를 삭제하시겠습니까?
      </S.ModalText>
      <S.DeleteDropboxButtonSection>
        <S.DeleteDropboxButton
          onClick={fetchDeleteRoutine} 
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
};