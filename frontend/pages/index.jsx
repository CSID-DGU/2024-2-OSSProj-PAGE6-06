import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import * as MS from "../components/_styled/mainStyled";
import JoinClub from "@/components/main/JoinClub";
import PopularPlace from "@/components/main/PopularPlace";
import RandomBookList from "@/components/main/RandomBookList";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/sign/in");
  }

  return (
    <MS.MainWrapper>
      <Header path="Reading Routine" />
      <MS.MainContainer>
        <RandomBookList />
        <PopularPlace />
        <JoinClub />
      </MS.MainContainer>
    </MS.MainWrapper>
  );
}
