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
