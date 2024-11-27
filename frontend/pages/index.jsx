import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import * as MS from "../components/_styled/mainStyled";
import JoinClub from "@/components/main/JoinClub";
import PopularPlace from "@/components/main/PopularPlace";
import RandomBookList from "@/components/main/RandomBookList";
import { API } from "@/pages/api";

export default function Main() {
  const [values, setValues] = useState({});
  const [topPlaces, setTopPlaces] = useState([]);
  const [topBooks, setTopBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); 

  const fetchMain = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get(`/mainpage`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setValues(response.data);
    } catch (error) {
      console.error("요청 중 오류 발생:", error);
      setErrorMessage("데이터를 불러오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    if (Object.keys(values).length > 0) {
      setTopPlaces(values.topplaces);
      setTopBooks(values.topbooks);
      setIsLoading(false);  
    }
    console.log(values);
    console.log(topBooks);
  }, [values]);

  useEffect(() => {
    fetchMain(); 
  }, []);

  return (
    <MS.MainWrapper>
      <Header path="Reading Routine" />
      <MS.MainContainer>
        <RandomBookList />
        <PopularPlace />
        <JoinClub /> 
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}