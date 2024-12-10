import React, { useState, useEffect, useCallback } from "react";
import * as RS from "@/components/_styled/routineStyled";
import Book from "@/components/routine/routineFinish/Book";
import Place from "@/components/routine/routineFinish/Place";
import Memo from "@/components/routine/routineFinish/Memo";
import { API } from "@/pages/api";
import { useRouter } from "next/router";

export default function RoutineFinish() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [routineTitle, setRoutineTitle] = useState("");
  const [book, setBook] = useState("");
  const [memo, setMemo] = useState("");
  const [place, setPlace] = useState("");
  const [record, setRecord] = useState({
    routine: null,
    title: "",
    location: "",
    memo: "",
  });

  const postRoutineFinish = async (recordData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.post(`/routinefinish`, recordData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      localStorage.removeItem("routineContent");
      localStorage.removeItem("routineId");
      localStorage.removeItem("routineTime");
      localStorage.removeItem("routineTitle");
      localStorage.removeItem("selectedPlaceName");
      localStorage.removeItem("selectedPlaceAddress");
      localStorage.removeItem("isRoutineFinished");
      router.push("/record");
    } catch (err) {
      console.error("Failed to submit routine record:", err);
    }
  };

  useEffect(() => {
    const isRoutineFinished = localStorage.getItem("isRoutineFinished");
    if (isRoutineFinished !== "true") {
      alert("루틴이 종료되어야 완료 기록을 작성 할 수 있습니다");
      router.push("/routine");
      return;
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    setDate(formattedDate);
    setRoutineTitle(localStorage.getItem("routineTitle"));
  }, []);

  const handleClick = () => {
    const routineId = localStorage.getItem("routineId");

    const newRecord = {
      routine: routineId,
      title: book,
      location: place,
      memo: memo,
    };

    setRecord(newRecord);
    postRoutineFinish(newRecord);
    // console.log("Sending record to server:", newRecord);
  };
  useEffect(() => {
    const handlePopState = () => {
      localStorage.removeItem("routineContent");
      localStorage.removeItem("routineId");
      localStorage.removeItem("routineTime");
      localStorage.removeItem("routineTitle");
      localStorage.removeItem("isRoutineFinished");
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <RS.RoutineFinishPage>
      <RS.RoutineFinishContentContainer>
        <RS.RoutineInfo>
          <RS.Date>{date}</RS.Date>
          <RS.Title>{routineTitle}</RS.Title>
        </RS.RoutineInfo>
        <Book setBook={setBook} />
        <Place setPlace={setPlace} />
        <Memo setMemo={setMemo} />
        <RS.SubmitButton onClick={handleClick}>확인</RS.SubmitButton>
      </RS.RoutineFinishContentContainer>
    </RS.RoutineFinishPage>
  );
}
