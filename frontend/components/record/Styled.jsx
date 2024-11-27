import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RecordCardWrapper = styled.div`
  width: 100%;
`;

export const RecordCardContainer = styled.div`
  margin: 0 0 5% 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  padding: 5%;
  text-align: left;
`;

export const RecordCardRoutine = styled.div`
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

export const RecordCardMore = styled(FontAwesomeIcon)`
  font-size: 14px;
`;

export const RecordDescription = styled.div`
  background-color: #f8fafc;
  font-size: 11px;
  border-radius: 10px;
  padding: 5%;
  height: 100%;
  line-height: 15px;
`;

// Record Calendar
export const RecordCalendarContainer = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecordCalendarMonth = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: 500;
  color: #0f172a;
`;

export const RecordCalendarButton = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: #8a8a8a;
`;

export const RecordCalendarWeek = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecordCalendartWeekText = styled.div`
  color: #0f172a;
  font-size: 13px;
`;

export const RecordCalenderDay = styled.div`
  width: 100%;
  /* height: 350px; */
  gap: 1%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #0f172a;
  border-bottom: 1px solid #0f172a;
  padding: 2% 0 5% 0;
`;

export const RecordCalendDayText = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
  width: 80%;
  padding: 25% 0;
  color: #0f172a;
  border-radius: 100%;
  /* background-color: #94a3b8; */
  background-color: ${(props) =>
    `rgba(148, 163, 184, ${
      props.$percent / 100
    })`}; // 진한 파란색의 투명도 조정

  opacity: ${(props) => (props.$isCurrentMonth ? `1` : `0`)};
  border: ${(props) =>
    props.$isActive ? `1px solid #0F172A` : `1px solid transparent`};
`;

// RecordCard
export const RecordCardRoutineInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3%;
  font-size: 10px;
  color: #475569;
  margin-bottom: 5%;
`;

export const RecordCardRoutineInfoText = styled.div``;

export const RecordCardBookTitle = styled.div`
  color: #475569;
  font-size: 12px;
  padding-bottom: 2%;
`;

// Record Month List
export const RecordMonthListContainer = styled.div`
  width: 90%;
  margin: 5%;
`;

export const RecordMonthListSearch = styled.div`
  border-radius: 10px;
  border: #64748b 1px solid;
  padding: 3% 5%;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? `#64748b` : `#0f172a`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecordMonthListIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #64748b;
`;

export const RecordMonthListModalContainer = styled.div`
  width: 90%;
  margin: 5% 0;
  border-radius: 10px;
  border: #64748b 1px solid;
  /* padding: 3% 0; */
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 300;
`;

export const RecordMonthListModalText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0f172a;
  width: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: start;

  border-bottom: ${(props) => (props.$isBorder ? `none` : `1px solid #64748b`)};
`;

// Record Edit Dropbox
export const DropboxContainer = styled.div`
  background-color: #f8fafc;
  color: #0f172a;
  border: 1px solid #cfcfcf;
  z-index: 400;
  width: 25%;
  padding: 3% 0;
  right: 10px;
  top: 50px;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
`;

export const DropboxText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 7%;
`;

export const DropboxIcon = styled(FontAwesomeIcon)`
  margin: 0 5%;
  font-size: 12px;
`;
