import styled from "styled-components";

export const RecordTap = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  align-items: center;
`;

export const RecordTapButton = styled.div`
  width: 50%;
  padding: 4%;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s ease;

  color: ${(props) => (props.$isActive ? `#f8fafc` : `#64748B`)};
  background-color: ${(props) => (props.$isActive ? `#64748b` : `#E2E8F0`)};
`;

export const RecordContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
`;

export const RecordList = styled.div`
  width: 100%;
  margin-bottom: 80px;
  flex-direction: column;
  /* padding: 5%; */
  overflow-y: auto;
  display: flex;
  font-size: 14px;
  text-align: center;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 5px; // Width of the scrollbar
    display: none;
  }
`;
