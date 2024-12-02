import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PlaceModal from "./PlaceModal";
import * as S from "../Styled";
import { useKakaoLoader } from "react-kakao-maps-sdk";

export default function Place({ setPlace }) {
  useKakaoLoader();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaceName, setSelectedPlaceName] = useState("");
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

  const openModal = () => {
    setIsModalOpen(true);
    localStorage.removeItem("selectedPlaceName");
    localStorage.removeItem("selectedPlaceAddress");
  };

  const selectPlace = (selectedPlaceName) => {
    setPlace(selectedPlaceName);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    const storedPlaceName = localStorage.getItem("selectedPlaceName");
    if (storedPlaceName) {
      setSelectedPlaceName(storedPlaceName);
    }
    // console.log(selectedPlaceName, storedPlaceName);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = KAKAO_SDK_URL;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  useEffect(() => {
    selectPlace(selectedPlaceName);
  }, [selectedPlaceName]);

  return (
    <S.PlaceContainer>
      <S.InputContainer>
        <S.Label>Where</S.Label>
        <S.SearchBox>{selectedPlaceName || "장소를 선택해 주세요"}</S.SearchBox>
        <S.SearchIcon icon={faSearch} onClick={openModal} />
      </S.InputContainer>

      {isModalOpen && <PlaceModal onClose={closeModal} />}
    </S.PlaceContainer>
  );
}
