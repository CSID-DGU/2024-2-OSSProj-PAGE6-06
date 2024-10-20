import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RecordCardContainer = styled.div`
  margin: 0 0 5% 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  padding: 5%;
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
  gap: 1%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #0f172a;
  border-bottom: 1px solid #0f172a;
  padding: 2% 0 5% 0;
  position: absolute;
`;

export const RecordCalendDayText = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20%;
  padding: 15%;
  color: #0f172a;
  border-radius: 100%;
  /* background-color: #94a3b8; */
  background-color: ${(props) =>
    `rgba(148, 163, 184, ${
      props.$percent / 100
    })`}; // 진한 파란색의 투명도 조정

  opacity: ${(props) => (props.$isCurrentMonth ? `1` : `0`)};
  border: ${(props) => (props.$isActive ? `1px solid #0F172A` : null)};
`;
