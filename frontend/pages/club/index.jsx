import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as CS from "../../components/_styled/clubStyled";
import ClubCard from "@/components/club/ClubCard";
import { useState } from "react";

export default function Club() {
  const [clubs, setClubs] = useState([]);

  // dummy
  const data = [
    {
      id: 0,
      count: 16,
      time: 30,
      image:
        "https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_contents_01_300x300@2x.png",
      title: "책 제목",
      description:
        "매일 아침 30분씩 모닝 독서를 합니다. 따뜻한 차와 함께 독서를 합시다!",
    },
    {
      id: 1,
      count: 16,
      time: 30,
      image:
        "https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_contents_01_300x300@2x.png",
      title: "안녕",
      description: "흥칫뿡",
    },
    {
      id: 2,
      count: 100,
      time: 45,
      image:
        "https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_contents_01_300x300@2x.png",
      title: "잘가",
      description: "흥칫뿡",
    },
  ];

  return (
    <MS.MainWrapper>
      <Header path="Reading Club" />
      <CS.ClubPopularContainer>
        <CS.ClubPopularTitle>인기 리딩 클럽</CS.ClubPopularTitle>
        <CS.ClubPopularCardSection>
          {data.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </CS.ClubPopularCardSection>
      </CS.ClubPopularContainer>
    </MS.MainWrapper>
  );
}
