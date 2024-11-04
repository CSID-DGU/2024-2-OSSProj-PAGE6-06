import * as CS from "@/components/_styled/clubStyled";
import * as MS from "@/components/_styled/mainStyled";
import ClubRoutineCard from "@/components/club/ClubRoutineCard";
import {
  faClock,
  faCrown,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function ClubDetail({ club }) {
  const router = useRouter();
  const { id } = router.query;

  const data = {
    id: 0,
    count: 16,
    time: 30,
    writer: "김수영",
    image:
      "https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_contents_01_300x300@2x.png",
    title: "책 제목",
    description:
      "매일 아침 30분씩 모닝 독서를 합니다. 따뜻한 차와 함께 독서를 합시다!",
    routines: [
      {
        routine_title: "루틴명",
        routine_time: "30분",
        routine_place: "운동장",
        routine_writer: "김수영",
        created_date: "2024.10.19",
        book_title: "책 제목",
        description: "루틴 설명",
      },
      {
        routine_title: "루틴명222",
        routine_time: "30분",
        routine_place: "운동장",
        routine_writer: "김수영",
        created_date: "2024.10.19",
        book_title: "책 제목",
        description:
          "계속 살아가야 하므로 우리는 어떤 모습을 오래 붙잡아서는 안 되었다. 사라지는 것은 좀처럼 지체하는 법이 없기 때문에, 사라지는 것을 가장 정확하게 표현하는 소리는 뿅 정도이기 때문에. 하지만 순간이 쌓인다는 사실만큼이나 마음이 놓이는 것은 없었다",
      },
    ],
  };

  const routine_data = data.routines;

  return (
    <MS.MainWrapper>
      <CS.ClubDetailContainer>
        <CS.ClubDetailTitle>차와 함께 모닝 독서</CS.ClubDetailTitle>
        <CS.ClubDetailImage
          width={400}
          height={200}
          src={data.image}
          alt="clud_image"
        />
        <CS.ClubDetailInfo>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faCrown} />
            {data.writer}
          </CS.ClubDetailInfoEach>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faUserGroup} />
            {data.count}명 참여중
          </CS.ClubDetailInfoEach>
          <CS.ClubDetailInfoEach>
            <CS.ClubDetailInfoIcon icon={faClock} />
            {data.time}분
          </CS.ClubDetailInfoEach>
        </CS.ClubDetailInfo>
        <CS.ClubDetailDescription>{data.description}</CS.ClubDetailDescription>
        <CS.ClubPopularTitle>루틴 완료 기록</CS.ClubPopularTitle>
        <CS.ClubDetailRoutineSection>
          {routine_data.map((routine, idx) => (
            <ClubRoutineCard key={idx} routine={routine} />
          ))}
        </CS.ClubDetailRoutineSection>
      </CS.ClubDetailContainer>
    </MS.MainWrapper>
  );
}
