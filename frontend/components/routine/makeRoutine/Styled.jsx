import styled from "styled-components";

//MakeRoutineForm
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Label = styled.div`
  color: #0f172a;
  font-size: 16px;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: -0.32px;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 100%;
  height: 49px;
  border-radius: 10px;
  background: #f1f4f7;
  color: #0f172a;
  border: none;
  display: flex;
  align-items: center;
  padding: 3%;
  &:focus {
    border: 1px solid #94a3b8;
    outline: none;
  }
  &::placeholder {
    color: #94a3b8;
  }
`;

export const MemoInput = styled.textarea`
  width: 100%;
  height: 151px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #f1f4f7;
  padding: 3%;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.28px;
  resize: none;

  &:focus {
    border: 1px solid #94a3b8;
    outline: none;
  }
  &::placeholder {
    color: #94a3b8;
  }
`;

export const SelectedTime = styled.div`
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
  padding: 3%;
  width: 100%;
  height: 49px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f1f4f7;

  display: flex;
  align-items: center;
  color: #94a3b8;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const DropdownList = styled.div`
  width: 100%;
  height: 164px;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  background: #f1f4f7;
  overflow-y: scroll;
`;
export const DropdownItem = styled.div`
  color: #0f172a;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.32px;
`;
export const SubmitButton = styled.div`
  width: 90%;
  height: 61px;
  border-radius: 10px;
  background: #cbd5e1;
  display: flex;
  align-items: center;
  color: #0f172a;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.4px;

  position: absolute;
  bottom: 35px;
`;
