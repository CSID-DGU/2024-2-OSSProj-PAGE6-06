import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";

export default function Record() {
  return (
    <MS.MainWrapper>
      <Header path="My Record" />
      <MS.MainContainer>record</MS.MainContainer>
    </MS.MainWrapper>
  );
}
