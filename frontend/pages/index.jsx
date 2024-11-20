import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import * as MS from "../components/_styled/mainStyled";
import JoinClub from "@/components/main/JoinClub";
import PopularPlace from "@/components/main/PopularPlace";
import RandomBookList from "@/components/main/RandomBookList";
import { API } from "@/pages/api";

export default function Main() {
  const [userClubs, setUserClubs] = useState([]);
  const [topPlaces, setTopPlaces] = useState([]);
  const [topBooks, setTopBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMain = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/main`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
      setUserClubs(response.data.userclubs);
      setTopPlaces(response.data.topplaces);
      setTopBooks(response.data.topbooks);
    } catch (error) {
      console.error("요청 중 오류 발생:", error);
      setErrorMessage("데이터를 불러오는 데 실패했습니다.");
    }
  }, []);

  useEffect(() => {
    fetchMain();
  }, [fetchMain]);

  return (
    <MS.MainWrapper>
      <Header path="Reading Routine" />
      <MS.MainContainer>
            <RandomBookList books={topBooks} />
            <PopularPlace places={topPlaces} />
            <JoinClub clubs={userClubs} />
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}