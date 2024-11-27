import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RecordDelete from "./RecordDelete";

export default function RecordEditDropbox({ record, editModalRef }) {
  const [deleteModel, setDeleteModel] = useState(false);

  return (
    <S.DropboxContainer ref={editModalRef}>
      <S.DropboxText>
        <S.DropboxIcon icon={faPenToSquare} />
        수정하기
      </S.DropboxText>
      <S.DropboxText
        onClick={() => {
          setDeleteModel(true);
        }}
      >
        <S.DropboxIcon icon={faXmark} />
        삭제하기
      </S.DropboxText>
      {deleteModel && (
        <RecordDelete
          selectedDeleteRecord={record}
          setDeleteModel={setDeleteModel}
        />
      )}
    </S.DropboxContainer>
  );
}
