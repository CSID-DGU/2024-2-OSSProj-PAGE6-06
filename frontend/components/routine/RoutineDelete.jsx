import { useRouter } from "next/router";
import * as S from "./Styled";
import { API } from "@/pages/api";

export default function RoutineDelete({
  selectedDeleteRoutine,
  setDeleteModal,
  setRoutines,
}) {
  const router = useRouter();

  const fetchDeleteRoutine = async () => {
    try {
      // console.log(selectedDeleteRoutine.id);
      const token = localStorage.getItem("token");
      await API.delete(`/routine/delete/${selectedDeleteRoutine.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // console.log(selectedDeleteRoutine.id);
      setDeleteModal(false);
    } catch (error) {
      console.error("루틴 삭제 실패:", error);
    }
  };

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
        <S.DeleteDropboxButton onClick={() => setDeleteModal(false)}>
          취소
        </S.DeleteDropboxButton>
      </S.DeleteDropboxButtonSection>
    </S.DeleteDropboxContainer>
  );
}
