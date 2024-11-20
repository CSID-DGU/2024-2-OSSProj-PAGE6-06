import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function RecordEditDropbox({ record, editModalRef }) {
  return (
    <S.DropboxContainer ref={editModalRef}>
      <S.DropboxText>
        <S.DropboxIcon icon={faPenToSquare} />
        수정하기
      </S.DropboxText>
      <S.DropboxText>
        <S.DropboxIcon icon={faXmark} />
        삭제하기
      </S.DropboxText>
    </S.DropboxContainer>
  );
}
