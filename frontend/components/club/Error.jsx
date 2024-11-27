import * as S from "./Styled";

export default function Error({ message, setJoinError }) {
  return (
    <S.Error>
      {message}
      <S.ErrorButton onClick={() => setJoinError(false)}>확인</S.ErrorButton>
    </S.Error>
  );
}
