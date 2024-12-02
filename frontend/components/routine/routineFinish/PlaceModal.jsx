import React, { useState, useEffect } from "react";
import KakaoMap from "./KakaoMap";
import * as S from "../Styled";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useKakaoLoader } from "react-kakao-maps-sdk";

export default function PlaceModal({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useKakaoLoader();

  useEffect(() => {
    const checkLocalStorage = () => {
      const selectedPlaceName = localStorage.getItem("selectedPlaceName");
      if (selectedPlaceName) {
        onClose();
      }
    };

    checkLocalStorage();
    window.addEventListener("storage", checkLocalStorage);

    return () => {
      window.removeEventListener("storage", checkLocalStorage);
    };
  }, [onClose]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchKeyword(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose} icon={faClose} />
        <S.InputContainer>
          <S.SearchInput
            placeholder="장소를 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </S.InputContainer>
        <KakaoMap searchKeyword={searchKeyword} onClose={onClose} />
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
