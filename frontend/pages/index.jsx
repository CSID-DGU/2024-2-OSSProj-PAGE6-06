import Header from "@/components/layout/Header";
import * as MS from "../components/_styled/mainStyled";
import JoinClub from "@/components/main/JoinClub";
import PopularPlace from "@/components/main/PopularPlace";
import RandomBookList from "@/components/main/RandomBookList";
export default function Main() {
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
