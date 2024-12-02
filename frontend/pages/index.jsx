import React, { useEffect, useState } from "react";
import Signin from "./sign/in";
import MainPage from "./main/index";

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <MainPage /> : <Signin />;
}
