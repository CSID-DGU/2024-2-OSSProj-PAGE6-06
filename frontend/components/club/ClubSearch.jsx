import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";
import { useRouter } from "next/router";

export default function ClubSearch() {
  const router = useRouter();
  return (
    <S.ClubSearchContainer>
      <S.ClubSearchSection>
        <S.ClubSearchIcon icon={faSearch} />
        <S.ClubSearchInput
          placeholder="검색할 클럽을 입력해주세요."
          type="text"
        />
      </S.ClubSearchSection>
      <S.ClubCreateButton onClick={() => router.push(`/club/create`)}>
        클럽 만들기
      </S.ClubCreateButton>
    </S.ClubSearchContainer>
  );
}
