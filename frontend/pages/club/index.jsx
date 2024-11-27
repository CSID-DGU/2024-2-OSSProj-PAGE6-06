import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as CS from "../../components/_styled/clubStyled";
import ClubCard from "@/components/club/ClubCard";
import { useEffect, useState } from "react";
import ClubSearch from "@/components/club/ClubSearch";
import { API } from "../api";

export default function Club() {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/clublist`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setClubs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const [searchClub, setSearchClub] = useState("");
  const [searchClubList, setSearchClubList] = useState([]);

  const fetchSearchClub = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/search/clublist/${searchClub}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setSearchClubList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchSearchClub();
    }
  };

  return (
    <MS.MainWrapper>
      <Header path="Reading Club" />
      <CS.ClubContainer>
        <CS.ClubPopularContainer>
          <CS.ClubPopularTitle>인기 리딩클럽</CS.ClubPopularTitle>
          <CS.ClubPopularCardSection>
            {clubs.map((club, index) => (
              <ClubCard key={index} club={club} />
            ))}
          </CS.ClubPopularCardSection>
        </CS.ClubPopularContainer>
        <CS.ClubPopularContainer>
          <CS.ClubPopularTitle>리딩클럽 모아보기</CS.ClubPopularTitle>
          <ClubSearch
            serachClub={searchClub}
            setSearchClub={setSearchClub}
            handleKeyPress={handleKeyPress}
          />
          <CS.ClubAllCardSection>
            {searchClub ? (
              <>
                {searchClubList.map((club, index) => (
                  <ClubCard key={index} club={club} />
                ))}
              </>
            ) : (
              <>
                {clubs.map((club, index) => (
                  <ClubCard key={index} club={club} />
                ))}
              </>
            )}
          </CS.ClubAllCardSection>
        </CS.ClubPopularContainer>
      </CS.ClubContainer>
    </MS.MainWrapper>
  );
}
