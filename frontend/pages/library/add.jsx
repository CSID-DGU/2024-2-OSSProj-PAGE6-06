import * as LS from "../../components/_styled/libraryStyled";
import * as HCS from "../../components/layout/Styled";

export default function AddLibrary() {
  return (
    <LS.LibraryWrapper>
      {/* 책 제목 검색 모달 */}
      <LS.AddBookContainer>
        <HCS.HeaderContainer>
          <HCS.HeaderPath>Add Book</HCS.HeaderPath>
        </HCS.HeaderContainer>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Title</LS.AddBookInputText>
          <LS.AddBookInput placeholder="책 제목" type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Writer</LS.AddBookInputText>
          <LS.AddBookInput placeholder="작가" type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Publisher</LS.AddBookInputText>
          <LS.AddBookInput placeholder="출판사" type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Summary</LS.AddBookInputText>
          <LS.AddBookTextArea type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookSubmitButton>완료</LS.AddBookSubmitButton>
      </LS.AddBookContainer>
    </LS.LibraryWrapper>
  );
}
