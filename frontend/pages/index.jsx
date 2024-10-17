import Header from "@/components/layout/Header";
import * as MS from "../components/_styled/mainStyled";

export default function Main() {
  return (
    <MS.MainWrapper>
      <Header path="Reading Routine" />
      <MS.MainContainer>Main</MS.MainContainer>
    </MS.MainWrapper>
  );
}
