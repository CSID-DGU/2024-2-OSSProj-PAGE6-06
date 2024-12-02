import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../components/_styled/clubStyled";
import * as LS from "../../components/_styled/libraryStyled";
import * as HCS from "../../components/layout/Styled";
import { useState } from "react";
import { API } from "../api";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file && !image) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }

    // 서버 전송 image file
    const fileInput = document.querySelector('input[type="file"]');
    const file_image = fileInput?.files?.[0];
    setImageFile(file_image);
  };

  const handleImageDelete = () => {
    setTimeout(() => {
      setImage(null);
    }, 100);
  };

  const [clubTitle, setClubTitle] = useState("");
  const [clubTime, setClubTime] = useState("");
  const [clubMemo, setClubMemo] = useState("");

  const handleSubmit = async () => {
    if (!clubTitle || !clubTime || !clubMemo) return;

    const token = localStorage.getItem("token");

    try {
      const response = await API.post(
        `/create/clublist`,
        {
          title: clubTitle,
          time: parseInt(clubTime, 10),
          content: clubMemo,
          image: imageFile,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      router.push(`/club`);
    } catch (error) {
      console.log(error);
    }
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
              <S.ClubCreateImage src={image} alt="club_image" fill />
              <S.ClubCreateImageDelete onClick={handleImageDelete}>
                <S.ClubCreateImageDeleteIcon icon={faXmark} />
              </S.ClubCreateImageDelete>
            </>
          )}
        </S.ClubCreateImageButton>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Title</LS.AddBookInputText>
          <LS.AddBookInput
            placeholder="클럽 명"
            type="text"
            value={clubTitle}
            onChange={(e) => setClubTitle(e.target.value)}
          />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Time</LS.AddBookInputText>
          <LS.AddBookInput
            placeholder="시간(분 단위)"
            type="number"
            value={clubTime}
            onChange={(e) => setClubTime(e.target.value)}
          />
        </LS.AddBookInputSection>

        <LS.AddBookInputSection>
          <LS.AddBookInputText>Memo</LS.AddBookInputText>
          <LS.AddBookTextArea
            type="text"
            value={clubMemo}
            onChange={(e) => setClubMemo(e.target.value)}
          />
        </LS.AddBookInputSection>

        <LS.AddBookSubmitButton
          onClick={handleSubmit}
          $isActive={!clubTitle || !clubTime || !clubMemo}
        >
          완료
        </LS.AddBookSubmitButton>
      </LS.AddBookContainer>
    </LS.LibraryWrapper>
  );
}
