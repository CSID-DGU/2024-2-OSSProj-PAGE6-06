import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as CS from "../../components/_styled/clubStyled";
import * as LS from "../../components/_styled/libraryStyled";
import ClubCard from "@/components/club/ClubCard";
import { useEffect, useState } from "react";
import ClubSearch from "@/components/club/ClubSearch";
import { API } from "../api";
import Error from "@/components/club/Error";

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

  const [popularClubs, setPopularClubs] = useState([]);
  const fetchPopularClubs = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(`/clublist/popular`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setPopularClubs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClubs();
    fetchPopularClubs();
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

  const [joinError, setJoinError] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const handleErrorModal = (e) => {
    setErrorMessages(e);
    setJoinError(!joinError);
  };

  return (
    <MS.MainWrapper>
      {joinError && (
        <>
          <LS.LibraryRecordModalOverlay />
          <Error message={errorMessages} setJoinError={setJoinError} />
        </>
      )}
      <Header path="Reading Club" />
      <CS.ClubContainer>
        <CS.ClubPopularContainer>
          <CS.ClubPopularTitle>인기 리딩클럽</CS.ClubPopularTitle>
          <CS.ClubPopularCardSection>
            {popularClubs.map((club, index) => (
              <ClubCard
                key={index}
                club={club}
                handleErrorModal={handleErrorModal}
              />
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
                  <ClubCard
                    key={index}
                    club={club}
                    handleErrorModal={handleErrorModal}
                  />
                ))}
              </>
            ) : (
              <>
                {clubs.map((club, index) => (
                  <ClubCard
                    key={index}
                    club={club}
                    handleErrorModal={handleErrorModal}
                  />
                ))}
              </>
            )}
          </CS.ClubAllCardSection>
        </CS.ClubPopularContainer>
      </CS.ClubContainer>
    </MS.MainWrapper>
  );
}
