import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";

export default function Routine() {
  return (
    <MS.MainWrapper>
      <Header path="My Reading Routine" />
      <MS.MainContainer>routine</MS.MainContainer>
    </MS.MainWrapper>
  );
}
