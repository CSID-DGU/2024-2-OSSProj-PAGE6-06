import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//JoinClub
export const JoinClubContainer = styled.div`
    width:346px;
    display:flex;
    flex-direction:column;
    gap:20px;
    margin-bottom:100px;
`;
export const Title = styled.div`
    color: #0F172A;
    font-size: 16px;
    font-weight: 600;
`;
export const ClubCard = styled.div`
    width:100%;
    height:112px;
    border-radius: 10px;
    background:#F8FAFC;
    box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items:center;
    justify-content: center;
`;
export const ClubCardContent = styled.div`
    display:flex;
    width:300px;
    align-items: center;
    gap:10px;
`;
export const ClubImage = styled(Image)`
    width:82px;
    height:82px;
`;
export const ClubInfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:12px;
`;
export const ClubName = styled.div`
    color: #0F172A;
    font-size: 14px;
    font-weight: 600;
`;
export const ClubContent = styled.div`
    color: var(--gray500, #64748B);
    font-size: 12px;
    font-weight: 500;
`;
export const ClubSubWrapper = styled.div`
    display:flex;
    gap:23px;
`;
export const ClubIconTextWrapper = styled.div`
    display:flex;
    gap:6px;
`;
export const ClubSubInfoText = styled.div`
    color: #64748B;
    font-size: 12px;
    font-weight: 500;
`;
export const ClubIcon = styled(FontAwesomeIcon)`
    width:12px;
    height:12px;
    color:#475569;
`;
export const GoClubIcon = styled(FontAwesomeIcon)`
    width:14px;
    height:14px;
    color:#475569;
`;

//PopularClub
export const PopularPlaceContainer = styled.div`
    width:346px;
    display:flex;
    flex-direction:column;
    gap:20px;
`;
export const PlaceCardContainer = styled.div`
    width: 355px;
    height:155px;
    display:flex;
    gap:20px;
    overflow-x: auto;
`;

export const PlaceCard = styled.div`
    width:131px;
    height:146px;
    display:flex;
    flex-direction: column;
    gap:13px;
    align-items: center;
    border-radius: 10px;
    background:  #FFF;
    margin-left:5px;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const PlaceTextContainer = styled.div`
    display:flex;
    width:113px;
    text-align: left;
    flex-direction: column;
    gap:5px;
    padding: 5%;
`;
export const PlaceNameText = styled.div`
    color: #1E293B;
    font-size: 12px;
    font-weight: 600;
`;
export const PlacePeopleText = styled.div`
    color: #475569;
    font-size: 10px;
    font-weight: 500;
`;
export const PlaceImage = styled(Image)`
    width:100%;
    height:91px;
    border-radius: 10px 10px 0px 0px;
`;

//RandomBookList
export const RandomBookListContainer = styled.div`
    height:100%;
    width:346px;
    display:flex;
    flex-direction:column;
    gap:20px;
`;
export const BookCard = styled.div`
    width:100%;
    padding: 5%;
    border-radius: 10px;
    gap:11px;
    border: 1px solid #CBD5E1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BookInfoWrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const BookInfo = styled.div`
    width:114px;
    display: flex;
    flex-direction: column;
    gap:5px;
`;
export const BookImage = styled(Image)`
    width: 100%;
    height:163px;
`;
export const BookTitle = styled.div`
    color: #1E293B;
    font-size: 14px;
    font-weight: 600;
    line-height: 119%; 
    letter-spacing: -0.28px;
`;
export const Author = styled.div`
    color:  #64748B;
    font-size: 14px;
    font-weight: 500;
    line-height: 132%; 
    letter-spacing: -0.28px;
`;
export const Line = styled.hr`
    color: #E2E8F0;
    width: 296px;
    size:1px;
`;
export const Story = styled.div`
    width:296px;
    color: #1E293B;
    font-size: 12px;
    font-weight: 500;
    line-height: 131%;
    letter-spacing: -0.24px;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Indicator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#555' : '#ccc')};
  margin: 0 5px;
  transition: background-color 0.3s ease;
`;

export const SliderWrapper = styled.div`
    width:100%;
    overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  width:105%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const BookContent = styled.div`
    width:100%;
    padding: 5%;
    gap:11px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;