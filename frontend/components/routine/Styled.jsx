import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

//MakeRoutineButton
export const MakeRoutineButton = styled.button`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: #cbd5e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
`;
export const MakeRoutineButtonText = styled.div`
  color: #0f172a;
  font-size: 20px;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: -0.4px;
  background-color: transparent;
`;
export const PlusIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #334155;
`;
//RoutineList
export const RoutineListContainer = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 5%;
  justify-content: space-between;
`;
export const SettingIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const SettingIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #334155;
`;
export const RoutineListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const RoutineContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
  border-radius: 10px;
  border: none;
  background: #f1f4f7;
  &:focus {
    border: 1px solid #94a3b8;
  }
`;
export const RoutineListScrollWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
`;
export const RoutineText = styled.div`
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
  background-color: transparent;
`;
export const MinuteTextContainer = styled.div`
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20%;
`;
export const VerticalLine = styled.div`
  width: 1px;
  height: 40px;
  background: #94a3b8;
`;
export const MinuteText = styled.div`
  color: #0f172a;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
  background-color: transparent;
`;

export const StartButton = styled.button`
  position: absolute;
  background: none;
  bottom:115px;
  width: 70px;
  height: 70px;
  border:none;
`;
export const StartIcon = styled(FontAwesomeIcon)`
  width: 70px;
  height: 70px;
  color: #334155;
`;
export const ClubIcon = styled(FontAwesomeIcon)`
  color: #475569;
  font-size: 12px;
  width: 12px;
  background-color: transparent;
`;
export const RoutineTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;

export const EmptyIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: #94A3B8;
`;

export const EmptyText = styled.div`
    color: #475569;
    font-size: 14px;
    font-weight: 500;
    line-height: 2;
`;

//Timer
export const TimerContainer = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
export const TimerText = styled.p`
  color: #0f172a;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: -0.96px;
  position: relative;
  bottom: 200px;
  background: transparent;
`;

//TimerInfo
export const TimerInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: transparent;
`;
export const TitleText = styled.div`
  color: #0f172a;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: -0.4px;
  background: transparent;
`;
export const ContentText = styled.div`
  color: var(--gray600, #475569);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.3px;
  background: transparent;
`;
//ProgressBar
export const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  bottom: 50px;
  background: transparent;
`;
export const PauseButton = styled.button`
  width: 70px;
  height: 70px;
  all: unset;
`;
export const PauseIcon = styled(FontAwesomeIcon)`
  width: 70px;
  height: 70px;
  color: #334155;
`;

//Place
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const Label = styled.div`
  color: #0f172a;
  font-size: 20px;
  font-weight: 600;
  line-height: 132%; /* 26.4px */
  letter-spacing: -0.4px;
`;
export const DropdownContainer = styled.div`
  width: 100%;
  height: 49px;
  border-radius: 10px;
  background: #f1f4f7;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    border: 1px solid #94a3b8;
  }
`;
export const DropdownListContainer = styled.div`
  width: 100%;
  /* height: 164px; */
  overflow-y: scroll;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  background: #f1f4f7;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px;
`;
export const BookText = styled.div`
  width: 275px;
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
  background-color: transparent;
`;
export const DownIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #475569;
`;
export const DropdownListItem = styled.div`
  color: #0f172a;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
  background: transparent;

  &:hover {
    background-color: #cbd5e1;
  }
`;
export const InputBox = styled.div`
  width: 100%;
  height: 49px;
  border-radius: 10px;
  background: #f1f4f7;
`;

export const PlaceContainer = styled.div`
  width: 100%;
  height: 88px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 49px;
  border: none;
  border-radius: 10px;
  background: #f1f4f7;
  padding: 13px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;

  &:focus {
    border: 1px solid #94a3b8;
    outline: none;
  }

  &::placeholder {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    line-height: 132%;
    letter-spacing: -0.28px;
  }
`;
export const SearchBox = styled.div`
  width: 100%;
  height: 49px;
  border: none;
  border-radius: 10px;
  background: #f1f4f7;
  padding: 13px;
  color: #0f172a;
  font-size: 16px;

  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;

  &:focus {
    border: 1px solid #94a3b8;
    outline: none;
  }

  &::placeholder {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    line-height: 132%;
    letter-spacing: -0.28px;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #475569;
  position: relative;
  bottom: 49px;
  left: 90%;
`;

//KakaoMap
export const MapContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: transparent;
`;

export const PlacesList = styled.ul`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover {
    background-color: #cbd5e1;
  }
`;

export const MarkerBg = styled.div`
  width: 35px;
  height: 36px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
    no-repeat;
  background-position: ${({ $markerIndex }) =>
    `0 ${-10 - 46 * $markerIndex}px`};
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h5`
  font-size: 15px;
  margin: 0;
  font-weight: bold;
`;

export const RoadAddress = styled.span`
  font-size: 13px;
  color: #333;
`;

export const Jibun = styled.span`
  font-size: 12px;
  color: gray;
`;

export const Tel = styled.span`
  font-size: 12px;
  color: #888;
`;

export const Marker1 = styled(MarkerBg)`
  background-position: 0 -10px;
`;

export const Marker2 = styled(MarkerBg)`
  background-position: 0 -56px;
`;

export const Marker3 = styled(MarkerBg)`
  background-position: 0 -102px;
`;

export const Marker4 = styled(MarkerBg)`
  background-position: 0 -148px;
`;

export const Marker5 = styled(MarkerBg)`
  background-position: 0 -194px;
`;

export const Marker6 = styled(MarkerBg)`
  background-position: 0 -240px;
`;

export const Marker7 = styled(MarkerBg)`
  background-position: 0 -286px;
`;

export const Marker8 = styled(MarkerBg)`
  background-position: 0 -332px;
`;

export const Marker9 = styled(MarkerBg)`
  background-position: 0 -378px;
`;

export const Marker10 = styled(MarkerBg)`
  background-position: 0 -423px;
`;

export const Marker11 = styled(MarkerBg)`
  background-position: 0 -470px;
`;

export const Marker12 = styled(MarkerBg)`
  background-position: 0 -516px;
`;

export const Marker13 = styled(MarkerBg)`
  background-position: 0 -562px;
`;

export const Marker14 = styled(MarkerBg)`
  background-position: 0 -608px;
`;

export const Marker15 = styled(MarkerBg)`
  background-position: 0 -654px;
`;

//PlaceModal
export const ModalOverlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  width: 320px;
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CloseButton = styled(FontAwesomeIcon)`
  position: relative;
  left: 95%;
  color: #334155;
  /* font-size: 14px; */
  width: 14px;
`;
export const PlaceSubmitButton = styled.button`
  width: 100%;
  height: 51px;
  border-radius: 10px;
  border: none;
  background: #e2e8f0;

  color: #0f172a;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.4px;

  &:hover {
    background: #cbd5e1;
  }
`;

//Memo
export const Textarea = styled.textarea`
  width: 100%;
  height: 151px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #f1f4f7;
  padding: 5%;
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.28px;
  resize: none;

  &:focus {
    border: 1px solid #94a3b8;
    outline: none;
  }
`;

//RoutineDelete
export const DeleteDropboxContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  top: 30vh;
  z-index: 400;
  width: 90%;
  margin: 5%;
  padding-top: 7%;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const DeleteDropboxButtonSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 7%;
  border-top: 1px solid #64748b;
  align-items: center;
  justify-content: center;
`;

export const DeleteDropboxButtonLine = styled.div`
  width: 0.5px;
  background-color: #64748b;
  align-self: stretch;
  display: flex;
  height: auto;
`;

export const DeleteDropboxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 60px;
  cursor: pointer;
`;

// Record Delete Dropbox
export const RoutineDeleteDropboxContainer = styled.div`
  background-color: #fff;
  color: #0f172a;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 90%;
  margin: 3% 5%;
  padding-top: 7%;
  position: fixed;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const ModalText = styled.div`
  padding: 5%;
`;
