import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";

export default function ClubSearch() {
  return (
    <S.ClubSearchContainer>
      <S.ClubSearchSection>
        <S.ClubSearchIcon icon={faSearch} />
        <S.ClubSearchInput
          placeholder="검색할 클럽을 입력해주세요."
          type="text"
        />
      </S.ClubSearchSection>
      <S.ClubCreateButton>클럽 만들기</S.ClubCreateButton>
    </S.ClubSearchContainer>
  );
}
