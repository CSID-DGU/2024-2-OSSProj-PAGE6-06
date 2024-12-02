import React, { useEffect, useState } from "react";
import * as S from "../Styled";

export default function Memo({ setMemo, initial }) {
  const [memoText, setMemoText] = useState(initial?.memo || "");

  const handleChange = (e) => {
    setMemoText(e.target.value);
    setMemo(memoText);
  };

  useEffect(() => {
    // console.log(initial);
    if (initial?.memo) {
      setMemoText(initial.memo);
    }
  }, []);

  return (
    <S.InputContainer>
      <S.Label>Memo</S.Label>
      <S.Textarea
        value={memoText}
        onChange={handleChange}
        placeholder="메모를 입력해 주세요"
      />
    </S.InputContainer>
  );
}
