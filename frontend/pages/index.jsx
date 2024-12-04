import React, { useEffect, useState } from "react";
import Signin from "./sign/in";
import MainPage from "./main/index";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }

    if (isAuthenticated) {
      router.push("/main");
    }
  }, [isAuthenticated]);

  return !isAuthenticated && <Signin />;
}
