import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../components/_styled/clubStyled";
import * as LS from "../../components/_styled/libraryStyled";
import * as HCS from "../../components/layout/Styled";
import { useState, useRef } from "react";

export default function Create() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file && !image) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageDelete = () => {
    setTimeout(() => {
      setImage(null);
    }, 100);
  };

  return (
    <LS.LibraryWrapper>
      <LS.AddBookContainer>
        <HCS.HeaderContainer>
          <HCS.HeaderPath>Make Reading Club</HCS.HeaderPath>
        </HCS.HeaderContainer>

        <S.ClubCreateImageButton onClick={(e) => e.stopPropagation()}>
          {!image ? (
            <>
              <S.ClubCreateImageButtonIcon icon={faPlus} />
              이미지 등록
              <S.ClubCreateImageInputHidden
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <>
              <S.ClubCreateImage
                src={image}
                alt="club_image"
                layout="fill"
                objectFit="cover"
              />
              <S.ClubCreateImageDelete onClick={handleImageDelete}>
                <S.ClubCreateImageDeleteIcon icon={faXmark} />
              </S.ClubCreateImageDelete>
            </>
          )}
        </S.ClubCreateImageButton>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Title</LS.AddBookInputText>
          <LS.AddBookInput placeholder="클럽 명" type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Time</LS.AddBookInputText>
          <LS.AddBookInput placeholder="시간(분 단위)" type="number" />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Memo</LS.AddBookInputText>
          <LS.AddBookTextArea type="text" />
        </LS.AddBookInputSection>

        <LS.AddBookSubmitButton>완료</LS.AddBookSubmitButton>
      </LS.AddBookContainer>
    </LS.LibraryWrapper>
  );
}
