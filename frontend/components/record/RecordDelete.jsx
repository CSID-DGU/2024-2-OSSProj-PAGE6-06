import { useRouter } from "next/router";
import * as S from "../library/Styled";
import { API } from "@/pages/api";

export default function RecordDelete({ selectedDeleteRecord, setDeleteModal }) {
  const router = useRouter();
  const fetchDeleteRecord = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.delete(
        `/delete/record/${selectedDeleteRecord.id}`,
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
    <S.RecordDeleteDropboxContainer>
      기록을 삭제하시겠습니까?
      <S.DeleteDropboxButtonSection>
        <S.DeleteDropboxButton
          onClick={fetchDeleteRecord}
          style={{ color: "red" }}
        >
          삭제
        </S.DeleteDropboxButton>
        <S.DeleteDropboxButtonLine />
        <S.DeleteDropboxButton onClick={() => setDeleteModal(false)}>
          취소
        </S.DeleteDropboxButton>
      </S.DeleteDropboxButtonSection>
    </S.RecordDeleteDropboxContainer>
  );
}
