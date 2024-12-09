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
      const token = localStorage.getItem("token");
      await API.delete(`routinelist/routinedelete/${selectedDeleteRoutine.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      console.error("루틴 삭제 실패:", error);
    }
  };
  const handleDelete = (() => {
    fetchDeleteRoutine();
    setDeleteModal(false);
    router.reload();
  })

  return (
    <S.DeleteDropboxContainer>
      <S.ModalText>
        &quot;{selectedDeleteRoutine?.title}&quot; 루틴을/를 삭제하시겠습니까?
      </S.ModalText>
      <S.DeleteDropboxButtonSection>
        <S.DeleteDropboxButton
          onClick={handleDelete}
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